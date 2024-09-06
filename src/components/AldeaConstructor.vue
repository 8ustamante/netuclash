<template>
    <div>
      <Title titulo="¿Cual es tu ths de contrustor?"></Title>
      <SliderAyunta />
    </div>
  </template>
  
  <script>
  import SliderAyunta from "./SliderAyunta.vue";
  import Title from "./Title.vue";
  export default {
    components: {
      SliderAyunta,
      Title
    },
  };
  </script>
  