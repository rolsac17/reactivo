

//Funcciones
//El problema de usar funciones de esta manera
//es que al imprimirla sale la referencia a la funcion.
function saludar(nombre){
    return `Hola ${nombre}`
}

//al asignarle el valor de 30 se pierde la referencia a la funcion.
saludar = 30;

console.log(saludar)

//Para evitarlo asignamos a una constante la funcion.

const saludar2 = function(nombre){
    return `Hola ${nombre}`;
}

//saludar2=20;

console.log(saludar2);

//Funciones de flecha o funciones lamda

const saludar3 = (nombre) => {
    return `Hola ${nombre}`
}

console.log(saludar3('Goku'))

//Ventaja funcion flecha
//se puede simplificar si solo lleva un return

const saludar4 = (nombre) => `Hola ${nombre}`;

console.log(saludar4('Pedro'));

//Si se desea obtener un usuario con una funcion de flecha
//donde estan en un objeto

const getUser = () => {
    return {
        uid: 'AAAA',
        username: 'Escobar123'
    }
}

console.log(getUser());

//Al simplificarla ya que tiene un solo return.

const getUser2 = () =>
({
    uid:'AAAA',
    username:'Escobar123',
});

//al simplificarla javascrip identifica al objeto como el cuerpo de la funcion y arroja un error
//para decirle que queremos enviar el objeto se envuelve entre ().

console.log(getUser2());

//Tarea
//1.- Transformar a una funcion de flecha.
//2.- Tiene que retornar un objeto implicito.
//3.- Pruebas.

function getUsuarioActivo (nombre) {
    return{
        uid: '1ahdk',
        username: nombre
    }
};
const usuarioActivo = getUsuarioActivo('Rolando');

console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) =>({
    uid: '1ahdk',     //Esto es retornar un objeto implicito.
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Crilyn');

console.log(usuarioActivo2);