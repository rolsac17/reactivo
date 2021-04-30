
import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Prueba en 02-template-string', () => {
    test('Get saludo debe retornar hola fernando', () => {

        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );
// La función toBe sirve para comparar resultados de algo que nosotros esperamos.
        expect( saludo ).toBe( 'Hola'+ ' ' + nombre );

    });
    test('Get saludo cuando no tenga argumento debe decir hola carlos', () =>{

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola' + ' ' + 'Carlos' );
    })

})