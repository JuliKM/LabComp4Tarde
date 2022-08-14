import { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getPlatoXId } from './FuncionesApi';
import Ingrediente from './Ingrediente';
import { Navigation } from './Navigation';
import Plato from './Plato';


export const DetallePlato = () => {

    const {idplato} = useParams();
    const [plato, setPlato] = useState<Plato>();
    
    let platoId:number = 0;
    
    const getPlatoResto = () => {
      let platoSelect:Plato = getPlatoXId(platoId);
      setPlato(platoSelect);
    }

    useEffect(() => {
        if(idplato){
            platoId = parseInt(idplato);
        }
        getPlatoResto();
    }, []);

    
    return (
        <>
        <Navigation></Navigation>
        <Container>
                <Row> 
                    <Col><br/><img alt="plato" className="minAltoImg" src={"http://localhost:3000/images/"+plato?.imagenPath}  /></Col>
                    <Col>
                        <Row>
                            <Col><h1>{plato?.nombre}</h1></Col>
                        </Row>
                        <Row>
                        <Col>Precio: <h2>${plato?.precio}</h2></Col>
                        </Row>
                        <Row>
                            <Col>Rubro: <h2>{plato?.rubro}</h2></Col>
                        </Row>
                        <Row>
                            <Col>Ingredientes:</Col>
                            <ListGroup>
                            {plato?.ingredientes?.map((ing:Ingrediente) => 
                                <ListGroup.Item key={ing.idIngrediente}>{ing.nombre} {ing.cantidad} {ing.unidadMedida}</ListGroup.Item>
                            )}
                            </ListGroup>
                           
                        </Row>
                    </Col>
                </Row>
                
                <Row>
                    <Col><Nav.Link href="/"><h3>Volver</h3></Nav.Link></Col>
                </Row>                
                </Container>
        </>
    )
}