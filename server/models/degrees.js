const mongoose = require('mongoose');
const {  Schema } = mongoose;


// Create Schema of our data
const degreeSchema = new Schema({
    name: {type: String, requied: true},
    teacherID: {type: String, requied: true}
});


// Convert Schema to mongoose model/format
module.exports = mongoose.model('degrees', degreeSchema);