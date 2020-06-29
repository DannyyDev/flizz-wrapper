# Flizz

Wrapper oficial de Flizz

Flizz es una API (Application Programming Interface) con una base de datos de imagenes y puede ser utilizado por cualquier aplicación por medio de solicitudes HTTP

## Instalación

```
npm install flizz --save
```

## Uso
Para poder utilizar el Wrapper necesitas una clave de acceso que puedes obtenerla haciendo [Click Aquí](https://flizz.progswer.me/)
```js
var Flizz = require("flizz");
var client = new Flizz.login("Tu-TOKEN");
```

## Endpoints Disponibles 

```js
client.memes(); //Devuelve un meme
client.pat(); //Devuelve una imagen de caricias
client.kill(); //Devuelve una imagen de asesinatos
client.hug(); //Devuelve una imagen de abrazos
client.kiss(); //Devuelve una imagen de besos
client.hentai(); //Devuelve una imagen hentai
client.porn(); //Devuelve una imagen pornográfica
client.iwantthat(); //Devuelve una imagen modificada
client.memories(); //Devuelve una imagen modificada
client.owo(); //Devuelve una imagen modificada
client.praise(); //Devuelve una imagen modificada
```

## Ejemplos de uso
Todos los endpoints devuelven una **promesa**.

```js
var Flizz = require("flizz");
var client = new Flizz.login("Tu-TOKEN");
 
var imagen = client.kiss();
 
message.channel.send({files: [imagen]});
```

Para remover la promesa puedes utilizar la función `.then`

```js
var imagen = client.kiss();
imagen.then(function(valor) {
message.channel.send(valor);
});
```

## Changelog

### V0.1.8

\+\- Actualizado: Licencia.

### V0.1.7

\+\- Arreglado: Errores en el markdown.

### V0.1.6

\+ Agregado: Endpoints nuevos.

### V0.1.5

* Relanzamiento remasterizado.

### V0.1.4

\+\- Arreglado: Endpoints utilizables.

### V0.1.2

* Lanzamiento.