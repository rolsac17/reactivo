

// Operador condicional ternario

//manera corta de hacer una desicion

const activo = true;

//Forma de desicion con if
// let mensaje = '';

// if (activo) {
//     mensaje= 'activo';
// }else{
//     mensaje= 'inactivo';
// }

//Con operador ternario

//const mensaje = (!activo) ? 'Activo' : 'Inactivo';

//Para que no se ejecute algo si no cumple con la condicion pero el null es mala practica

//const mensaje = (activo) ? 'Activo' : null ;

//Si queremos que no se ejecute si no cumple la condicion de manera correcta como un if si

const mensaje = activo && 'Activo';

console.log(mensaje);