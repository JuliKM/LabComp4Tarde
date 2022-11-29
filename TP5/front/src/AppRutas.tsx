import React, { Component, Suspense } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './componentes/Home';
import { DetalleInstrumento } from './componentes/DetalleInstrumento';
import { HomePosta } from './componentes/HomePosta';
import { DondeEstamos } from './componentes/DondeEstamos';


class AppRutas extends Component{
  
  render(){
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detalle">
              <Route path=":idinstrumento" element={<DetalleInstrumento />} />
            </Route>
            <Route path="/homePosta" element={<HomePosta/>}/>
            <Route path="/dondeEstamos" element={<DondeEstamos/>}/>
            <Route path="/test" element={<h1>TEST</h1>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>
      </Router>
    );
  }
}

export default AppRutas;
