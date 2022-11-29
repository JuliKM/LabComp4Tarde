"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleFactura = void 0;
class DetalleFactura {
    getCantidad() {
        return this.cantidad;
    }
    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
    getSubTotal() {
        return this.subTotal;
    }
    setSubTotal(subTotal) {
        this.subTotal = subTotal;
    }
    getFactura() {
        return this.factura;
    }
    setFactura(factura) {
        this.factura = factura;
    }
    getArticulo() {
        return this.articulo;
    }
    setArticulo(articulo) {
        this.articulo = articulo;
    }
    calcularSubTotal() {
        this.setSubTotal(this.cantidad * this.articulo.getPrecio());
    }
}
exports.DetalleFactura = DetalleFactura;
