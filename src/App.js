import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Formulario from './components/Formulario';
import Titulo from './components/Titulo';

function App() {

  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])

  console.log(imagenes);
  
  return (
    <div className="App">
      <div className='container'>
      <Titulo />
      <Formulario 
        setBusqueda={setBusqueda}
        busqueda={busqueda}
        imagenes={imagenes}
        setImagenes={setImagenes}
        />
      </div>
      <div className='grilla'>
      {imagenes.map((img) => {
        return(<Card source={img} />)  })}
      </div>
      
      
    </div>
  );
}

export default App;
