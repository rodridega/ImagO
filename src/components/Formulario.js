import React from "react";

const Formulario = (props) => {
  const { busqueda, completar } = props;
  const inputBusqueda = document.getElementById("inputBusqueda");

  return (
    <form>
      <label>Terminos de busqueda</label>
      <input
        type="text"
        placeholder="Ejemplo: Cafe, Bebes, Basquet..."
        id="inputBusqueda"
      ></input>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();

          completar(inputBusqueda.value);
        }}
      >
        Buscar imagenes
      </button>
    </form>
  );
};

export default Formulario;
