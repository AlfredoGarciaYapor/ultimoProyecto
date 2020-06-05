'use strict'
const mongoose = require('mongoose');
const port = process.env.PORT || 3678;
const app = require('./app')

mongoose.connect('mongodb://localhost:27017/curso',(err,res)=>{

	console.log("Base de datos iniciada!");

	if(err){
		console.log(err);
	}else{
		//web server listening
		app.listen(port,()=>{
		console.log(`API REST FAVORITOS running on http://localhost:${port}`);
		});
	}

})
