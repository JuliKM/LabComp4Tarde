import {Cliente} from './Cliente';
import { DetalleFactura } from './DetalleFactura';

export class Factura {
    private letra: string;
    private numero: number;
    private recargo: number;
    private tipoPago: string;
    private totalItems: number;
    private totalFinal: number;
    private fecha: Date;
    private cliente: Cliente;
    private detallesFactura: Array<DetalleFactura> = new Array<DetalleFactura>();

    public getLetra() {
        return this.letra;
    }

    public setLetra(letra: string) {
        this.letra = letra;
    }

    public getNumero() {
        return this.numero;
    }

    public setNumero(numero: number) {
        this.numero = numero;
    }

    public getRecargo() {
        return this.recargo;
    }

    public setRecargo(recargo: number) {
        this.recargo = recargo;
    }

    public getTipoPago() {
        return this.tipoPago;
    }

    public setTipoPago(tipoPago: string) {
        if(tipoPago.toUpperCase() == "E" || 
           tipoPago.toUpperCase() == "TD" ||
           tipoPago.toUpperCase() == "TC" ||
           tipoPago.toUpperCase() == "CC" ||
           tipoPago.toUpperCase() == "TR"){
            this.tipoPago = tipoPago;
        }else{
            console.log("Tipo de pago invalido");
        } 
    }

    public getTotalItems(): number {
        return this.totalItems;
    }

    public setTotalItems(totalItems: number) {
        this.totalItems = totalItems;
    }

    public getTotalFinal() {
        return this.totalFinal;
    }

    public setTotalFinal(totalFinal: number) {
        this.totalFinal = totalFinal;
    }

    public getFecha() {
        return this.fecha;
    }

    public setFecha(fecha: Date) {
        this.fecha = fecha;
    }

    public getCliente() {
        return this.cliente;
    }

    public setCliente(cliente: Cliente) {
        this.cliente = cliente;
    }

    public getDetallesFactura() {
        return this.detallesFactura;
    }

    public setDetallesFactura(detallesFactura: Array<DetalleFactura>) {
        this.detallesFactura = detallesFactura;
    }

    public calcularTotalItems() {
        let total: number = 0;
        for(let i = 0; i < this.detallesFactura.length; i++){
            total += this.detallesFactura[i].getSubTotal();
        }
        this.setTotalItems(total);
    }

    public calcularTotalFinal() {
        this.calcularTotalItems();
        let total: number = this.getTotalItems();
        total += this.getRecargo();
        this.setTotalFinal(total);
    }
}