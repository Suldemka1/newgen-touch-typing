<template>
  <div class="toggle">
    <div v-if="isSettingsOpen">
      <h2 @click="setIsSettingsOpen">Настройки</h2>
      <img src="/icons/close.png" width="40" @click="setIsSettingsOpen" />
    </div>
    <div v-else>
      <img src="/icons/options.png" width="40" @click="setIsSettingsOpen" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isSettingsOpen: (state) => state.settings.isSettingsOpen,
    }),
  },
  methods: {
    ...mapMutations({
      setIsSettingsOpen: "setIsSettingsOpen",
    }),
  },
};
</script>

<style>
.toggle div {
  position: absolute;
  top: 0;

  width: calc(100% - 80px);
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;

  z-index: 4;

  margin: 20px 40px 0 40px;
  cursor: pointer;
}

.toggle div h2 {
  user-select: none;
  width: 100%;
}
</style>
