const express = require('express');
const router = express.Router();


// _________________________________________________________
// CALL *controllers/teachers.controller.js* file connection
const teachers = require('../controllers/teachers.controller');

// Get All method
router.get('/', teachers.getTeachers);
// Get One method
router.get('/:id', teachers.getTeachers);
// Post method
router.post('/', teachers.createTeachers);
// Put method
router.put('/:id', teachers.editTeachers);
// Delete method
router.delete('/:id', teachers.deleteTeachers);

module.exports = router;