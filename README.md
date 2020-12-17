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
