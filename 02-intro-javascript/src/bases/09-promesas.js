

//Promesas

import {getHeroes} from './bases/08-imp-exp';
import heroes from './data/heroes';

//la promesa resive un callback que resive dos argumentos
//uno llamado resolve y otro reject, los nombres que se coloquen no importa pero se usa por convencion resolve y reject
//resolve es un callback que se va a ejecutar cuando la promesa a sido exitosa
//reject lo vamos a ejecutar cuando la promesa falla o algo no se pueda cumplir eso le notifica a la persona que lo espera que fallo.

// const promesa = new Promise((resolve, reject) =>{
    // setTimeout( ()=>{
        // const heroes = getHeroes(2);
        // resolve(heroes);
        // reject('No se encontro al heroe')
    // }, 2000 )
// });

//El then muestra el mensaje 
// promesa.then((heroes)=>{
//     console.log('heroes',heroes);
// })

//se tiene que manejar el reject con un catch
// .catch(err => console.warn(err));

const getHeroesByIdAsync = (id) =>{
    return new Promise( (resolve, reject) =>{

        setTimeout( ()=>{
            const p1 = getHeroes(id);
            if(p1){
                resolve(p1);
            }else{
                reject('El heroe no esxiste');
            }
        }, 2000)
    });


}

getHeroesByIdAsync(18).then( console.log)
.catch(console.warn);