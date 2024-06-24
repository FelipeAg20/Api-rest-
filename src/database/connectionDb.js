//Importamos express
const express = require('express')

//Importamos mysq
const mysql2 = require('mysql2');

//Creamos un objeto que tendra la conexion a la base de datos
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'motomoto',
    port:3305
    
});

//Verificamos si la conexion de hizo 
connection.connect(function (err) {
    if (err) {
        throw err;

    }else{
        console.log('conexion exitosa');
    }
})

//Exportamos la conexion
module.exports = connection;