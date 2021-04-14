

// Fetch API

const apiKey= 'MHwiLmMsQeNdC47H7hytk8qR153HDNrT';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//Esta es la forma sin usar promesas en cadena
// peticion.then(resp => {
//     resp.json().then( data => {
//         console.log(data);
//     });
// })
peticion
.then( resp  => resp.json() )
.then( ({data}) => {
    // console.log(data.images.original.url)
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src=url;

    document.body.append(img);
})
.catch(err => {
    console.warn(err);
});