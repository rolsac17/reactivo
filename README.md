# reactivo
datos

## Que es React?

Es una libreria que nos permite crear aplicaciones, react esta hecho
para realizar todo tipo de magnitud de aplicaciones con alto nivel de
interactiidad.

Esta libreria al ser declarativa, hace facil seguir patrones de disenio y
crear interfaces  de usuario interactivas.

Es muy eficiente por que react renderisa inmediatamente si hay un cambio.

Es predecible por que toda la informacion fluye en una sola direccion esto
nos evita mutaciones involuntarias o impredecibles.

Los componentes: que son pequenias piezas de codigo encapsuladas que pueden
tener estado o no y con eso podemos romper una aplicacion complicada en pequenios componentes o pequenias piezas, sencillas y faciles de mantener,
que permitan mantener el codigo limpio y sencillo.

Tambien se puede integrar con Node creando server side render.

y aplicaciones moviles con React Native, aplicacines de escritorio con electron

*JSX*
es Javascript + Xhtml

*Integrando React*
Para integrar React en el documento html colocamos los siguientes escripts:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />

    <!-- Cargat React -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js">
    </script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js">
    </script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <title>Curso de React</title>
  </head>
  <body>

    <div id="root"></div>

    <script>

      // ==== Código

    </script>


  </body>
</html>
```
**NOTA:**
Al refrescar el codigo aparecera un error en consola cuando agregamos esta
porcion de codigo:

```html
 <script>

    const h1Tag = <h1> Hola mundo </h1>

  </script>
```
y sera por que no estamos usando *Babel* que se va a encargar de hacer la
traduccion de un codigo moderno a lo que es un codigo que sea soportado por
cualquier navegador web.

```html
<script type="text/babel">

    const h1Tag = <h1> Hola mundo </h1>

  </script>
```
agregando el atributo type a la etiqueta agregamos babel y solucionamos el
error en consola.

### BABEL
Nos permite utilizar caracteristicas actuales de javascript, caracteristicas
que han sido aceptadas y utilizar codigo en navegadores web que aun no soportan
esa caracteristica.

### VARIABLES Y CONSTANTES
No se debe de utilizar **var** en nuestras aplicaciones ya que no es una buena practica, esa palabra tiene funciones ocultas que puede dañar nuestro codigo.

Solo utilisaremos:
- let: estas variables si se pueden renombrar.
- const: para variables que no se van a cambiar o no se renombraran.

**Variables de scoup**
son variables que se encuentran en diferente contexto
por ejemplo:

```
  let valorDado=4;

  if (true){
    let valorDado=6;

    console.log(valorDado)
  }

```
el primer valorDado se encuentra en un diferente scoup
al que se encuentra en el if y dentro del if se puede 
volver a declarar otra le valorDado ya que esta en un
diferente ambito, eso se puede hacer tambien con los
const.

### TEMPLATE STRING
Es una forma de concatenar mas facil en la cual se 
pueden incrustar instrucciones de javascript utilizando backtick en vez de comillas simples.

```
const nombre = 'Rolando';
const apellido = 'de Paz';
const nombreCompleto = `${nombre} ${apellido}`;

function getSaludo(){
  return 'Hola mundo soy';
}

console.log(`${getSaludo} ${nombre}`)

```

### OBJETOS LITERALES

o tambien llamados en algunos lenguajes como diccionarios, trabaja con pares de valores **nombre:'Pedro'**, y se pueden hacer enbevidos.

```
const personaTable = {
    nombre: 'Rolando',
    apellido: 'de Paz',
    edad: 25,
    direccion: {
        ciudad: 'Guatemala',
        zip: 333333,
        lat: 13.986,
        lng: 32.9538,
    }
};
```
al crear un objeto simepre llevara su protootipe que es donde se encuentra las funciones que se puede hacer con ese objeto.

se puede utilizar el **console.table** para que aparesca en una tabla y se vea mejor.

para copiar un objeto no se beve hacer asi:
```
const persona2 = persona;

```

ya que solo se esta copiando la referencia en memoria del objeto original.

Para eso se utiliza el operador **Spread (...)**.

```
const persona3 = { ...persona }


```
se agregan los tres puntos antes del objeto y ya tenemos el clon de persona.


### FUNCIONES

El problema de usar funciones de esta manera
es que al imprimirla sale la referencia a la funcion.
```
function saludar(nombre){
    return `Hola ${nombre}`
}
```
al asignarle el valor de 30 se pierde la referencia a la funcion.

```
saludar = 30;
```

Para evitarlo asignamos a una constante la funcion.

```
const saludar2 = function(nombre){
    return `Hola ${nombre}`;
}
```

Funciones de flecha o funciones lamda
```
const saludar3 = (nombre) => {
    return `Hola ${nombre}`
}
```
### Comando Create React App

npx create-react-app counter-app






