<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 661a474589108b655d511791c0f478c4ed4aa12b
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
