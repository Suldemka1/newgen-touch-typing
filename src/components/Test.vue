<template>
  <div class="wrap test-container" :style="{ fontSize: textSize }">
    <div class="test">
      <span v-for="(letter, index) in text" :key="letter">
        <span
          v-if="index == step && isCorrect == true"
          :style="getCorrectStyles"
          class="letter"
        >
          {{ letter }}
        </span>
        <span
          v-else-if="index === step && isCorrect === false"
          :style="getUncorrectStyles"
          class="letter"
        >
          {{ letter }}
        </span>
        <span v-else>{{ letter }}</span>
      </span>
    </div>
  </div>
  <div class="wrap">
    <div class="close-test__button">
      <button @click="restartTest">закончить</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import Settings from "./Settings/Settings.vue";

export default defineComponent({
  components: { Settings },
  methods: {
    ...mapActions({
      fetchText: "fetchText",
      restartTest: "restartTest",
    }),
  },
  computed: {
    ...mapState({
      text: (state) => state.test.text,
      sentences: (state) => state.text.sentences,
      step: (state) => state.test.step,
      isCorrect: (state) => state.test.isCorrect,
    }),
    ...mapGetters({
      textSize: "getTextSize",
      getCorrectStyles: "getCorrectStyles",
      getUncorrectStyles: "getUncorrectStyles",
    }),
  },
  beforeMount() {
    this.fetchText(this.sentences);
  },
  mounted() {},
  updated() {},
});
</script>

<style>
.test-container {
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: start;
}

.test {
  position: relative;
  width: 100%;
  border: 2px solid green;
  border-radius: 10px;
  padding: 40px;
  margin-top: 50px;
}

.letter {
  min-width: 10px;
  max-width: 10px;
  border-radius: 1px;
  text-align: center;
  padding: 2px;
  margin: 2px;
}

.close-test__button {
  margin-top: 30px;
  max-width: 300px;

  margin: 40px 0 0 0;
}
</style>
