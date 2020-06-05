'use strict'
const Student = require('../models/model');
var path = require("path");

function saludarStudent(req,res){
	const nombre = req.params.name;
	const apellido = req.params.lastname;
	res.send('Hola '+nombre + " " + apellido);
	console.log("Peticion realizada!");
}

function getStudent(req,res){
	const studentId = req.params.id;

	Student.findById(studentId,function(err,student){

		if(err){
			console.log(err);
			res.status(500).send({message:"error al devolver marcador"});
		}else{
			console.log("entro aqui");
			console.log(student);
			res.status(200).send({student});
		}

	})

}

function saveStudent(req,res){
	var student = new Student();
	var params = req.body;
	

	student.name = params.name;
	student.lastName = params.lastName;
	student.secondLastName = params.secondLastName;
	student.age = params.age;
	student.studetNumber = params.studetNumber;

	student.save((err,studentStored)=>{
		if(err){
			console.log(err);
			res.send({message: "No se pudo guardar el registro"});
		}else{
			res.send({message:studentStored});
		}
	})

}

function updateStudent(req,res){

	var params = req.body;
	const studentId = req.params.id;

	Student.findByIdAndUpdate(studentId,params,function(err,studentUpdated){
		if(err){
			res.status(500).send({message:"error al devolver marcador"});
		}else{
			res.status(200).send({studentUpdated});
		}

	})

}

function deleteStudent(req,res){
	const studentId = req.params.id;

	Student.findOneAndRemove(studentId,function(err,deletedStudent){
		if(err){
			res.status(500).send({message:"error al devolver marcador"});
		}else{
			res.status(200).send({deletedStudent});
		}

	})

}

function getStudents(req,res){
console.log("students entro aqui");
	Student.find({}).exec((err,students)=>{
		console.log("students entro aqui tambien");

		if(err){
			res.status(500).send({message: "Hubo en error en el server"});
			console.log("error en el server");
		}
		if(!students){
			console.log("no hay registros");
			res.status(404).send({message: "No hay registros para mostrar"});
		}

		console.log(students);

		res.status(200).send({students});

	});

}

function getwebpage(req,res){
	res.sendFile(path.join(__dirname+'../../views/prueba.html'));
}

module.exports = {
	saludarStudent,
	getStudent,
	getStudents,
	saveStudent,
	updateStudent,
	deleteStudent,
	getwebpage
}