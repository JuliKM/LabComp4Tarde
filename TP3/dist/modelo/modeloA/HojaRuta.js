"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HojaRuta = void 0;
class HojaRuta {
    constructor() {
        this.fecha = new Date();
        this.detalles = new Array();
    }
    getFecha() {
        return this.fecha;
    }
    setFecha(fecha) {
        this.fecha = fecha;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getVehiculo() {
        return this.vehiculo;
    }
    setVehiculo(vehiculo) {
        this.vehiculo = vehiculo;
    }
    getDetalles() {
        return this.detalles;
    }
    setDetalles(detalles) {
        this.detalles = detalles;
    }
    calcularTotalKilometros() {
        let totalKilometros = 0;
        for (let detalle of this.detalles) {
            totalKilometros += detalle.getKmSalida() - detalle.getKmRegreso();
        }
        return totalKilometros;
    }
}
exports.HojaRuta = HojaRuta;
