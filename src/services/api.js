// api.js

import axios from 'axios';

// Crear una instancia de Axios
const api = axios.create({
  baseURL: 'https://spytostatus.wuaze.com/api.php', // Asegúrate de que la URL base sea correcta
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Interceptor para manejar errores
api.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response && error.response.status === 401) {
        // Redirigir a la página de login
        router.push('/'); // Asegúrate de que el router esté correctamente configurado
    }
    return Promise.reject(error);
});

export default api;
