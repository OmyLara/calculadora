import React from 'react';
import Estilo from '../Hojas-de-estilos/BotonClear.css'

const BotonClear = (props)=>(
    <div
    className='boton-clear'
    onClick={props.manejarClear}>
      Clear

    </div>
);

export default BotonClear;