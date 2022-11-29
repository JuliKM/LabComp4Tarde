import { Factura } from "./Factura";

export class Cliente{
    private numero: number;
    private razonSocial: string;
    private cuit: number;
    private facturas: Array<Factura> = new Array<Factura>();

    public getNumero() {
        return this.numero;
    }

    public setNumero(numero: number) {
        this.numero = numero;
    }

    public getRazonSocial() {
        return this.razonSocial;
    }

    public setRazonSocial(razonSocial: string) {
        this.razonSocial = razonSocial;
    }

    public getCuit() {
        return this.cuit;
    }

    public setCuit(cuit: number) {
        this.cuit = cuit;
    }

    public getFacturas() {
        return this.facturas;
    }

    public setFacturas(facturas: Array<Factura>) {
        this.facturas = facturas;
    }

    public totalFacturadoXTipoPago(tipoPago:string){
        let total:number = 0;
        for(let factura of this.facturas){
            if(factura.getTipoPago() == tipoPago){
                total += factura.getTotalFinal();
            }else if(factura.getTipoPago() == null || 
                     factura.getTipoPago() == "" ||
                     tipoPago == null || 
                     tipoPago == ""){
                total += factura.getTotalItems();
            }
        }
        return total;
    }
}