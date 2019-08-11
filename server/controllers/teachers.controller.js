// _____________________________________________
// CALL *models/teachers.js* file connection
// Model of data teachers
const Teachers = require('../models/teachers');


const teachersCtrl = {};


// Get All method
teachersCtrl.getTeachers = async (req, res, next) => {
    const teachers = await Teachers.find();
    res.json(teachers);
};

// Get One method
teachersCtrl.getTeacher = async (req, res, next) => {
    const teacher = await Teachers.findById(req.params.id);
    res.json(teachers);
};

// Post method
teachersCtrl.createTeacher = async (req, res, next) => {
    const teacher = new Teachers({
        name: req.body.name,
        lastName: req.body.lastName,
        gender: req.body.gender
    });
    await teacher.save();
    res.json({
        status: 'Employee Saved'
    });
};

// Put method
teachersCtrl.editTeacher = async (req, res, next) => {
    const teacher = {
        name: req.body.name,
        lastName: req.body.lastName,
        gender: req.body.gender
    }
    await Teachers.findByIdAndUpdate(req.params.id, {$set: teacher}, {new:true});
    res.json({
        status : 'Employee updated'
    });
};

// Delete method
teachersCtrl.deleteTeacher = async (req, res, next) =>{
    await Teachers.findByIdAndRemove(req.params.id);
    res.json({
        status : 'Employee deleted'
    });
};


module.exports = teachersCtrl;