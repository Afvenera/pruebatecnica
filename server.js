const { MongoClient } = require('mongodb');

const username = "elpapibrayank";
const password = "djePOdtHkIWcVXvE";
const uri = `mongodb+srv://${username}:${password}@cluster0.mv84xum.mongodb.net/`;


// Crear un nuevo cliente de MongoDB
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    // Conectar al clúster de MongoDB Atlas
    await client.connect();
    console.log('Conexión establecida a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
}

// Llamar a la función para conectar a la base de datos
connectToDatabase();
