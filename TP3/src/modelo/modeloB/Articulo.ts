import { DetalleFactura } from "./DetalleFactura";

export class Articulo{
    private codigo: number;
    private denominacion: string;
    private precio: number;
    private unidadMedida: string;
    private detallesFactura: Array<DetalleFactura> = new Array<DetalleFactura>();

    public getCodigo() {
        return this.codigo;
    }

    public setCodigo(codigo: number) {
        this.codigo = codigo;
    }

    public getDenominacion() {
        return this.denominacion;
    }

    public setDenominacion(denominacion: string) {
        this.denominacion = denominacion;
    }

    public getPrecio() {
        return this.precio;
    }

    public setPrecio(precio: number) {
        this.precio = precio;
    }

    public getUnidadMedida() {
        return this.unidadMedida;
    }

    public setUnidadMedida(unidadMedida: string) {
        this.unidadMedida = unidadMedida;
    }

    public getDetallesFactura() {
        return this.detallesFactura;
    }

    public setDetallesFactura(detallesFactura: Array<DetalleFactura>) {
        this.detallesFactura = detallesFactura;
    }
}