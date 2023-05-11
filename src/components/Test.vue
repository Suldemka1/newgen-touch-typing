<template>
  <div class="wrap test-container">
    <span v-for="(letter, index) in text" :key="letter">
      <span
        v-if="index == step && isCorrect == true"
        :style="$store.getters.getCorrectStyles"
        class="letter"
      >
        {{ letter }}
      </span>
      <span
        v-else-if="index === step && isCorrect === false"
        :style="$store.getters.getUncorrectStyles"
        class="letter"
      >
        {{ letter }}
      </span>
      <span v-else>{{ letter }}</span>
    </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  methods: {
    ...mapActions({
      fetchText: "fetchText",
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
      // text: "getText",
    }),
  },
  beforeMount() {
    this.fetchText(this.sentences);
  },
  mounted() {
    // this.fetchText(this.sentences);
  },
  updated() {
    // this.fetchText(this.sentences);
  },
});
</script>

<style>
.test-container {
  width: 100%;
  font-size: 24px;
  font-weight: 500;
}

.letter {
  min-width: 10px;
  max-width: 10px;
  border-radius: 1px;
  text-align: center;
  padding: 2px;
  margin: 2px;
}
</style>
