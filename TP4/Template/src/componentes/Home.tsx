import { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Row } from 'react-bootstrap';
import { DetallePlato } from './DetallePlato';
import { getPlatosJSON, getPlatoXId } from './FuncionesApi';
import { ItemPlato } from './ItemPlato';
import { Navigation } from './Navigation';
import Plato from './Plato';


export const Home = () => {
    
  const [platos, setPlatos] = useState<Plato[]>([]);
    
    const getPlatosResto = () => {
      let datos:Plato[] = getPlatosJSON();
      setPlatos(datos);
    }

    useEffect(() => {
      getPlatosResto();
    }, []);

    
    return (
        <>
        <Navigation></Navigation>
          <Container fluid="md">
              <Row>  
               {platos.map((plato:Plato) => 
                <ItemPlato key={plato.id} id={plato.id} nombre={plato.nombre} precio={plato.precio} rubro={plato.rubro} imagen={plato.imagenPath}></ItemPlato>
               )}
              </Row>
          </Container>
        </>
    )
}

