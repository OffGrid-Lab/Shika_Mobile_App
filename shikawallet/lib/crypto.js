const cryptojs = require("crypto-js");



export function CreateHmacSHA256(data, key) {
    return cryptojs.HmacSHA256(data, key).toString(cryptojs.enc.Hex);
}