const workoutServices = require("../services/workoutService");

// const getAllWorkouts = (req, res) => {
//   const allWorkouts = workoutServices.getAllWorkouts();
//   res.send(`Usuarios registrados ${allWorkouts}`);
// };
const getAllWorkout = async (req, res) => {
  try {
    const allWorkouts = await workoutServices.getAllWorkout();
    res.status(200).json(allWorkouts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching workouts", error: err });
  }
};


const getOneWorkout = async (req, res) => {
  try {
    const oneWorkout = await workoutServices.getOneWorkout(
      req.params.workoutId
    );
    res.status(200).json(oneWorkout);
  } catch (err) {
    res.status(500).json({ message: "Error fetching workout", error: err });
  }
};


const createNewWorkout = async (req, res) => {
  try {
    const newWorkout = await workoutServices.createNewWorkout(req.body);
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(500).json({ message: "Error creating workout", error: err });
  }
};


const updateWorkout = async (req, res) => {
  try {
    const updatedWorkout = await workoutServices.updateWorkout(
      req.params.workoutId,
      req.body
    );
    res.status(200).json(updatedWorkout);
  } catch (err) {
    res.status(500).json({ message: "Error updating workout", error: err });
  }
};


const deleteWorkout = async (req, res) => {
  try {
    await workoutServices.deleteWorkout(req.params.workoutId);
    res.status(204).json({ message: "Workout deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting workout", error: err });
  }
};


module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
};
