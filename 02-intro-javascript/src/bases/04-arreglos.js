
// Arreglos
//Es una coleccion de informacion que se encuentra en una misma variable

//se puede declarar arrays con el new al igual que objetos
//solo que los crea de un tamaño fijo.
const arreglo = new Array();

//Crea un nuevo arreglo con 100 espacios
const arreglo2 = new Array(100);

//con la funcion push se pueden agregar mas espacios
//el inconveniente es que modifica el arreglo original.
arreglo2.push(1);

console.log(arreglo, arreglo2);
const arreglo3 = [1,2,3,4];

// para agregar un elemento dentro de el arreglo sin el push
// utilizamos el spread
let arreglo4 = [...arreglo3, 5];

//funcion map
//Necesita una funcion para que recorra el arreglo y cree uno nuevo
//ya que sin el manda undefined.

const arreglo5 = arreglo4.map(function(numero){
    return numero * 2;
})


console.log(arreglo3);
console.log(arreglo4);
console.log(arreglo5);

