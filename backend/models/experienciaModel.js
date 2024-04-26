const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  salaInteractiva: {
    type: String,
    required: true
  },
  imagenRelacionada: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Experiencia', experienciaSchema);
