import { HojaRuta } from './HojaRuta';

export class Vehiculo {
    private patente: string;
    private marca: string;
    private modelo: string;
    private hojasRuta: Array<HojaRuta> = new Array<HojaRuta>();

    public getPatente() {
        return this.patente;
    }

    public setPatente(patente: string) {
        this.patente = patente;
    }

    public getMarca() {
        return this.marca;
    }

    public setMarca(marca: string) {
        this.marca = marca;
    }

    public getModelo() {
        return this.modelo;
    }

    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public getHojasRuta() {
        return this.hojasRuta;
    }

    public setHojasRuta(hojasRuta: Array<HojaRuta>) {
        this.hojasRuta = hojasRuta;
    }

    public calcularTotalKilometrosRecorridos (fechaDesde: Date, fechaHasta: Date) {
        let totalKilometros: number = 0;
        for (let hojaRuta of this.hojasRuta) {
            if (hojaRuta.getFecha().getTime() >= fechaDesde.getTime() && hojaRuta.getFecha().getTime() <= fechaHasta.getTime()) {
                for (let detalle of hojaRuta.getDetalles()) {
                    totalKilometros += detalle.getKmSalida() - detalle.getKmRegreso();
                }
            }
        }
        return totalKilometros;
    }
}