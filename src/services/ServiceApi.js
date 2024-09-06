// ServiceApi.js

import api from './api'; // Importa la instancia de Axios

// Función para obtener aldeas por id_tipo_aldea
export const getAldeasByTipo = async (idTipoAldea) => {
  try {
    const response = await api.get(`?id_tipo_aldea=${encodeURIComponent(idTipoAldea)}`);
    return response.data;  // Retorna los datos de las aldeas
  } catch (error) {
    if (error.response) {
      throw error; // Lanza el error para que lo maneje el store
    } else {
      throw new Error('Error de red o de servidor'); // Manejar errores de red
    }
  }
};
