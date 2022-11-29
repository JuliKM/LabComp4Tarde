import {HojaRuta} from './HojaRuta';

export class Detalle {
    private kmSalida: number;
    private kmRegreso: number;
    private horaSalida: number;
    private horaRegreso: number;
    private minutoSalida: number;
    private minutoRegreso: number;
    private hojaRuta: HojaRuta;

    public getKmSalida() {
        return this.kmSalida;
    }

    public setKmSalida(kmSalida: number) {
        this.kmSalida = kmSalida;
    }

    public getKmRegreso() {
        return this.kmRegreso;
    }

    public setKmRegreso(kmRegreso: number) {
        this.kmRegreso = kmRegreso;
    }

    public getHoraSalida() {
        return this.horaSalida;
    }

    public setHoraSalida(horaSalida: number) {
        this.horaSalida = horaSalida;
    }

    public getHoraRegreso() {
        return this.horaRegreso;
    }

    public setHoraRegreso(horaRegreso: number) {
        this.horaRegreso = horaRegreso;
    }

    public getMinutoSalida() {
        return this.minutoSalida;
    }

    public setMinutoSalida(minutoSalida: number) {
        this.minutoSalida = minutoSalida;
    }

    public getMinutoRegreso() {
        return this.minutoRegreso;
    }

    public setMinutoRegreso(minutoRegreso: number) {
        this.minutoRegreso = minutoRegreso;
    }

    public getHojaRuta() {
        return this.hojaRuta;
    }

    public setHojaRuta(hojaRuta: HojaRuta) {
        this.hojaRuta = hojaRuta;
    }
}