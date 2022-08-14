import { useState } from 'react';

interface User {
    legajo: string,
    name: string,
}

type UsuarioParams = {
    edad: number;
    clave?:string;
    usuario:string;
}

export const Usuario = (args : UsuarioParams) => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            legajo: 'ABC123',
            name: 'Gerardo Magni'
        });
    }

    return (
        <div className="mt-2">
            <h3>Usuario:{args.usuario} </h3>
            <h4>Edad: {args.edad}</h4>
            <h4>Clave: {args.clave}</h4>
            <button
                onClick={ login }
                className="btn btn-outline-primary">
                Login
            </button>

            {
                (!user) 
                    ? <pre> No hay usuario </pre>
                    : <pre> { JSON.stringify( user ) } </pre>
            }

            
        </div>
    )
}