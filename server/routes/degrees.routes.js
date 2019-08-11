const express = require('express');
const router = express.Router();


// _________________________________________________________
// CALL *controllers/degrees.controller.js* file connection
const degrees = require('../controllers/degrees.controller');

console.log("testing3")
// Get All method
router.get('/', degrees.getDegrees);
// Get One method
router.get('/:id', degrees.getDegree);
// Post method
router.post('/', degrees.createDegree);
// Put method
router.put('/:id', degrees.editDegree);
// Delete method
router.delete('/:id', degrees.deleteDegree);

module.exports = router;