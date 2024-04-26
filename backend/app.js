const express = require('express');
const mongoose = require('mongoose');
const experienciaRoutes = require('./routes/experienciaRoutes');

const app = express();
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/parque-explora', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => console.log('Conexión exitosa a MongoDB'));

// Rutas para las experiencias
app.use('/experiencias', experienciaRoutes);
// Agregar rutas para otras entidades...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en ejecución en el puerto ${PORT}`));
