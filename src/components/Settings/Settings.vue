<template>
  <div class="settings-container">
    <toggle-button></toggle-button>
    <div v-if="$store.state.settings.isOpen">
      <div class="settings">
        <user-options></user-options>
        <text-options></text-options>

        <div class="save-options" @click="saveSettings">
          Сохранить настройки
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TextOptions from "./TextOptions.vue";
import ToggleButton from "./ToggleButton.vue";
import UserOptions from './UserOptions.vue';
export default {
  components: { TextOptions, ToggleButton, UserOptions },
  name: "settings",
  created() {},
  computed: {
    ...mapState({
      correctColor: (state) => state.text.correctStyle,
      uncorrectColor: (state) => state.text.uncorrectStyle,
    }),
  },
  methods: {
    setSettings() {
      $store.methods.settings.setIsOpen;
    },

    saveSettings() {
      this.$cookies.set("correctStyles", this.correctColor);
      this.$cookies.set("uncorrectStyles", this.uncorrectColor);
      console.log(this.$cookies.get("correctStyles"));
      console.log(this.$cookies.get("uncorrectStyles"));
    },
  },
};
</script>

<style>
.settings-container {
  width: 400px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  z-index: 1;
}

.settings {
  width: 400px;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  background: rgb(255, 255, 255);
  padding: 80px 40px;

  z-index: 2;
}

.nickname {
  border: 2px rgb(6, 94, 48) solid;
  border-radius: 5px;
  font-size: 17px;
  padding: 6px 12px;

  outline: none;
}

.send-invite {
  font-size: 20px;

  cursor: pointer;
}

.save-options {
  width: 320px;
  position: absolute;
  bottom: 0;
  background: green;
  color: aliceblue;
  border-radius: 5px;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding: 6px;
  margin-bottom: 50px;
  cursor: pointer;
}

.bounce-enter-active {
  animation: bounce 2s;
}
.bounce-leave-active {
  animation: bounce 2s reverse;
}

@keyframes bounce {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(220%);
  }
}
</style>
