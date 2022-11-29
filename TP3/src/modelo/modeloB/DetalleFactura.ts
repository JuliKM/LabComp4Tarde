import { Factura } from "./Factura";
import { Articulo } from "./Articulo";

export class DetalleFactura{
    private cantidad: number;
    private subTotal: number;
    private factura: Factura;
    private articulo: Articulo;

    public getCantidad() {
        return this.cantidad;
    }

    public setCantidad(cantidad: number) {
        this.cantidad = cantidad;
    }

    public getSubTotal() {
        return this.subTotal;
    }

    public setSubTotal(subTotal: number) {
        this.subTotal = subTotal;
    }

    public getFactura() {
        return this.factura;
    }

    public setFactura(factura: Factura) {
        this.factura = factura;
    }

    public getArticulo() {
        return this.articulo;
    }

    public setArticulo(articulo: Articulo) {
        this.articulo = articulo;
    }

    public calcularSubTotal(){
        this.setSubTotal(this.cantidad * this.articulo.getPrecio());
    }
}