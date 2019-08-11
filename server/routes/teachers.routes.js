const express = require('express');
const router = express.Router();


// _________________________________________________________
// CALL *controllers/teachers.controller.js* file connection
const teachers = require('../controllers/teachers.controller');

// Get All method
router.get('/', teachers.getTeachers);
// Get One method
router.get('/:id', teachers.getTeacher);
// Post method
router.post('/', teachers.createTeacher);
// Put method
router.put('/:id', teachers.editTeacher);
// Delete method
router.delete('/:id', teachers.deleteTeacher);

module.exports = router;