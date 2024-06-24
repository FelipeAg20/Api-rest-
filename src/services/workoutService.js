//Importamos express
const express = require("express");
//Importamos la conexion a la base de datos
const conexion = require("../database/connectionDb");


//Estas son las funciones que se pasaran como parametro a los controladores como un resultado 
//Se hacen consultas a la base de datos usando el metodo query
const getAllWorkout = () => {
  return new Promise((resolve, reject) => {
    conexion.query("SELECT * FROM usuarios", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getOneWorkout = (workoutId) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      "SELECT * FROM usuarios WHERE id = ?",
      [workoutId],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const createNewWorkout = (workout) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      "INSERT INTO usuarios SET ?",
      workout,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const updateWorkout = (workoutId, workout) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      "UPDATE usuarios SET ? WHERE id = ?",
      [workout, workoutId],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const deleteWorkout = (workoutId) => {
  return new Promise((resolve, reject) => {
    conexion.query(
      "DELETE FROM usuarios WHERE id = ?",
      [workoutId],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteWorkout,
};
