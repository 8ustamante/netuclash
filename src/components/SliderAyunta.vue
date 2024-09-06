<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-else>
      <div class="scroll-container">
        <button class="btn btn-primary scroll-button left" @click="scrollLeft">◀</button>
        <div ref="scrollContent" class="scroll-content">
          <div
            v-for="choza in aldeas"
            :key="choza.id_chozas"
            class="card" style="background-color:#260A62;"
          >
            <RouterLink
              :to="`/${choza.id_chozas}`"
              class="stretched-link"
            >
              <img
                :src="choza.ths_img"
                alt="Imagen del Ayuntamiento"
                class="img-fluid mx-auto d-block"
              />
            </RouterLink>
          </div>
        </div>
        <button class="btn btn-primary scroll-button right" @click="scrollRight">▶</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

// Tu componente Vue.js

import { getAldeasByTipo } from '../services/ServiceApi';

export default {
  data() {
    return {
      aldeas: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchAldeas();
  },
  methods: {
    async fetchAldeas() {
      try {
        const aldeas = await getAldeasByTipo(1);  // Llamada a la función con el id_tipo_aldea = 1
        this.aldeas = aldeas;  // Asigna los datos a la variable aldeas
      } catch (error) {
        console.error('Error fetching aldeas:', error);
      } finally {
        this.loading = false;
      }
    },
    scrollLeft() {
      this.$refs.scrollContent.scrollBy({ left: -200, behavior: 'smooth' });
    },
    scrollRight() {
      this.$refs.scrollContent.scrollBy({ left: 200, behavior: 'smooth' });
    },
  },
};

</script>

<style scoped>
.scroll-container {
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.scroll-content {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  flex: 1;
  scroll-snap-type: x mandatory;
}

.scroll-content::-webkit-scrollbar {
  display: none;
}

.card {
  flex: 0 0 auto;
  margin: 5px;
  width: 180px;
}

.card img {
  max-width: 100%;
  height: 100px;
  padding: 1rem;
  object-fit: cover;
}

.scroll-button {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.scroll-button.left {
  left: 0;
}

.scroll-button.right {
  right: 0;
}
</style>
