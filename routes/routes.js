'use strict'

const express = require('express');
const StudentController = require('../controllers/controller'); 
const api = express.Router();

api.get('/saludar/:name/:lastname',StudentController.saludarStudent); //obtener listo
api.get('/student/:id',StudentController.getStudent); //obtener listo
api.post('/addStudent',StudentController.saveStudent); //guardar listo
api.put('/updateStudent/:id',StudentController.updateStudent); //actualizar
api.delete('/deleteStudent/:id',StudentController.deleteStudent); //eliminar
api.get('/web',StudentController.getwebpage);

api.get('/allStudents',StudentController.getStudents); //obtener listo

module.exports = api;