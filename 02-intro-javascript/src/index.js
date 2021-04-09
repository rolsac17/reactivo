


//Import, Export y funciones comunes de arreglos.

import {heroes} from './data/heroes';

console.log(heroes);

const getHeroes = (id) => {
    return heroes.find((dato) => dato.id === id);
    
};

console.log(getHeroes(3));

const getHeroesByOwner = (owner) => {
    return heroes.find((dato) => dato.owner === owner);
    
};

console.log(getHeroesByOwner('DC'));