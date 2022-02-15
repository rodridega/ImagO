import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Titulo from './components/Titulo';

function App() {

  const [busqueda, completar] = useState('')
  
  
  //Validar Formulario
  console.log(busqueda);
  
  return (
    <div className="App">
      <div className='container'>
      <Titulo />
      <Formulario 
        completar={completar}
        busqueda={busqueda} />
      </div>
    </div>
  );
}

export default App;
