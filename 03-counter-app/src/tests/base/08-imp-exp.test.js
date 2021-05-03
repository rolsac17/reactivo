
import '@testing-library/jest-dom';

import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

describe('08-imp-exp pruebas en funciones de heroes', () => {
    test('Prueba de getHeroebyId debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);

        // console.log(heroe);
    })

    test('Prueba de getHeroebyId debe retornar undefine si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById( id );

        //como el undefined es primitivo se puede usar un tobe
        expect(heroe).toBe(undefined);

        // console.log(heroe);
    })

    test('Prueba de getHeroeByOwner de DC', () => {
        const owner = 'DC';
        const heroeOwner = getHeroesByOwner(owner);
        const dataHeroe = heroes.filter(heroes => heroes.owner === owner)

        expect(heroeOwner).toEqual(dataHeroe);

        console.log(heroeOwner);
    })
})