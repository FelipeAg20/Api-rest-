//Se crea una constante que importa el framework express
const express = require('express');

//Se importan las rutas que tienen los verbos HTTP
const v1RouterWorkout = require('./v1/routes/workoutRoutes');

//Se importan la conexion a la base de datos
const conexion = require('../src/database/connectionDb');

//Obejto de express que optiene todos los metodos de express
const app = express();

//Leer formatos .json
app.use(express.json());


//En esta constante busca en las variables de entorno el puerto, si no lo encuentra asiga el 3000
const port = process.env.PORT || 3000;

//Ruta principal de la API REST
app.use('/v1/workout', v1RouterWorkout );

//Funcion para confirmar conexion del servidor
app.listen(port, function(err){
    if (err) {
        throw err;
    }else{
        console.log(`listening on port ${port}`)
    }
});