"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor() {
        this.hojasRuta = new Array();
    }
    getPatente() {
        return this.patente;
    }
    setPatente(patente) {
        this.patente = patente;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getHojasRuta() {
        return this.hojasRuta;
    }
    setHojasRuta(hojasRuta) {
        this.hojasRuta = hojasRuta;
    }
    calcularTotalKilometrosRecorridos(fechaDesde, fechaHasta) {
        let totalKilometros = 0;
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
exports.Vehiculo = Vehiculo;
