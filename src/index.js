const express = require('express');
const v1RouterWorkout = require('./v1/routes/workoutRoutes');
const conexion = require('../src/database/connectionDb');

const app = express();
app.use(express.json());

// Configuración del motor de vistas
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'src/views'));


// Middleware para manejar datos de formularios
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));


//Que busque el puerto en las variables de entorno, si no lo encuentra asigna el 3000
const port = process.env.PORT || 3000;
app.use('/v1/workout', v1RouterWorkout);
// app.use("/api/v1", v1Router);//AQui concatenamos la ruta del route a (/api/v1/)






app.listen(port, function(err){
    if (err) {
        throw err;
    }else{
        console.log(`listening on port ${port}`)
    }
});