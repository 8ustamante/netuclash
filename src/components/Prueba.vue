<template>
  <div>
    <h1>Ayuntamientos</h1>
    <div v-if="loading">Cargando...</div>
    <div v-else>
      <div
        v-for="ayuntamiento in ayuntamientos"
        :key="ayuntamiento.id"
        class="ayuntamiento"
      >
        <img :src="ayuntamiento.url_imagen" alt="Ayuntamiento" />
        <p>ID: {{ ayuntamiento.id }}</p>
        <p>Tipo: {{ ayuntamiento.tipo_aldea }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ayuntamientos: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchAyuntamientos();
  },
  methods: {
    async fetchAyuntamientos() {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/8ustamante/pruebas_json/main/ths.json"
        );
        this.ayuntamientos = response.data.ayuntamientos;
      } catch (error) {
        console.error("Error fetching ayuntamientos:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.ayuntamiento {
  margin: 20px 0;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
