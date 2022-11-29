"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor() {
        this.facturas = new Array();
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getRazonSocial() {
        return this.razonSocial;
    }
    setRazonSocial(razonSocial) {
        this.razonSocial = razonSocial;
    }
    getCuit() {
        return this.cuit;
    }
    setCuit(cuit) {
        this.cuit = cuit;
    }
    getFacturas() {
        return this.facturas;
    }
    setFacturas(facturas) {
        this.facturas = facturas;
    }
    totalFacturadoXTipoPago(tipoPago) {
        let total = 0;
        for (let factura of this.facturas) {
            if (factura.getTipoPago() == tipoPago) {
                total += factura.getTotalFinal();
            }
            else if (factura.getTipoPago() == null ||
                factura.getTipoPago() == "" ||
                tipoPago == null ||
                tipoPago == "") {
                total += factura.getTotalItems();
            }
        }
        return total;
    }
}
exports.Cliente = Cliente;
