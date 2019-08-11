// _____________________________________________
// CALL *models/students.js* file connection
// Model of data students
const Students = require('../models/students');

const studentsCtrl = {};

// Get All method
studentsCtrl.getStudents = async (req, res, next) => {
    const students = await Students.find();
    res.json(students);
};

module.exports = studentsCtrl;