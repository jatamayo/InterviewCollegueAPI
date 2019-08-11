const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

// _____________________________________________
// CALL *database.js* file connection
const { mongoose } = require('./database');


// Settings
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

// Routes
// _____________________________________________
// CALL *routes/students.routes.js* file connection
app.use('/api/students', require('./routes/students.routes'));


// Starting server
app.listen(app.get('port'), function(){
    console.log('Server on port ', app.get('port'));
})