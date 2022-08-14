import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Contador } from './componentes/Contador';
import { Usuario } from './componentes/Usuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React version: <strong>{React.version}</strong>
        </p>
        <p>
          <Contador propiedad="HOLA"></Contador>
        </p>
        <p>
          <Usuario edad={30} clave={"123123"} usuario={"admin"}></Usuario>
          <Usuario edad={35}  usuario={"pepe"}></Usuario>
        </p>
        FIN
      </header>
    </div>
  );
}

export default App;
