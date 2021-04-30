
// test('Primera Prueba debe ser true', () => {

//     const isActive = true;
    
//     if (isActive){
//         throw new Error('No esta activo')
//     }

// })

describe('Pruebas en el archivo Demo', () => {

    test('Deben ser iguales los string', () => {
        //Inicializacion
        const mensaje = 'Hola mundo';
    
        //Estimulo
        const mensaje2 = `Hola mundo`;
    
        //observar comportamiento
        expect( mensaje ).toBe( mensaje2 );
    });

});

