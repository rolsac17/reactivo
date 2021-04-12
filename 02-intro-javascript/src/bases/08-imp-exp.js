


//Import, Export y funciones comunes de arreglos.

import heroes,{owners} from '../data/heroes';

// Se pueden hacer multiples exportaciones solo que se bede desestructurar.


console.log(heroes);

export const getHeroes = (id) => {
    //find solo regresa el primero que cumpla con la condicion
    return heroes.find((dato) => dato.id === id);
    
};

console.log(getHeroes(3));

export const getHeroesByOwner = (owner) => {
    //crea un nuevo arreglo con los que cumplan la condicion
    return heroes.filter((dato) => dato.owner === owner);
    
};

console.log(getHeroesByOwner('DC'));