<template>
  <LayoutGuest>
    <SectionContainer>
      <div>
        <button
          type="button"
          class="btn btn-warning me-3 pulse-shrink"
          @click="selectComponent('AldeaPrincipal')"
        >
          Ayuntamiento
        </button>
        <button
          type="button"
          class="btn btn-outline-warning"
          @click="selectComponent('BlankPage')"
        >
          Aldea Nocturna
        </button>
      </div>
    </SectionContainer>

    <SectionContainer>
      <DynamicComponent :currentComponent="currentComponent" />
    </SectionContainer>
  </LayoutGuest>
</template>

<script>
import { defineComponent, markRaw, ref } from "vue";
import SectionContainer from "../components/SectionContainer.vue";
import DynamicComponent from "../components/DynamicComponent.vue";
import AldeaConstructor from "../components/AldeaConstructor.vue";
import AldeaPrincipal from "../components/AldeaPrincipal.vue";
import LayoutGuest from "../layouts/LayoutGuest.vue";

export default defineComponent({
  components: {
    DynamicComponent,
    SectionContainer: markRaw(SectionContainer),
    AldeaConstructor: markRaw(AldeaConstructor),
    AldeaPrincipal: markRaw(AldeaPrincipal),
    LayoutGuest
  },

  setup(_, { emit }) {
    const currentComponent = ref(AldeaPrincipal);

    const selectComponent = (componentName) => {
      const componentMap = {
        AldeaConstructor: AldeaConstructor,
        AldeaPrincipal: AldeaPrincipal,
      };
      currentComponent.value = componentMap[componentName] || AldeaConstructor;
      emit("component-selected", componentName);
    };

    return {
      currentComponent,
      selectComponent,
    };
  },
});
</script>
