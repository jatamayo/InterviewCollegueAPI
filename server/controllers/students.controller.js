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

// Get One method
studentsCtrl.getStudent = async (req, res, next) => {
    const student = await Students.findById(req.params.id);
    res.json(student);
};

// Post method
studentsCtrl.createStudent = async (req, res, next) => {
    const student = new Students({
        name: req.body.name,
        lastName: req.body.lastName,
        gender: req.body.gender,
        birthday: req.body.birthday
    });
    await student.save();
    res.json({
        status: 'Employee Saved'
    });
};

// Put method
studentsCtrl.editStudent = async (req, res, next) => {
    const student = {
        name: req.body.name,
        lastName: req.body.lastName,
        gender: req.body.gender,
        birthday: req.body.birthday, 
    }
    await Students.findByIdAndUpdate(req.params.id, {$set: student}, {new:true});
    res.json({
        status : 'Employee updated'
    });
};

// Delete method
studentsCtrl.deleteStudent = async (req, res, next) =>{
    await Students.findByIdAndRemove(req.params.id);
    res.json({
        status : 'Employee deleted'
    });
};


module.exports = studentsCtrl;