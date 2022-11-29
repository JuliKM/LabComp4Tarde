import { Articulo } from "./modelo/modeloB/Articulo";
import { DetalleFactura } from "./modelo/modeloB/DetalleFactura";
import { Factura } from "./modelo/modeloB/Factura";
import { Cliente } from "./modelo/modeloB/Cliente";

export class TestB{

    public static main(){
        let cliente: Cliente = new Cliente();
        let articulo1: Articulo = new Articulo();
        let articulo2: Articulo = new Articulo();
        let articulo3: Articulo = new Articulo();
        let articulo4: Articulo = new Articulo();
        let articulo5: Articulo = new Articulo();
        let factura1: Factura = new Factura();
        let factura2: Factura = new Factura();
        let factura3: Factura = new Factura();
        let detalleFactura1: DetalleFactura = new DetalleFactura();
        let detalleFactura2: DetalleFactura = new DetalleFactura();
        let detalleFactura3: DetalleFactura = new DetalleFactura();
        let detalleFactura4: DetalleFactura = new DetalleFactura();
        let detalleFactura5: DetalleFactura = new DetalleFactura();
        let detalleFactura6: DetalleFactura = new DetalleFactura();

        cliente.setNumero(1);
        cliente.setRazonSocial("Juan Perez");
        cliente.setCuit(123456789);
        cliente.setFacturas([factura1, factura2, factura3]);

        articulo1.setCodigo(1);
        articulo1.setDenominacion("Lapiz");
        articulo1.setPrecio(1.5);
        articulo1.setUnidadMedida("unidad");

        articulo2.setCodigo(2);
        articulo2.setDenominacion("Sacapuntas");
        articulo2.setPrecio(1.3);
        articulo2.setUnidadMedida("unidad");

        articulo3.setCodigo(3);
        articulo3.setDenominacion("Borrador");
        articulo3.setPrecio(5);
        articulo3.setUnidadMedida("unidad");

        articulo4.setCodigo(4);
        articulo4.setDenominacion("Goma");
        articulo4.setPrecio(1);
        articulo4.setUnidadMedida("unidad");

        articulo5.setCodigo(5);
        articulo5.setDenominacion("Lapicera");
        articulo5.setPrecio(2.5);
        articulo5.setUnidadMedida("unidad");

        detalleFactura1.setArticulo(articulo1);
        detalleFactura1.setCantidad(2);
        
        detalleFactura2.setArticulo(articulo2);
        detalleFactura2.setCantidad(1);

        detalleFactura3.setArticulo(articulo3);
        detalleFactura3.setCantidad(3);

        detalleFactura4.setArticulo(articulo4);
        detalleFactura4.setCantidad(1);

        detalleFactura5.setArticulo(articulo5);
        detalleFactura5.setCantidad(1);

        detalleFactura6.setArticulo(articulo5);
        detalleFactura6.setCantidad(1);

        factura1.setCliente(cliente);
        factura1.setDetallesFactura([detalleFactura1, detalleFactura2]);
        factura1.setNumero(1);
        factura1.setLetra("C");
        factura1.setFecha(new Date(2022, 10, 10));
        factura1.setRecargo(0.21);
        factura1.setTipoPago("E");

        factura2.setCliente(cliente);
        factura2.setDetallesFactura([detalleFactura3, detalleFactura4]);
        factura2.setNumero(2);
        factura2.setLetra("C");
        factura2.setFecha(new Date(2022, 10, 10));
        factura2.setRecargo(0.21);
        factura2.setTipoPago("E");

        factura3.setCliente(cliente);
        factura3.setDetallesFactura([detalleFactura5, detalleFactura6]);
        factura3.setNumero(3);
        factura3.setLetra("C");
        factura3.setFecha(new Date(2022, 10, 10));
        factura3.setRecargo(0.21);
        factura3.setTipoPago("E");

        console.log(
            'Total Facturado: ' + 
            cliente.totalFacturadoXTipoPago("E"));
    }
}