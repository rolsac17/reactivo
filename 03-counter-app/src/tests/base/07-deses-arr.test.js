import { retornaArreglo } from '../../base/07-deses-arr';

import '@testing-library/jest-dom';

describe('07-deses-arr pruebas desestructuracion', () => {
    test('debe de retornar un string y un numero', () =>{
        const [letras, numeros] = retornaArreglo();
        
        
        // se puede evaluar desestructurando el arreglo
        expect(letras).toBe('ABC');

        expect(numeros).toBe(123);
        // se puede evaluar el tipo de la variable
        expect(typeof letras).toBe('string');

        expect(typeof numeros).toBe('number');
    })
})