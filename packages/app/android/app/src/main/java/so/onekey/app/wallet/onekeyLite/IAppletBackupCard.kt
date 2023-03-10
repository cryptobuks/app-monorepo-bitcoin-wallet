package so.onekey.app.wallet.onekeyLite

import android.nfc.tech.IsoDep
import so.onekey.app.wallet.nfc.NFCExceptions

data class APDUParam(
    val cla: Long,
    val ins: Long,
    val p1: Long,
    val p2: Long,
    val data: String = ""
)

interface IAppletBackupCard {
    fun buildGPCAPDU(param: APDUParam, safeChannel: Boolean = false): String

    fun initChannel(isoDep: IsoDep): Int

    fun isNewCard(isoDep: IsoDep): Boolean
    fun checkPinInitialized(isoDep: IsoDep): Boolean

    @Throws(NFCExceptions::class)
    fun hasBackup(isoDep: IsoDep): Boolean
    fun startVerifyPin(isoDep: IsoDep, verifyPin: String): Int
    fun setupNewPin(isoDep: IsoDep, setUpPin: String): Boolean
    fun changePin(isoDep: IsoDep, oldPin: String, newPin: String?): Int

    fun backupData(isoDep: IsoDep, isBackupApp: Boolean, mnemonic: String): Boolean
    fun exportData(isoDep: IsoDep?): String?
    fun resetCard(isoDep: IsoDep): Int


    fun verifyPinCommand(string: String?): String?
    fun setupNewPinCommand(string: String?): String
    fun backupDataCommand(mnemonic: String): String?
    fun getCardSerialNumCommand(): String
    fun hasBackUpCommand(): String
    fun getCenterCardCommand(): String
    fun getSNCommand(): String
    fun selectSdCommand(): String
    fun getRetryCount(isoDep: IsoDep): Int
    fun selectIssuerSd(isoDep: IsoDep): Boolean
    fun verifyDeviceSN(isoDep: IsoDep): String?

    fun getCardName(isoDep: IsoDep): String
    fun getCardCert(isoDep: IsoDep?): String?
    fun selectBackupApp(isoDep: IsoDep): Boolean
}