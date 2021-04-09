




//Desestructuracion de Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

//Forma tediosa
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

//Forma desestructurada.
//Para cambiar de personaje se agrega una coma para 
//indicarle a javascrip que no nos interesa el primer
//elemento

// const [p1] = personajes;
// const [,p2] = personajes;
// const [,,p3] = personajes;

const [p1, p2, p3] = personajes

console.log(p1, p2, p3);

const retornarArreglo = () => {
    return ['ABC', '123'];
};
//muestra el arreglo completo
// const arr = retornaPersona4();
// console.log(arr);

//permite acceder a los valores del arreglo

const [letras, numeros] = retornarArreglo();

console.log(letras, numeros);

//Tarea
//El primer valor del arr se llamara nombre.
//el segundo se llamara setNombre.
const useState = ( valor ) => {
    return[valor, ()=>{ console.log('Hola mundo') }];
};

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();