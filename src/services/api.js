// api.js
import axios from 'axios';

// Crear una instancia de Axios con la URL base de tu API
const api = axios.create({
  baseURL: 'http://localhost/apiClash/api.php',  // Ajusta esta URL según tu API
  headers: {
    'Content-Type': 'application/json',  // Tipo de contenido JSON
    'Accept': 'application/json'         // Aceptar respuestas en formato JSON
  }
});

export default api;
