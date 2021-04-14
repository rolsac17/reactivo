

//Asinc - Await


//Sin asinc await
// const getImagenPromesa = () => {
//     const promesa = new Promise( (resolve,reject) =>{
//         resolve('https://klksañlkañslkd');
        
//     })
//     return promesa;
// }

//Simplificado
// const getImagenPromesa = () => 
//     new Promise( resolve =>
//         resolve('https://klksañlkañslkd'));

//Utilizando Asinc - Await

const getImagen = async() => {
    
    try {
    const apiKey= 'MHwiLmMsQeNdC47H7hytk8qR153HDNrT';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

    const {data} = await resp.json();

    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src=url;

    document.body.append(img);
        
    } catch (error) {
        console.error(error)
        
    }

    

}

getImagen();

// getImagenPromesa().then( console.log );