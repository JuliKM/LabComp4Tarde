import { useState } from 'react';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import Plato from './Plato';

type PlatoParams = {
    id:number;
    nombre: string;
    imagen: string;
    precio: number;
    rubro:string;
}

export const ItemPlato = (args : PlatoParams) => {

    return (
        <>
            <Card style={{ width: '18rem' }} className="margenesTarjeta"> 
            <Card.Img variant="top" className="maxAltoImg" src={"http://localhost:3000/images/"+args.imagen.toLowerCase()} />
            <Card.Body>
                <Card.Title>{args.nombre}</Card.Title>
                <Card.Text>
                ${args.precio}
                </Card.Text>
                <Button href={`detalle/${args.id}`} variant="primary">Detalle</Button>
            </Card.Body>
            </Card>
        </>
    )
}