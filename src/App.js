import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Formulario from './components/Formulario';
import Titulo from './components/Titulo';

function App() {
  const [imagenes, setImagenes] = useState([])
  const key = '25709521-213d0f1f265e754ded338b658';  

  const obtenerImagenes = (termino) => {
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=100`

    fetch(url)
      .then((response) => response.json())
      .then((json) =>{
        setImagenes(json.hits)
      }) 
  }

  return (
    <div className="App">
      <div className='container'>
      <Titulo />
      <Formulario 
        onBusqueda={(termino) => obtenerImagenes(termino) }
                />
      </div>
      <div className='grilla'>
      {imagenes.map((img) => {
        return(<Card key={img.id} source={img.previewURL} likes={img.likes} views={img.views} href={img.largeImageURL} />)})}
      </div>
      
      
    </div>
  );
}

export default App;
