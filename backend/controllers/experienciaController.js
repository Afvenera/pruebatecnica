const Experiencia = require('../models/experienciaModel');

// Controlador para obtener todas las experiencias
exports.getExperiencias = async (req, res) => {
  try {
    const experiencias = await Experiencia.find();
    res.json(experiencias);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controlador para crear una nueva experiencia
exports.createExperiencia = async (req, res) => {
  const experiencia = new Experiencia({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    salaInteractiva: req.body.salaInteractiva,
    imagenRelacionada: req.body.imagenRelacionada
  });

  try {
    const nuevaExperiencia = await experiencia.save();
    res.status(201).json(nuevaExperiencia);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Otros controladores para actualizar, borrar y obtener una experiencia por su id...
