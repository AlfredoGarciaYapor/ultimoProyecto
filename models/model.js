'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = Schema({
	name: String,
	lastName: String,
	secondLastName: String,
	age: Number,
	studentNumber: Number
})

module.exports = mongoose.model('Student',StudentSchema);
