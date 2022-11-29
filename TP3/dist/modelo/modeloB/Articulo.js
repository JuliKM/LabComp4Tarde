"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
class Articulo {
    constructor() {
        this.detallesFactura = new Array();
    }
    getCodigo() {
        return this.codigo;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    getDenominacion() {
        return this.denominacion;
    }
    setDenominacion(denominacion) {
        this.denominacion = denominacion;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    getUnidadMedida() {
        return this.unidadMedida;
    }
    setUnidadMedida(unidadMedida) {
        this.unidadMedida = unidadMedida;
    }
    getDetallesFactura() {
        return this.detallesFactura;
    }
    setDetallesFactura(detallesFactura) {
        this.detallesFactura = detallesFactura;
    }
}
exports.Articulo = Articulo;
