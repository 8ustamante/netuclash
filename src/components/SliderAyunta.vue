<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-else>
      <div class="scroll-container">
        <button class="btn btn-primary scroll-button left" @click="scrollLeft">◀</button>
        <div ref="scrollContent" class="scroll-content">
          <div
            v-for="choza in aldeas"
            :key="choza.id_choza"
            class="card"
          >
            <RouterLink
              :to="`/${choza.id_choza}`"
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
        const response = await axios.get(
          'https://raw.githubusercontent.com/8ustamante/pruebas_json/main/ths.json'
        );
        this.aldeas = response.data.chozas;
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
  height: 120px;
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
