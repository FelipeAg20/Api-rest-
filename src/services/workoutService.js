const express = require("express");
const conexion = require("../database/connectionDb");

const getAllWorkout = () => {
  return new Promise((resolve, reject) => {
    conexion.query("SELECT * FROM marca", (err, result) => {
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
      "SELECT * FROM marca WHERE id_marca = ?",
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
      "INSERT INTO marca SET ?",
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
      "UPDATE tabla_usuarios SET ? WHERE id = ?",
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
      "DELETE FROM marca WHERE id_marca = ?",
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
