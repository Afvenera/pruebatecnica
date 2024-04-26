const express = require('express');
const router = express.Router();
const experienciaController = require('../controllers/experienciaController');

// Rutas para las experiencias
router.get('/', experienciaController.getExperiencias);
router.post('/', experienciaController.createExperiencia);
// Definir otras rutas...

module.exports = router;
