<!-- 404.vue -->
<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-[#15267f]">404</h1>
        <p class="mt-4 text-xl text-gray-700">Lo sentimos, la página que buscas no existe.</p>
        <router-link to="/" class="mt-6 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Volver a la página principal
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style scoped>
  /* Estilos opcionales adicionales pueden ir aquí */
  </style>