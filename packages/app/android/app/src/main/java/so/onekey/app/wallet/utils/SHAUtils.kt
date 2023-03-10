package so.onekey.app.wallet.utils

import java.security.MessageDigest
import java.security.NoSuchAlgorithmException


object ShaUtils {
    fun sha256(inputBytes: ByteArray): String? {
        try {
            // Get SHA-256 MessageDigest instance
            val digest: MessageDigest = MessageDigest.getInstance("SHA-256")

            // Generate SHA-256 hash
            val hashBytes: ByteArray = digest.digest(inputBytes)

            // Convert hash byte array to hexadecimal string
            val hash: String =
                HexUtils.byteArr2HexStr(hashBytes)

            // Print hash to console
            return hash
        } catch (e: NoSuchAlgorithmException) {
            e.printStackTrace()
        }
        return null
    }
}