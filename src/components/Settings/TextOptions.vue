<template>
  <div class="options">
    <div class="color-options">
      <h2 class="color-options-summary">Настройки цвета</h2>
      <div class="option color">
        <h3>Цвет текущего символа</h3>
        <input
          type="color"
          :value="correctStyle.background"
          @input="(event) => setCorrectStyle(event.target.value)"
        />
      </div>

      <div class="option color">
        <h3>Цвет при ошибке</h3>
        <input
          type="color"
          :value="uncorrectStyle.background"
          @input="(event) => setUncorrectStyle(event.target.value)"
        />
      </div>
    </div>

    <div class="color-options">
      <h2>Настройки текста</h2>

      <div class="option">
        <h3>Количество предложений</h3>

        <input
          type="number"
          inputmode="numeric"
          min="1"
          max="10"
          :value="sentences"
          @input="(event) => setSentencesCount(event.target.value)"
        />
      </div>

      <div class="option">
        <h3>Размер текста</h3>
        <select
          v-model="textSize"
          @change="
            (event) =>
              setTextSize(fontSizes[event.target.options.selectedIndex])
          "
        >
          <option v-for="i of fontSizes" :key="i" :value="i">
            {{ i }}px
          </option>
        </select>
      </div>

      <button @click="() => fetchText(this.sentences)">
        Сгенерировать новый текст
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "text-options",

  data() {
    return {
      fontSizes: ["17", "19", "21", "23", "25", "27", "29", "31"],
    };
  },

  computed: {
    ...mapState({
      correctStyle: (state) => state.text.correctStyle,
      uncorrectStyle: (state) => state.text.uncorrectStyle,
      textSize: (state) => state.text.textSize,
      text: (state) => state.test.text,
      sentences: (state) => state.text.sentences,
    }),
    ...mapGetters({
      getSentencesCount: "getSentencesCount",
    }),
  },
  methods: {
    ...mapMutations({
      setSentencesCount: "setSentencesCount",
      setTextSize: "setTextSize",
      setCorrectStyle: "setCorrectStyle",
      setUncorrectStyle: "setUncorrectStyle",
    }),

    ...mapActions({
      fetchText: "fetchText",
    }),
  },

  updated() {
    // this.fetchText(this.sentences);
  },
};
</script>

<style>
.options {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.color-options-summary {
  cursor: pointer;
}

.color-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  border: green 2px solid;

  padding: 10px;
}

.option {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}
</style>
