//fncion para cifrar el mensaje
let encuentraAscii = (num) => {
    let encuentra = false
    for (let i = 97; i <= 122; i++) {
        if (num == i) {
            encuentra = true
        }
    }
    for (let i = 65; i <= 90; i++) {
        if (num == i) {
            encuentra = true
        }
    }
    return encuentra
}
let nextAscii = (value, numero) => {
    let slide = (numero) % 26
    if (slide == 0) {
        slide = 1
    }
    let next = value + slide
    if (next > 122 && (value >= 97 && value <= 122)) {
        next = 96 + Math.abs((122 - value) - slide)
    }
    if (next > 90 && (value >= 65 && value <= 90)) {
        next = 64 + Math.abs((90 - value) - slide)
    }
    return String.fromCharCode(next)
}
let backAscii = (value, numero) => {
    let slide = (numero) % 26
    if (slide == 0) {
        slide = 1
    }
    let back = value - slide
    if (back < 97 && (value >= 97 && value <= 122)) {
        back = 123 - Math.abs((value - 97) - slide)
    }
    if (back < 65 && (value >= 65 && value <= 90)) {
        back = 91 - Math.abs((value - 65) - slide)
    }
    return String.fromCharCode(back)
}
let cipher
window.cipher = {
    encode: (offset, string) => {
        let msgcipher = ''
        let number = parseInt(offset)
        for (let i = 0; i < string.length; i++) {
            if (encuentraAscii(string.charCodeAt(i))) {
                msgcipher += nextAscii(string.charCodeAt(i), number)
            } else {
                msgcipher += String.fromCharCode(string.charCodeAt(i))
            }
        }
        return msgcipher
    },
    //funcion para descifrar
    decode: (offset, string) => {
        let msgdescipher = ''
        let number = parseInt(offset)
        for (let i = 0; i < string.length; i++) {
            if (encuentraAscii(string.charCodeAt(i))) {
                msgdescipher += backAscii(string.charCodeAt(i), number)
            } else {
                msgdescipher += String.fromCharCode(string.charCodeAt(i))
            }
        }
        return msgdescipher

    },
    createCipherWithOffset: () => {
        return cipher
    }
}