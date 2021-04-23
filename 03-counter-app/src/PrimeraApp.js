import React from 'react';
import PropTypes from 'prop-types';

//hay componentes basados en clases y en funciones
//trabajaremos con funcional components antes se llamaban steylas funcional component.

// para que no aparesca el div podemos importa Fragment o usar la abreviatura <></>
const PrimeraApp = ( {saludo, subtitulo} ) =>{
// se desestructura y asi no se agrega la palabra props

// if(!saludo){ asi se validaria de una mala forma que si venga la prop
//     throw new Error('El saludo es necesario');
// }
    return(
        <>
        <h1>{saludo}</h1>
        <p>{subtitulo}</p>
        </>
    )
}

//para que la prop sea obligatoria se agrega el isRequired despues del tipo de la prop
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//Para colocar por default props aparte de definirlos en los parentesis del componente
PrimeraApp.defaultProps ={
    subtitulo: 'Esta es una descripcion de inquebrantable'
}

export default PrimeraApp;