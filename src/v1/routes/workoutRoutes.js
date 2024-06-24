//Importamos express
const express = require("express");

//Le asignamos el metodo router a una constante
const router = express.Router();

//Importamos los controladores que administran las rutas
const workoutController = require("../../controllers/workoutController");

//Router es un metodo de express que nos permite manejar los verbos HTTP desde una sola ruta
router
  .get("/", workoutController.getAllWorkout)// Obtiene todo los elementos 
  .get("/:workoutId", workoutController.getOneWorkout)// Obtiene un solo elemento 
  .post("/", workoutController.createNewWorkout)// Crea un nuevo elemento 
  .patch("/workoutId", workoutController.updateWorkout)// Modifica un elemento existente 
  .delete("/:workoutId", workoutController.deleteWorkout);// Elimina un elemento existente 


  //Exportamos las rutas con los verbos HTTP que se concatenaran con los controladores y servicios 
module.exports = router;
