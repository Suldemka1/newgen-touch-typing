<template>
  {{ text[0] }}
  <div class="options">
    <details>
      <summary class="color-options-summary">Настройки цвета</summary>
      <div class="color-options">
        <div class="option color">
          <h4>Цвет текущего символа</h4>
          <input
            type="color"
            @input="(event) => setCorrectStyle(event.target.value)"
          />
        </div>

        <div class="option color">
          <h4>Цвет при ошибке</h4>
          <input
            type="color"
            @input="(event) => setUncorrectStyle(event.target.value)"
          />
        </div>
      </div>
    </details>

    <details>
      <summary>Настройки текста</summary>
      <div>
        <div>
          <input
            type="number"
            inputmode="numeric"
            min="1"
            max="10"
            :value="sentences"
            @input="(event) => setSentencesCount(event.target.value)"
          />
          <button @click="() => fetchText(10)">
            Сгенерировать новый текст
          </button>
        </div>

        <div class="option select">
          <h2 :style="{ fontSize: $store.getters.getTextSize }">
            Размер текста
          </h2>
          <select :textSize="textSize" @change="setTextSize(e)">
            <option v-for="i of fontSizes" :key="i" v-bind:value="{ i }">
              {{ i }}
            </option>
          </select>
        </div>
      </div>
    </details>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "text-options",
  data() {
    return {
      fontSizes: ["17", "19", "21", "23", "25", "27", "29", "31"],
      textSize: 17,
    };
  },
  computed: {
    ...mapState({
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
      fetchText: "fetchText",
    }),
  },

  updated() {
  },
};
</script>

<style>
.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.select {
}

.select select {
  width: 70px;
  height: 30px;
  padding: 5px;
}
</style>
