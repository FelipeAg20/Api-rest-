const express = require('express')
const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'motomoto',
    port:3305
    
});

connection.connect(function (err) {
    if (err) {
        throw err;

    }else{
        console.log('conexion exitosa');
    }
})

module.exports = connection;