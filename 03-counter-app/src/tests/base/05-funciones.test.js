import { getUser, getUsuarioActivo } from '../../base/05-funciones';

import '@testing-library/jest-dom';

describe('Pruebas en el archivo 05-funciones', () => {

    test('getuser Debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
            //Para comparar dos objetos se utiliza el toequal
        expect( user ).toEqual( userTest );

    })

    test('getUserActivo debe de retornar un objeto', () =>{
        
        const nombre = 'Rolando';

        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

       expect( user ).toEqual( userActivoTest );
//Tambien se puede colocar el objeto dentro del equal para que lo compare.
        // expect( user ).toEqual( {
        //     uid: 'ABC567',
        //     username: nombre
        // } )
    })
})