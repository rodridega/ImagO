import React, { useEffect, useState } from "react";
import Mensaje from "./Mensaje";

const Formulario = (props) => {
  const { busqueda, setBusqueda, imagenes, setImagenes } = props;
  const [inputValue, setInputValue] = useState("");
  const [abombau, setAbombau] = useState(false);
  const key = '25709521-213d0f1f265e754ded338b658';
  const url = `https://pixabay.com/api/?key=${key}&q=${inputValue}`


  function realizarBusqueda(e) {
    e.preventDefault();
    setBusqueda(inputValue);

    if (inputValue === "") {
      setAbombau(true);
    } else {
      setAbombau(false)
    }

  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) =>{
        setImagenes(json.hits.map(imagen =>{
          return (imagen.largeImageURL)
        })) 
      })
  }, [busqueda])

  


  return (
    <form onSubmit={realizarBusqueda}>
      <label>Terminos de busqueda</label>
      <input
        type="text"
        placeholder="Ejemplo: Cafe, Bebes, Futbol..."
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button type="submit">Buscar imagenes</button>
      {abombau ?  <Mensaje /> : ''}
    </form>
  );
};

export default Formulario;
