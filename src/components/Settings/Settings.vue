<template>
  <div class="settings__container" v-if="!isStarted">
    <toggle-button></toggle-button>

    <div class="settings__list" v-if="isSettingsOpen">
      <user-options></user-options>
      <text-options></text-options>
      <mods></mods>
      <button @click="saveSettings">Сохранить настройки</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Mods from "./Mods.vue";
import TextOptions from "./TextOptions.vue";
import ToggleButton from "./ToggleButton.vue";
import UserOptions from "./UserOptions.vue";
export default {
  components: { TextOptions, ToggleButton, UserOptions, Mods },
  name: "settings",
  computed: {
    ...mapState({
      isSettingsOpen: (state) => state.settings.isSettingsOpen,
      nickname: (state) => state.user.nickname,
      correctColor: (state) => state.text.correctStyle,
      uncorrectColor: (state) => state.text.uncorrectStyle,
      textSize: (state) => state.text.textSize,
      isStarted: (state) => state.test.isStarted,
    }),
  },
  methods: {
    saveSettings() {
      this.$cookies.set("correctStyles", this.correctColor);
      this.$cookies.set("uncorrectStyles", this.uncorrectColor);
      this.$cookies.set("nickname", this.nickname);
      this.$cookies.set("textSize", this.textSize);
    },
  },
};
</script>

<style>
.settings__container {
  width: 500px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  z-index: 2;
}

.settings__list {
  height: -webkit-fill-available;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;

  background: var(--white);
  padding: 80px 40px 20px 40px;
}
</style>
