import { getHeroeByIdAsync } from '../../base/09-promesas';

import '@testing-library/jest-dom';

describe('Pruebas de async en 09-promesas', () => {
    test('Debe retornar un heroe async', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect( true ).toBe( false );
        
        })
    })
})