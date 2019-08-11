const express = require('express');
const router = express.Router();


// _________________________________________________________
// CALL *controllers/degrees.controller.js* file connection
const degrees = require('../controllers/degrees.controller');

console.log("testing3")
// Get All method
router.get('/', degrees.getDegrees);
// Get One method
router.get('/:id', degrees.getDegrees);
// Post method
router.post('/', degrees.createDegrees);
// Put method
router.put('/:id', degrees.editDegrees);
// Delete method
router.delete('/:id', degrees.deleteDegrees);

module.exports = router;