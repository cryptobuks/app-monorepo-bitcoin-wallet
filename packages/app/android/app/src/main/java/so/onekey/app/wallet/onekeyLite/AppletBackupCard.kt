package so.onekey.app.wallet.onekeyLite

import android.nfc.tech.IsoDep
import android.util.Log
import org.haobtc.onekey.card.gpchannel.GPChannelNatives
import so.onekey.app.wallet.keys.KeysNativeProvider
import so.onekey.app.wallet.nfc.NFCExceptions
import so.onekey.app.wallet.onekeyLite.NfcCommand.Companion.LITE_TAG
import so.onekey.app.wallet.onekeyLite.NfcCommand.Companion.combCommand
import so.onekey.app.wallet.onekeyLite.NfcCommand.Companion.send
import so.onekey.app.wallet.onekeyLite.NfcCommand.Companion.sendSafe
import so.onekey.app.wallet.onekeyLite.OnekeyLiteCard.mCardManager
import so.onekey.app.wallet.onekeyLite.entitys.CardResponse
import so.onekey.app.wallet.onekeyLite.entitys.ParsedCertInfo
import so.onekey.app.wallet.onekeyLite.entitys.SecureChanelParam
import so.onekey.app.wallet.utils.HexUtils
import so.onekey.app.wallet.utils.Utils

open class AppletBackupCard : IAppletBackupCard {
    override fun buildGPCAPDU(param: APDUParam, safeChannel: Boolean): String {
        return if (safeChannel) {
            GPChannelNatives.nativeGPCBuildSafeAPDU(
                param.cla,
                param.ins,
                param.p1,
                param.p2,
                param.data
            )
        } else {
            GPChannelNatives.nativeGPCBuildAPDU(
                param.cla,
                param.ins,
                param.p1,
                param.p2,
                param.data
            )
        }.also {
            Log.d(LITE_TAG, "=====>>> buildGPCAPDU: safe:$safeChannel  APDU:$it")
        }
    }

    override fun initChannel(isoDep: IsoDep): Int {
        Log.d(NfcCommand.LITE_TAG, " init_channel AppletBackupCard")

        val success = selectIssuerSd(isoDep)
        Log.d(NfcCommand.LITE_TAG, " selectIssuerSd ---->$success")
        if (!success) {
            return NfcCommand.INIT_CHANNEL_FAILURE
        }

        val groupId = verifyDeviceSN(isoDep)
        val cardInfo = getCardName(isoDep)

        Log.d(NfcCommand.LITE_TAG, " init_channel groupId-->$groupId")
        Log.d(NfcCommand.LITE_TAG, " init_channel cardInfo-->$cardInfo")
        if (groupId.isNullOrEmpty() || cardInfo.isEmpty()) {
            return NfcCommand.INIT_CHANNEL_FAILURE
        }
        if (groupId == NfcCommand.NOT_MATCH_DEVICE || cardInfo == NfcCommand.NOT_MATCH_DEVICE) {
            return NfcCommand.INIT_CHANNEL_FAILURE
        }
        // 1. 初始化安全通道设置
        val param = SecureChanelParam.objectFromData(
            KeysNativeProvider().getLiteSecureChannelInitParams(Utils.getApp())
        )
        param.cardGroupID = groupId
        val status1 = GPChannelNatives.nativeGPCInitialize(param.toString())
        return if (status1 != 0) {
            NfcCommand.INIT_CHANNEL_FAILURE
        } else {
            NfcCommand.INIT_CHANNEL_SUCCESS
        }
    }

    override fun selectBackupApp(isoDep: IsoDep): Boolean {
        val selectApp = GPChannelNatives.nativeGPCBuildAPDU(
            0x00, 0xA4, 0x04, 0x00, "D156000132834001"
        )
        val res = send(isoDep, selectApp)
        if (res.isNullOrEmpty()) {
            return false
        }
        return NfcCommand.STATUS_SUCCESS == res
    }

    /**
     * Whether the card has a backup
     */
    override fun hasBackup(isoDep: IsoDep): Boolean {
        val backupStatusCmd = GPChannelNatives.nativeGPCBuildAPDU(0x80, 0x6A, 0x00, 0x00)
        val backupStatusRes = sendSafe(isoDep, backupStatusCmd)
        if (backupStatusRes.isSuccess()) {
            // s t = 02 Have backed up
            return backupStatusRes.data == "02"
        }
        return false
    }

    override fun isNewCard(isoDep: IsoDep): Boolean {
        // get pin status
        val backupStatusCmd =
            GPChannelNatives.nativeGPCBuildAPDU(0x80, 0xCB, 0x80, 0x00, "DFFF028105")
        val backupStatusRes = sendSafe(isoDep, backupStatusCmd)
        Log.d(NfcCommand.LITE_TAG, "isNewCard -----> : $backupStatusRes")
        if (backupStatusRes.isSuccess()) {
            // 02 Pin is set
            return backupStatusRes.data == "02"
        }
        return false
    }

    override fun checkPinInitialized(isoDep: IsoDep): Boolean {
        val selected: Boolean = selectBackupApp(isoDep)
        if (!selected) {
            return false
        }

//        return !isNewCard(isoDep)
        return !openSecureChannelFailed(isoDep)
    }

    override fun setupNewPin(isoDep: IsoDep, setUpPin: String): Boolean {
//        val initChannelResult = initChannel(isoDep)
//        if (initChannelResult != NfcCommand.INIT_CHANNEL_SUCCESS) {
//            throw NFCExceptions.InterruptException()
//        }
//        if (!selectIssuerSd(isoDep)) {
//            throw NFCExceptions.InterruptException()
//        }
//
//        val checkPinInit = checkPinInitialized(isoDep)
//        if (!checkPinInit) {
//            throw NFCExceptions.InterruptException()
//        }

        if (openSecureChannelFailed(isoDep)) {
            throw NFCExceptions.InterruptException()
        }

        val changePin: String = setupNewPinCommand(setUpPin)
        val res = send(isoDep, changePin)
        Log.d(NfcCommand.LITE_TAG, " set Pin command result --->$res")
        return if (res.isNullOrEmpty()) {
            false
        } else {
            res.endsWith(NfcCommand.STATUS_SUCCESS)
        }
    }

    override fun verifyPinCommand(string: String?): String? {
        return GPChannelNatives.nativeGPCBuildSafeAPDU(
            0x80, 0x20, 0x00, 0x00, "06" + HexUtils.stringToHexString(string)
        )
    }

    override fun setupNewPinCommand(string: String?): String {
        val pinHex = HexUtils.stringToHexString(string)
        return GPChannelNatives.nativeGPCBuildSafeAPDU(
            0x80,
            0xCB,
            0x80,
            0x00,
            "DFFE0B8204080006$pinHex"
        )
    }

    private fun changePinCommand(oldPin: String?, newPin: String?): String {
        val changePinCommand = combCommand(
            HexUtils.hexString2Bytes("8204"),
            HexUtils.hexString2Bytes(HexUtils.stringToHexString(oldPin)),
            HexUtils.hexString2Bytes(HexUtils.stringToHexString(newPin))
        )

        val execCommand = combCommand(HexUtils.hexString2Bytes("DFFE"), changePinCommand)

        return GPChannelNatives.nativeGPCBuildSafeAPDU(
            0x80,
            0xCB,
            0x80,
            0x00,
            HexUtils.byteArr2HexStr(execCommand)
        )
    }

    override fun backupDataCommand(mnemonic: String): String? {
        return GPChannelNatives.nativeGPCBuildAPDU(
            0x80,
            0x3B,
            0x00,
            0x00,
            mnemonic
        )
    }

    override fun getCardSerialNumCommand(): String {
        return GPChannelNatives.nativeGPCBuildAPDU(0x80, 0xCB, 0x80, 0x00, "DFFF028101")
    }

    override fun hasBackUpCommand(): String {
        return GPChannelNatives.nativeGPCBuildAPDU(0x80, 0x6A, 0x00, 0x00, "")
    }

    override fun getCenterCardCommand(): String {
        return GPChannelNatives.nativeGPCBuildAPDU(0x80, 0xCA, 0xBF, 0x21, "A60483021518")
    }

    override fun getSNCommand(): String {
        return GPChannelNatives.nativeGPCBuildAPDU(0x80, 0xCB, 0x80, 0x00, "DFFF028101")
    }

    override fun selectSdCommand(): String {
        return GPChannelNatives.nativeGPCBuildAPDU(
            0x00, 0xA4, 0x04, 0x00, ""
        )
    }

    override fun backupData(
        isoDep: IsoDep,
        isBackupApp: Boolean,
        mnemonic: String
    ): Boolean {
        if (!isBackupApp) {
            val selected: Boolean = selectBackupApp(isoDep)
            if (!selected) {
                return false
            }
            if (openSecureChannelFailed(isoDep)) {
                return false
            }
        }
        val importSeed = backupDataCommand(mnemonic)
        val res = send(isoDep, importSeed)
        Log.d(NfcCommand.LITE_TAG, "Backup Data Command-->$res")
        return if (res.isNullOrEmpty()) {
            false
        } else {
            res.endsWith(NfcCommand.STATUS_SUCCESS)
        }
    }

    override fun exportData(isoDep: IsoDep?): String? {
        val export = GPChannelNatives.nativeGPCBuildAPDU(
            0x80,
            0x4B,
            0x00,
            0x00, ""
        )
        val sendResult = send(isoDep, export)
        if (sendResult.isNullOrEmpty() || !sendResult.endsWith(NfcCommand.STATUS_SUCCESS)) {
            return null
        }
        val originResponse = GPChannelNatives.nativeGPCParseAPDUResponse(
            sendResult
        )
        val response = CardResponse.objectFromData(
            originResponse
        )
            .response
        Log.d(NfcCommand.LITE_TAG, "---origin-->$response")
        return response
    }


    override fun startVerifyPin(isoDep: IsoDep, verifyPin: String): Int {
//        val initChannelResult = initChannel(isoDep)
//        if (initChannelResult != NfcCommand.INIT_CHANNEL_SUCCESS) {
//            throw NFCExceptions.InterruptException()
//        }
//        if (!selectIssuerSd(isoDep)) {
//            throw NFCExceptions.InterruptException()
//        }
//        if (openSecureChannelFailed(isoDep)) {
//            throw NFCExceptions.InterruptException()
//        }

        // 验证PIN
        val verify: String? = verifyPinCommand(verifyPin)
        val response = send(isoDep, verify)

        Log.d(NfcCommand.LITE_TAG, "startVerifyPin -----> : $response")

        return if (response == null) {
            NfcCommand.INTERRUPT_STATUS
        } else if (response.endsWith(NfcCommand.STATUS_SUCCESS)) {
            Log.d(NfcCommand.LITE_TAG, "---verify success")
            NfcCommand.VERIFY_SUCCESS
        } else {
            retryNumCommandAndReset(isoDep)
        }
    }


    override fun changePin(isoDep: IsoDep, oldPin: String, newPin: String?): Int {
        val initChannelResult = initChannel(isoDep)
        if (initChannelResult != NfcCommand.INIT_CHANNEL_SUCCESS) {
            throw NFCExceptions.InterruptException()
        }
        if (!selectIssuerSd(isoDep)) {
            throw NFCExceptions.InterruptException()
        }
        if (openSecureChannelFailed(isoDep)) {
            throw NFCExceptions.InterruptException()
        }
        val changePin: String = changePinCommand(oldPin, newPin)

        val res = send(isoDep, changePin)
        Log.d(NfcCommand.LITE_TAG, " set Pin command result --->$res")

        if (res?.endsWith("9B01") == true) {
            // 原密码错误
            return retryNumCommandAndReset(isoDep)
        }
        return if (res.isNullOrEmpty() || !res.endsWith(NfcCommand.STATUS_SUCCESS)) {
            NfcCommand.CHANGE_PIN_ERROR
        } else {
            NfcCommand.CHANGE_PIN_SUCCESS
        }
    }

    override fun getRetryCount(isoDep: IsoDep): Int {
        if (!selectIssuerSd(isoDep)) {
            return NfcCommand.GET_RETRY_NUM_INTERRUPT_STATUS
        }
        val getRetryMaxNumCommand =
            GPChannelNatives.nativeGPCBuildAPDU(0x80, 0xCB, 0x80, 0x00, "DFFF028102")
        val retryMaxNum = send(isoDep, getRetryMaxNumCommand)
        if (retryMaxNum.isNullOrEmpty() || !retryMaxNum.endsWith(NfcCommand.STATUS_SUCCESS)) {
            return NfcCommand.GET_RETRY_NUM_INTERRUPT_STATUS
        }
        Log.d(NfcCommand.LITE_TAG, "getRetryNum String-->${retryMaxNum}")
        val leftRetryNum = retryMaxNum[1].digitToInt(16)
        Log.d(NfcCommand.LITE_TAG, "getRetryNum-->${leftRetryNum}")
        return leftRetryNum
    }

    protected fun retryNumCommandAndReset(isoDep: IsoDep): Int {
        val leftRetryNum = getRetryCount(isoDep)
        return if (leftRetryNum == 0) {
            resetCard(isoDep)
        } else {
            leftRetryNum
        }
    }

    override fun resetCard(isoDep: IsoDep): Int {
//        val selected = selectIssuerSd(isoDep)
//        if (!selected) {
//            return NfcCommand.RESET_INTERRUPT_STATUS
//        }
//        if (openSecureChannelFailed(isoDep)) {
//            return NfcCommand.RESET_INTERRUPT_STATUS
//        }
        val clearStatus =
            GPChannelNatives.nativeGPCBuildSafeAPDU(0x80, 0xCB, 0x80, 0x00, "DFFE028205")
        val res = sendSafe(isoDep, clearStatus)
        return if (res.isConnectFailure()) {
            NfcCommand.RESET_INTERRUPT_STATUS
        } else {
            NfcCommand.RESET_PIN_SUCCESS
        }
    }

    override fun selectIssuerSd(isoDep: IsoDep): Boolean {
        try {
            val selectSd = selectSdCommand()
            val res: String? = send(isoDep, selectSd)
            Log.d(NfcCommand.LITE_TAG, "selectIssuerSd -----$res")
            if (res.isNullOrEmpty()) {
                return false
            }
            return res.endsWith(NfcCommand.STATUS_SUCCESS)
        } catch (e: Throwable) {
            return false
        }
    }

    override fun verifyDeviceSN(isoDep: IsoDep): String? {
        val cardId = getCardCert(isoDep)
        if (cardId.isNullOrEmpty()) {
            return NfcCommand.NOT_MATCH_DEVICE
        }
        val cert = GPChannelNatives.nativeGPCParseCertificate(cardId)
        val certInfo = ParsedCertInfo.objectFromData(cert)
        return certInfo.getSubjectID()
    }


    override fun getCardName(isoDep: IsoDep): String {
        val getSNCommand = getSNCommand()
        var res: String? = send(isoDep, getSNCommand)
        if (res.isNullOrEmpty()) {
            return NfcCommand.NOT_MATCH_DEVICE
        }
        if (res.length > 4 && res.endsWith(NfcCommand.STATUS_SUCCESS)) {
            res = res.substring(0, res.length - 4)
            return String(HexUtils.hexString2Bytes(res))
        }
        return NfcCommand.NOT_MATCH_DEVICE
    }


    override fun getCardCert(isoDep: IsoDep?): String? {
        // #1.NFC:GET CERT.SD.ECKA 获取智能卡证书
        val getCertCommand = getCenterCardCommand()
        val rawCert = send(isoDep, getCertCommand)
        if (rawCert.isNullOrEmpty()) {
            return null
        }
        if (!rawCert.endsWith(NfcCommand.STATUS_SUCCESS) || rawCert.length < 4) {
            return null
        }
        var cert: String? = rawCert.substring(0, rawCert.length - 4)
        Log.d(NfcCommand.LITE_TAG, "getCardCert---->$cert")
        cert = GPChannelNatives.nativeGPCTLVDecode(cert)
        return CardResponse.objectFromData(cert).response
    }

    private fun openSecureChannelFailed(isoDep: IsoDep): Boolean {
        Log.d(NfcCommand.LITE_TAG, "openSecureChannelFailed ----->")
        val param = KeysNativeProvider().getLiteSecureChannelInitParams(Utils.getApp())
        val chanelParam = SecureChanelParam.objectFromData(param)
        // prepare to open secure channel
        val step1 = GPChannelNatives.nativeGPCBuildAPDU(0x80, 0x2A, 0x18, 0x10, chanelParam.crt)
        // 0x80, 0x82, 0x18, 0x15
        val res1 = send(isoDep, step1)
        if (res1.isNullOrEmpty()) {
            return true
        }
        val authData = GPChannelNatives.nativeGPCBuildMutualAuthData()
        val step2 = GPChannelNatives.nativeGPCBuildAPDU(0x80, 0x82, 0x18, 0x15, authData)
        val authRes = send(isoDep, step2)
        if (authRes.isNullOrEmpty()) {
            return true
        }
        val res =
            CardResponse.objectFromData(GPChannelNatives.nativeGPCParseAPDUResponse(authRes))
                .response
        val status = GPChannelNatives.nativeGPCOpenSecureChannel(res)
        if (status != 0) {
            return true
        }
        return false
    }


}