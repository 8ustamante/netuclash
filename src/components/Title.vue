<template>
  <p class="fs-6 font-bold text-white">{{ titulo }}</p>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para este componente */
</style>
