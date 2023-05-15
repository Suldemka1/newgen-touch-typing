<template>
  <div v-if="!isStarted" class="modal">
    <div class="modal__message">
      <h1>Для начала тестирования нажмите ENTER</h1>
    </div>

    <div class="modal__fade"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Settings from "./Settings/Settings.vue";
export default {
  components: { Settings },
  computed: {
    ...mapState({
      isStarted: (state) => state.test.isStarted,
    }),
  },
};
</script>

<style>
.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__message {
  position: relative;
  color: white;
  z-index: 1;
  
}

.modal__fade {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 0;
}
</style>
