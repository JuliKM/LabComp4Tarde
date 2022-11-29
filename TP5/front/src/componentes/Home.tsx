import { useEffect, useState } from 'react';

import { getInstrumentosJSONFetch } from './FuncionesApi';
import { ItemInstrumento } from './ItemInstrumento';
import { Navigation } from './Navigation';
import Instrumento from './Instrumento';
import { Alert, Button, Card, Container, Row } from 'react-bootstrap';


export const Home = () => {
    
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    
    const getInstrumentos = async () => {
      let datos:Instrumento[] = await getInstrumentosJSONFetch();
      setInstrumentos(datos);
    }

    useEffect(() => {
      getInstrumentos();
    }, []);

    
    return (
        <>
        <Navigation></Navigation>
          <Container fluid="md">
              <Row>  
               {instrumentos.map((instrumento:Instrumento) => 
                <ItemInstrumento 
                  key={instrumento.id} 
                  id={instrumento.id} 
                  instrumento={instrumento.nombre}
                  marca={instrumento.marca}
                  modelo={instrumento.modelo}
                  imagen={instrumento.imagen}
                  precio={instrumento.precio} 
                  costoEnvio={instrumento.costoEnvio}
                  cantidadVendida={instrumento.cantidadVendida}
                  descripcion={instrumento.descripcion}
                  ></ItemInstrumento>
               )}
              </Row>
          </Container>
        </>
    )
}

