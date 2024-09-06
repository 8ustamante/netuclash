<template>
  <header>
    <NavBar />
  </header>

  <SectionContainer>
    <div>
      <Title titulo="¿Cual es tu ayuntamiento?"></Title>
      <button type="button" class="btn btn-warning me-3" @click="selectComponent('AldeaPrincipal')">Ayuntamiento</button>
      <button type="button" class="btn btn-outline-warning" @click="selectComponent('BlankPage')">Aldea Nocturna</button>
    </div>
  </SectionContainer>

  <SectionContainer>
    <DynamicComponent :currentComponent="currentComponent" />
  </SectionContainer>
</template>

<script>
import { defineComponent, markRaw, ref } from 'vue'; 
import NavBar from "../components/NavBar.vue";
import SectionContainer from "../components/SectionContainer.vue";
import DynamicComponent from '../components/DynamicComponent.vue';
import BlankPage from '../components/BlankPage.vue';
import AldeaPrincipal from '../components/AldeaPrincipal.vue';
import Title from '../components/Title.vue';

export default defineComponent({
  components: {
    DynamicComponent, 
    NavBar: markRaw(NavBar),
    SectionContainer: markRaw(SectionContainer),
    BlankPage: markRaw(BlankPage),
    AldeaPrincipal: markRaw(AldeaPrincipal),
    Title: markRaw(Title),
  },
  
  setup(_, { emit }) {

    const currentComponent = ref(AldeaPrincipal);

    const selectComponent = (componentName) => {
      const componentMap = {
        BlankPage: BlankPage,
        AldeaPrincipal: AldeaPrincipal,
      };
      currentComponent.value = componentMap[componentName] || BlankPage;
      emit('component-selected', componentName); 
    };

    return {
      currentComponent,
      selectComponent
    };
  }
});
</script>