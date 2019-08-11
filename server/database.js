const mongoose = require('mongoose');

const URI = 'mongodb://localhost/collegeDB';

// Connection to DB Mongo
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));


// exports mongoose connection
module.exports = mongoose;