package so.onekey.app.wallet.onekeyLite

import android.nfc.tech.IsoDep
import android.util.Log
import so.onekey.app.wallet.nfc.NFCExceptions
import so.onekey.app.wallet.onekeyLite.NfcCommand.Companion.LITE_TAG
import so.onekey.app.wallet.onekeyLite.NfcCommand.Companion.send
import so.onekey.app.wallet.onekeyLite.NfcCommand.Companion.sendSafe
import so.onekey.app.wallet.utils.HexUtils
import so.onekey.app.wallet.utils.ShaUtils


class AppletBackupCardV2 : AppletBackupCard() {
    override fun initChannel(isoDep: IsoDep): Int {
        Log.d(NfcCommand.LITE_TAG, " init_channel AppletBackupCardV2")

        val success = selectIssuerSd(isoDep)

        return if (success) {
            NfcCommand.INIT_CHANNEL_SUCCESS
        } else {
            NfcCommand.INIT_CHANNEL_FAILURE
        }
    }

    override fun isNewCard(isoDep: IsoDep): Boolean {
        // get pin status
        val backupStatusCmd =
            buildGPCAPDU(APDUParam(0x80, 0xCB, 0x80, 0x00, "DFFF028105"))
        val backupStatusRes = sendSafe(isoDep, backupStatusCmd)
        Log.d(NfcCommand.LITE_TAG, "backupStatusRes -----> $backupStatusRes")
        if (backupStatusRes.isSuccess()) {
            // 02 Pin is set
            return backupStatusRes.data != "02"
        }
        return true
    }

    override fun selectBackupApp(isoDep: IsoDep): Boolean {
        Log.d(NfcCommand.LITE_TAG, "selectBackupApp ----->")
        val selectApp = buildGPCAPDU(
            APDUParam(
                0x00, 0xA4, 0x04, 0x00, "6f6e656b65792e6261636b757001"
            )
        )
        val res = send(isoDep, selectApp)
        if (res.isNullOrEmpty()) {
            return false
        }
        return NfcCommand.STATUS_SUCCESS == res
    }

    override fun selectIssuerSd(isoDep: IsoDep): Boolean {
        return true
    }

    override fun checkPinInitialized(isoDep: IsoDep): Boolean {
        return !isNewCard(isoDep)
    }

    override fun setupNewPinCommand(string: String?): String {
        val pinHex = HexUtils.stringToHexString(string)
        Log.d(LITE_TAG, "setupNewPinCommand: ---> $string, $pinHex")
        return buildGPCAPDU(
            APDUParam(
                0x80, 0xCB, 0x80, 0x00,
                "DFFE0B8204080006$pinHex"
            )
        )
    }

    override fun verifyPinCommand(string: String?): String {
        return buildGPCAPDU(
            APDUParam(
                0x80, 0x20, 0x00, 0x00, "$string"
            )
        )
    }

    private fun getChallenge(isoDep: IsoDep): SendResponse {
        val challengeCommand = buildGPCAPDU(APDUParam(0x80, 0x1F, 0x00, 0x00, ""))
        return sendSafe(isoDep, challengeCommand)
    }

    override fun startVerifyPin(isoDep: IsoDep, verifyPin: String): Int {
        val challengeRes = getChallenge(isoDep)
        Log.d(LITE_TAG, "getChallenge: challengeRes -----> $challengeRes")
        val challenge = challengeRes.getDataBytes()
        if (challengeRes.isSuccess() || challengeRes.isEmptyData()) {
            NfcCommand.INTERRUPT_STATUS
        }

        val digestPin =
            ShaUtils.sha256(HexUtils.hexString2Bytes(HexUtils.stringToHexString(verifyPin)) + challenge!!)

        // 验证PIN
        val verify: String = verifyPinCommand(digestPin)
        val response = sendSafe(isoDep, verify)
        Log.d(LITE_TAG, "verifyPinCommand: ----> response:$response")
        return if (response.isConnectFailure()) {
            NfcCommand.INTERRUPT_STATUS
        } else if (response.isSuccess()) {
            Log.d(NfcCommand.LITE_TAG, "---verify success")
            NfcCommand.VERIFY_SUCCESS
        } else if (response.data == "6983") {
            Log.d(NfcCommand.LITE_TAG, "---verify Too many errors, Locked")
            resetCard(isoDep)
        } else {
            if (response.getCode().startsWith("63C")) {
                return response.sw2.toInt() and 0x0F
            }
            retryNumCommandAndReset(isoDep)
        }
    }

    override fun setupNewPin(isoDep: IsoDep, setUpPin: String): Boolean {
        val changePin: String = setupNewPinCommand(setUpPin)
        Log.d(NfcCommand.LITE_TAG, " set Pin command ---> $changePin")

        val res = send(isoDep, changePin)
        Log.d(NfcCommand.LITE_TAG, " set Pin result ---> $res")
        return if (res.isNullOrEmpty()) {
            false
        } else {
            res.endsWith(NfcCommand.STATUS_SUCCESS)
        }
    }

    private fun changePinCommand(oldPin: String?, newPin: String?): String {
        val changePinCommand = NfcCommand.combCommand(
            HexUtils.hexString2Bytes("8204"),
            HexUtils.hexString2Bytes(oldPin),
            HexUtils.hexString2Bytes(HexUtils.stringToHexString(newPin))
        )

        val execCommand = NfcCommand.combCommand(HexUtils.hexString2Bytes("DFFE"), changePinCommand)

        return buildGPCAPDU(
            APDUParam(
                0x80, 0xCB, 0x80, 0x00, HexUtils.byteArr2HexStr(execCommand)
            )
        )
    }

    override fun changePin(isoDep: IsoDep, oldPin: String, newPin: String?): Int {
        val challengeRes = getChallenge(isoDep)
        val challenge = challengeRes.getDataBytes()
        if (challengeRes.isSuccess() || challengeRes.isEmptyData()) {
            NfcCommand.INTERRUPT_STATUS
        }

        val digestPin =
            ShaUtils.sha256(HexUtils.hexString2Bytes(HexUtils.stringToHexString(oldPin)) + challenge!!)

        val changePin: String = changePinCommand(digestPin, newPin)

        val response = sendSafe(isoDep, changePin)
        Log.d(NfcCommand.LITE_TAG, " set Pin command result --->$response")
        return if (response.isConnectFailure()) {
            NfcCommand.INTERRUPT_STATUS
        } else if (response.isSuccess()) {
            Log.d(NfcCommand.LITE_TAG, "---verify success")
            NfcCommand.CHANGE_PIN_SUCCESS
        } else if (response.data == "6983") {
            Log.d(NfcCommand.LITE_TAG, "---verify Too many errors, Locked")
            resetCard(isoDep)
        } else {
            if (response.getCode().startsWith("63C")) {
                return response.sw2.toInt() and 0x0F
            }
            retryNumCommandAndReset(isoDep)
        }
    }
}