// _____________________________________________
// CALL *models/degrees.js* file connection
// Model of data degrees
const Degrees = require('../models/degrees');


const degreesCtrl = {};

// Consultas to DB
// Get All method
degreesCtrl.getDegrees = async (req, res, next) => {
    const degrees = await Degrees.find();
    res.json(degrees);
};

// Get One method
degreesCtrl.getDegree = async (req, res, next) => {
    const degree = await Degrees.findById(req.params.id);
    res.json(degree);
};

// Post method
degreesCtrl.createDegree = async (req, res, next) => {
    const degree = new Degrees({
        name: req.body.name,
        teahcerID: req.body.teacherID
    });
    await degree.save();
    res.json({
        status: 'Degree Saved'
    });
};

// Put method
degreesCtrl.editDegree = async (req, res, next) => {
    const degree = {
        name: req.body.name,
        teacherID: req.body.teacherID, 
    }
    await Degrees.findByIdAndUpdate(req.params.id, {$set: degree}, {new:true});
    res.json({
        status : 'Degree updated'
    });
};

// Delete method
degreesCtrl.deleteDegree = async (req, res, next) =>{
    await Degrees.findByIdAndRemove(req.params.id);
    res.json({
        status : 'Degree deleted'
    });
};


module.exports = degreesCtrl;