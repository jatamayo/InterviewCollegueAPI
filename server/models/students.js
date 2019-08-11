const mongoose = require('mongoose');
const {  Schema } = mongoose;


// Create Schema of our data
const studentSchema = new Schema({
    name: {type: String, requied: true},
    lastName: {type: String, requied: true},
    gender: {type: String, requied: true},
    birthDay: {type: String, requied: true}
});


// Convert Schema to mongoose model/format
module.exports = mongoose.model('degrees', studentSchema);