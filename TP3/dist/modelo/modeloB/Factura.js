"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
class Factura {
    constructor() {
        this.detallesFactura = new Array();
    }
    getLetra() {
        return this.letra;
    }
    setLetra(letra) {
        this.letra = letra;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getRecargo() {
        return this.recargo;
    }
    setRecargo(recargo) {
        this.recargo = recargo;
    }
    getTipoPago() {
        return this.tipoPago;
    }
    setTipoPago(tipoPago) {
        if (tipoPago.toUpperCase() == "E" ||
            tipoPago.toUpperCase() == "TD" ||
            tipoPago.toUpperCase() == "TC" ||
            tipoPago.toUpperCase() == "CC" ||
            tipoPago.toUpperCase() == "TR") {
            this.tipoPago = tipoPago;
        }
        else {
            console.log("Tipo de pago invalido");
        }
    }
    getTotalItems() {
        return this.totalItems;
    }
    setTotalItems(totalItems) {
        this.totalItems = totalItems;
    }
    getTotalFinal() {
        return this.totalFinal;
    }
    setTotalFinal(totalFinal) {
        this.totalFinal = totalFinal;
    }
    getFecha() {
        return this.fecha;
    }
    setFecha(fecha) {
        this.fecha = fecha;
    }
    getCliente() {
        return this.cliente;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    getDetallesFactura() {
        return this.detallesFactura;
    }
    setDetallesFactura(detallesFactura) {
        this.detallesFactura = detallesFactura;
    }
    calcularTotalItems() {
        let total = 0;
        for (let i = 0; i < this.detallesFactura.length; i++) {
            total += this.detallesFactura[i].getSubTotal();
        }
        this.setTotalItems(total);
    }
    calcularTotalFinal() {
        this.calcularTotalItems();
        let total = this.getTotalItems();
        total += this.getRecargo();
        this.setTotalFinal(total);
    }
}
exports.Factura = Factura;
