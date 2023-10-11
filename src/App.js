import './App.css';
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'; //esta librería es para que nos permita evaluar operaciones y obtener el resultado, pero primero se instala en la terminal y luego lo importamos con npm install mathjs

function App() {

  const[input,setInput] = useState('');

  const agregarInput = valorDeInput =>{
    setInput(input + valorDeInput);

  };

  const calcularResultado = ()=>{
    if(input){
      setInput(evaluate(input));

    }else{
      alert("Ingrese valores para realizar los cálculos");
    }
  };


  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <h1>Calculadora</h1>
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla
        input={input} />

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear
          manejarClear={()=> setInput('')} />
        </div>

      </div>

    </div>
  );
}

export default App;
