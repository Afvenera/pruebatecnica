import axios from 'axios';

const API_URL = 'http://localhost:8080'; // URL del servidor backend

// Obtener todas las experiencias
export const getExperiencias = async () => {
  try {
    const response = await axios.get(`${API_URL}/experiencias`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las experiencias:', error);
    return [];
  }
};

// Crear una nueva experiencia
export const createExperiencia = async (experienciaData) => {
  try {
    const response = await axios.post(`${API_URL}/experiencias`, experienciaData);
    return response.data;
  } catch (error) {
    console.error('Error al crear la experiencia:', error);
    return null;
  }
};

// Otros métodos para actualizar, borrar y obtener una experiencia por su id...
