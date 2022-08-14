import { useState } from 'react';


export const Contador = (args : any) => {

    const [contador, setContador] = useState(0);

    const incrementar = ( numero: number = 1 ):void => {
        setContador( contador + numero);
    }
    console.log(args);

    return (
        <>
            <h3>Contador:</h3>
            <h3>Propiedad: </h3>
            <span>Valor: { contador } </span>
            <br/>
            <button
                onClick={ () => incrementar() } 
                className="btn btn-outline-primary mt-2">
                +1
            </button>

            <button
                onClick={ () => incrementar(2) } 
                className="btn btn-outline-primary mt-2">
                +2
            </button>

            <button
                onClick={ () => setContador(0) } 
                className="btn btn-outline-danger mt-2">
                Reset
            </button>
        </>
    )
}