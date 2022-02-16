import React, { useState } from "react";
import Mensaje from "./Mensaje";

const Formulario = (props) => {
  const { onBusqueda } = props;
  const [input, setInput] = useState('')
  const [abombau, setAbombau] = useState(false);

  function realizarBusqueda(e) {
    e.preventDefault();

    if (input === '') {
      setAbombau(true);
    } else {
      setAbombau(false)
      onBusqueda(input)
    }
  }

  return (
    <form onSubmit={realizarBusqueda}>
      <label>Terminos de busqueda</label>
      <input
        type="text"
        placeholder="Ejemplo: Cafe, Bebes, Futbol..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
      <button type="submit">Buscar imagenes</button>
      {abombau ?  <Mensaje /> : ''}
    </form>
  );
};

export default Formulario;
