import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ valor= 10 }) =>{

     // const [ nombre, setNombre ] = useState('Goku');  
    // console.log(nombre, setNombre);  
    const [ counter, setCounter ] = useState( valor );

    //handleAdd
    const handleAss = () =>{
       // setCounter(counter +1); primera manera de manejar
       setCounter((c)=> c + 1);
    }

    //handleSubstract
    const handleSubstract = () => {
        setCounter(c => c - 1);
    }

    //handleReset
    const handleReset = () => {
        setCounter( valor);
    }

    return(
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={handleAss}>+ 1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>- 1</button>
        </>
    )
}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;