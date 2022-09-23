"use strict";
exports.__esModule = true;
exports.test = exports.volPrisma = exports.volEsfera = exports.volCilindro = exports.volCubo = void 0;
function volCubo(a) {
    return a * a * a;
}
exports.volCubo = volCubo;
function volPrisma(a, b, c) {
    return a * b * c;
}
exports.volPrisma = volPrisma;
function volCilindro(r, h) {
    return 3.1415926 * (r * r) * h;
}
exports.volCilindro = volCilindro;
function volEsfera(r) {
    return 3.1415926 * (r * r * r) * 3 / 4;
}
exports.volEsfera = volEsfera;
function test() {
    console.log("Funciona");
}
exports.test = test;
