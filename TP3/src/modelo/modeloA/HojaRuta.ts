import { Vehiculo } from './Vehiculo';
import { Detalle } from './Detalle';

export class HojaRuta {
    private fecha: Date = new Date();
    private numero: number;
    private vehiculo: Vehiculo;
    private detalles: Array<Detalle> = new Array<Detalle>();

    public getFecha() {
        return this.fecha;
    }

    public setFecha(fecha: Date) {
        this.fecha = fecha;
    }

    public getNumero() {
        return this.numero;
    }

    public setNumero(numero: number) {
        this.numero = numero;
    }

    public getVehiculo() {
        return this.vehiculo;
    }

    public setVehiculo(vehiculo: Vehiculo) {
        this.vehiculo = vehiculo;
    }

    public getDetalles() {
        return this.detalles;
    }

    public setDetalles(detalles: Array<Detalle>) {
        this.detalles = detalles;
    }

    public calcularTotalKilometros() {
        let totalKilometros: number = 0;
        for (let detalle of this.detalles) {
            totalKilometros += detalle.getKmSalida() - detalle.getKmRegreso();
        }
        return totalKilometros;
    }
}