package so.onekey.app.wallet.onekeyLite

import android.nfc.tech.IsoDep
import android.util.Log
import so.onekey.app.wallet.utils.HexUtils
import java.io.IOException
import java.lang.Compiler.command
import java.util.*


/**
 *
 * @Author:         peter Qin
 *
 */

data class SendResponse(val sw1: Byte, val sw2: Byte, val data: String? = null) {
    fun isSuccess() = sw1 == 0x90.toByte() && sw2 == 0x00.toByte()

    fun isConnectFailure() = sw1 == 0x6F.toByte() && sw2 == 0x00.toByte()

    fun isEmptyData() = data.isNullOrEmpty()

    fun getCodeBytes(): ByteArray = byteArrayOf(sw1, sw2)
    fun getCode(): String = HexUtils.byteArr2HexStr(byteArrayOf(sw1, sw2))

    fun getDataBytes(): ByteArray? =
        if (isEmptyData()) null else HexUtils.hexString2Bytes(data)
}

class NfcCommand {

    companion object {
        const val MNEMONIC = "mnemonics"
        const val MODE = "statusMode"
        const val SELECT_CARD_ID = "select_card_id"
        const val VERIFY_SUCCESS = 100
        const val INTERRUPT_STATUS = 1000
        const val RESET_INTERRUPT_STATUS = 1001
        const val GET_RETRY_NUM_INTERRUPT_STATUS = 1002
        const val RESET_PIN_SUCCESS = -1
        const val CHANGE_PIN_SUCCESS = -10
        const val CHANGE_PIN_ERROR = -100
        const val NEW_PIN = "029000"
        const val MAX_RETRY_NUM = 10
        const val NO_RETRY_NUM_RESET_CARD = 0
        const val NOT_MATCH_DEVICE = "cannot_match_device"
        const val INIT_CHANNEL_SUCCESS = 104
        const val INIT_CHANNEL_FAILURE = 105
        const val STATUS_SUCCESS = "9000"
        const val STATUS_FAILURE = "FFFF"
        const val HAS_BACK_UP = "029000"
        const val LITE_VERSION = "01"
        const val LITE_LANGUAGE = "00"// english
        const val LITE_TAG = "ffff"

        private const val RESPONSE_STATUS_LENGTH = 4

        @JvmStatic
        fun connect(isoDep: IsoDep?) {
            if (isoDep?.isConnected == false) {
                isoDep.connect()
                isoDep.timeout = 4000
            }
        }

        fun readAid(isoDep: IsoDep?): String? {
            connect(isoDep)

//            val atr = isoDep?.historicalBytes ?: return null
//            return HexUtils.byteArr2HexStr(atr)

            val result = isoDep?.transceive(
                byteArrayOf(
                    0x00.toByte(),
                    0xA4.toByte(),
                    0x04.toByte(),
                    0x00.toByte(),
                    0x07.toByte(),
                    0xF0.toByte(),
                    0x01.toByte(),
                    0x02.toByte(),
                    0x03.toByte(),
                    0x04.toByte(),
                    0x05.toByte(),
                    0x06.toByte(),
                    0x07.toByte()
                )
            )
            isoDep?.close()
            return HexUtils.byteArr2HexStr(result)
        }

        @JvmStatic
        fun send(isoDep: IsoDep?, request: String?): String? {
            val response: String?
            try {
                connect(isoDep)
                response =
                    HexUtils.byteArr2HexStr(isoDep?.transceive(HexUtils.hexString2Bytes(request)))
            } catch (e: IOException) {
                e.printStackTrace()
                return null
            }
            return response
        }

        fun sendSafe(isoDep: IsoDep?, request: String?): SendResponse {
            try {
                isoDep?.let { connect(it) }

                val response =
                    isoDep?.transceive(HexUtils.hexString2Bytes(request))
                        ?: byteArrayOf(0xFF.toByte(), 0xFF.toByte())
                val resp: ByteArray = if (response.size > 2) {
                    response.copyOfRange(0, response.size - 2)
                } else byteArrayOf()
                val sw1 = response[response.size - 2]
                val sw2 = response[response.size - 1]

                Log.d(
                    LITE_TAG, "sendSafe response -----> ${HexUtils.byteArr2HexStr(response)}"
                )
                return SendResponse(sw1, sw2, HexUtils.byteArr2HexStr(resp))
            } catch (e: IOException) {
                e.printStackTrace()
                return SendResponse(0xFF.toByte(), 0xFF.toByte())
            }
        }

        @JvmStatic
        fun combCommand(command: ByteArray? = null, vararg params: ByteArray?): ByteArray {
            var combParam = byteArrayOf()
            params.forEach { param ->
                param?.let {
                    combParam = combParam.plus(it.size.toByte())
                    combParam = combParam.plus(it)
                }
            }

            var combCommand = byteArrayOf()
            command?.let {
                combCommand = combCommand.plus(it)
                if (params.size != 1) {
                    // params 只有一个的时候就不再次拼接长度了
                    combCommand = combCommand.plus(combParam.size.toByte())
                }
            }
            combCommand = combCommand.plus(combParam)
            return combCommand
        }
    }
}
