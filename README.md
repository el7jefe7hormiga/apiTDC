# Nodejs MYSQL REST API

### Installation

```
git clone https://github.com/fazt/nodejs-mysql-restapi
cd nodejs-mysql-restapi
docker-compose up
npm install
npm run dev
```

### TODO

- [ ] upload images
- [ ] create authentication and authorization
- [ ] add validation
- [ ] improve error handling
- [ ] complete the tests
- [ ] docker for production


//*********//

Requerimientos:
    -NodeJS
    -Express
    -JSON
    -MySQL

Que se va hacer?
REST API, app backend

PAGINA WEB   |     Peticiones HTTP     |  --------->   NODEjs    ------>   MySQL
-JavaScript  |       --------->        |                         <------  
-HTML        |       <---------        |     
-CSS         | GET, PUT, PATCH, DELETE |

railway.app
Para desplegar (deploy) el proyecto

Pasos:
- crear carpeta, entrar en ella
- npm init
    - crea: package.json
- npm install
    - express  <--- crea servidor (http://localhost:puerto)
    - nodemon  <--- para que cada ves que guarde un archivo, se actualice el servidor: agregar "scripts": { "dev": "nodemon src/index.js", ...}. ejecutar en consola: npm run dev
    - mysql2
    - dotenv

- crear index.js

* para poder usar import en lugar de require, se necesita version de node > 16, 
y en el package.json agregar "type": "module",
p.e. 
import express from 'express'
const app = express()
app.listen(300)
* listo! ya esta el servidor en escucha en el puerto 3000

- crear rutas (peticiones HTTP)

app.get   ('/empleados', (req, res)=> res.send('obteniendo empleados'))
app.post  ('/empleados', (req, res)=> res.send('guardar empleado'))
app.put   ('/empleados/:id', (req, res)=> res.send('actualizar empleado'))
app.delete('/empleados/:id', (req, res)=> res.send('eliminando empleado'))

* usar un rest client, para hacer pruebas de peticiones
ThunderClient, extension VScode


- conectar a MySQL

crear ./db/database.sql
ver ./db.js


- crear controladores

* las funciones que se ejecutan cuando accesas a alguna ruta.
ver ./controllers/*

app.get('/empleados', (req, res)=> res.send('obteniendo empleados'))
                      ---------------------------------------------
                        /
        todo esto se mete en una variable(o const) en otro archivo
    
...y ahora queda el router:
import {controlador} from 'ruta donde estan los controladores'
app.get('tdc', controlador)


Variables de entorno (env)

Para no tener info delicada en el codigo, se crean variables de entorno, env, 
en un archivo independiente.
Se instala el modulo: dotenv
Sirve para leer estos archivos, .env


RAILWAY ! deply la app, subirla a un servidor en la nube!





