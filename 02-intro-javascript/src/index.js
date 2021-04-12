

//Promesas

import {getHeroes} from './bases/08-imp-exp';
import heroes from './data/heroes';

const promesa = new Promise((resolve, reject) =>{
    setTimeout( ()=>{
        const heroes = getHeroes(2);
        resolve(heroes);
    }, 2000 )
});

promesa.then((heroes)=>{
    console.log('heroes',heroes);
})
