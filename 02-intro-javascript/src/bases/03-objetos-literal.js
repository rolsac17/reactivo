
//Objetos Literales o tambien diccionarios
// Trabaja con pares de valores nombre: 'Tony'
// al mandar un objeto puedes utilizar el console.table para verlo de mejor manera

const personaTable = {
    nombre: 'Rolando',
    apellido: 'de Paz',
    edad: 25,
    direccion: {
        ciudad: 'Guatemala',
        zip: 333333,
        lat: 13.986,
        lng: 32.9538,
    }
};

console.table(personaTable);

const persona = {
    nombre: 'Hugo',
    apellido: 'Chavez',
    edad: 35,
    direccion: {
        ciudad: 'Cuba',
        zip: 334333,
        lat: 16.986,
        lng: 52.9538,
    }
};

console.log(persona);
//Asignacion de referencia de memoria
const persona2 = persona; // no estamos copiando el objeto estamos copiando la referencia en memoria de ese objeto.

persona2.nombre = 'Petter';

console.log(persona);
console.log(persona2);

const persona3 = { ...persona }
