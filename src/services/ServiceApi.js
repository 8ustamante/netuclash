// ServiceApi.js

import api from './api'; // Importar la instancia de Axios

// Función para obtener datos de la API
export const getAldeasByTipo = async (idTipoAldea) => {
  try {
    // Realizar la solicitud GET
    const response = await api.get(`?id_tipo_aldea=${encodeURIComponent(idTipoAldea)}`);
    
    // Retornar los datos obtenidos de la respuesta
    return response.data;
  } catch (error) {
    console.error('Error al consumir la API:', error);
    throw new Error('Error al obtener datos de la API');
  }
};
