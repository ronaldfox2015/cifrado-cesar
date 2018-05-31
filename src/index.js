var encode = function (clave, texto) {
    var output = "";
    clave = parseInt(clave);
    for (var i = 0; i < texto.length; i++) {
        if (encuentraAscii(texto.charCodeAt(i))) {
            output += nextAscii(texto.charCodeAt(i), clave);
        }
        else {
            output += String.fromCharCode(num + clave);
        }
    }
    return output;
};
var decode = function (clave, texto) {
    var output = "";
    clave = parseInt(clave);
    for (var i = 0; i < texto.length; i++) {
        if (encuentraAscii(texto.charCodeAt(i))) {
            output += backAscii(texto.charCodeAt(i), clave);
        }
        else {
            output += String.fromCharCode(num - clave);
        }
    }
    return output;
};
var encuentraAscii = function (num) {
    var encuentra = false;
    for (var i = 97; i <= 122; i++) {
        if (num == i) {
            encuentra = true;
        }
    }
    for (var i = 65; i <= 90; i++) {
        if (num == i) {
            encuentra = true;
        }
    }
    return encuentra;
};
var nextAscii = function (value, numero) {
    var next = value + numero;
    for (var i = 97; i <= 122; i++) {
        if (i == value && next >= 122) {
            next = 96 + (next - 122);
        }
    }
    for (var i = 65; i <= 90; i++) {
        if (i == value && next >= 90) {
            next = 65 + (next - 90);
        }
    }
    return String.fromCharCode(next);
};
var backAscii = function (value, numero) {
    var back = value - numero;
    ;
    for (var i = 97; i <= 122; i++) {
        if (i == value && back <= 97) {
            back = 123 - (97 - back);
        }
    }
    for (var i = 65; i <= 90; i++) {
        if (i == value && back <= 65) {
            back = 91 - (65 - back);
        }
    }
    return String.fromCharCode(back);
};
var claveDespl = document.getElementById("key");
var msgAcifrar = document.getElementById("plainmsg");
var msgAdescif = document.getElementById("cipmsg");
//definir variables para el boton
var botonCifrar = document.getElementById("btnCipher");
var botonDescif = document.getElementById("btnDeCipher");
var btnCifrar = function () {
    msgAdescif.innerHTML = encode(claveDespl.value, msgAcifrar.value);
};
botonCifrar.addEventListener("click", btnCifrar);
/**/
var btndeCifrar = function () {
    msgAcifrar.innerHTML = decode(claveDespl.value, msgAdescif.value);
};
botonDescif.addEventListener("click", btndeCifrar);
