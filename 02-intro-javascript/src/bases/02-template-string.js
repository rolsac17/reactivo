
// Template string

const nombre = 'Rolando';

const apellido = 'de Paz';

const nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

const nombreCompleto2 = `Hola mundo mi nombre con template string es ${nombre} ${apellido}`;

console.log(nombreCompleto2);

function getSaludo(nombre, apellido){
    return `Hola mundo React de ${nombre} ${apellido}`;
}

console.log(`Este es un texto de ${getSaludo(nombre, apellido)}`)