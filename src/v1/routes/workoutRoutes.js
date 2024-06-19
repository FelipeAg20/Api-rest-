const express = require("express");
const router = express.Router();
//Importamos los controladores de rutas
const workoutController = require("../../controllers/workoutController");


//Aqui va toda la logica req,res
//Y aqui esta la ruta a la cual se le van a concatenar otras
router
  .get("/", workoutController.getAllWorkout)// Obtiene todo los elementos
  .get("/:workoutId", workoutController.getOneWorkout)// Obtiene un solo elemnto 
  .post("/", workoutController.createNewWorkout)// Crea un nuevo elemnto 
  .patch("/workoutId", workoutController.updateWorkout)// Modifica un elemnto existente 
  .delete("/:workoutId", workoutController.deleteWorkout);// Elimina un elemnto existente 

module.exports = router;
