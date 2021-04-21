import React from 'react';

//hay componentes basados en clases y en funciones
//trabajaremos con funcional components antes se llamaban steylas funcional component.

// para que no aparesca el div podemos importa Fragment o usar la abreviatura <></>
const PrimeraApp = ( props ) =>{

    return(
        <>
        <h1>{props.saludo}</h1>
        <p>Mi primera Aplicacion</p>
        </>
    )
}

export default PrimeraApp;