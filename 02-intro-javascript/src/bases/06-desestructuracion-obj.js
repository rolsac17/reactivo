

//Desestructuracion de Objetos o
//Asignacion desestructurante

const persona ={
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
};
//Ejemplos de como se accede al objeto de forma tediosa
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

//Extrae unicamente el nombre del objeto persona
// const {nombre} = persona

// console.log(nombre);

//Para reasignarle el nombre a lo que se extrae del objeto

const {nombre:nombre2} = persona;

console.log(nombre2);

//Se puede extraer todos los valores del objeto.

const {nombre, edad, clave} = persona;

console.log(nombre, edad, clave);

//Funcion de ejemplo con el objeto completo imprime a consola el objeto persona
const retornaPersona = (usuario) =>{
    console.log(usuario);
};

retornaPersona(persona);

//funcion con desestructuracion. imprime los valores del objeto persona

const retornaPersona2 = (usuario) => {
    const {nombre, edad, clave} = usuario;

    console.log(nombre, clave, edad);
};

retornaPersona2(persona);

//funcion con desestructuracion en el argumento de la funcion.

const retornaPersona3 = ({nombre,clave,edad}) =>{
    console.log(nombre, clave, edad);
}

retornaPersona3(persona);

//Tambien se pueden agregar campos aunque no esten en el
//objeto original y si se encontrara toma el del objeto original.

const retornaPersona4 = ({nombre,clave,edad, rango='Capitan'}) =>{
    console.log(nombre, rango, edad, clave);
}

retornaPersona4(persona);

// solo debe mostrar nombre clave y anios
const useContext = ({nombre,clave,edad, rango='Capitan'}) =>{
    // console.log(nombre, rango, edad, clave);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.8734,
            lng: -12.986
        }  
    }
};
//asi se extren objetos anidados
const {nombreClave, anios, latlng:{lat, lng}} = useContext( persona );

//const {nombreClave, anios} = avenger;
//const { lat, lng} = latlng tambien se puede de esta forma.
console.log(nombreClave, anios, 'ultima linea');

console.log(lat, lng);


