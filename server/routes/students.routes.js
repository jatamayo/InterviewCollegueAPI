const express = require('express');
const router = express.Router();


// _________________________________________________________
// CALL *controllers/students.controller.js* file connection
const students = require('../controllers/students.controller');

console.log("testing3")
// Get All method
router.get('/', students.getStudents);
// Get One method
router.get('/:id', students.getStudent);
// Post method
router.post('/', students.createStudent);
// Put method
router.put('/:id', students.editStudent);
// Delete method
router.delete('/:id', students.deleteStudent);

module.exports = router;