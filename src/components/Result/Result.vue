<template>
  <div class="result__container" v-if="!isStarted">
    <div class="toggle result__toggle">
      <div v-if="!isResultsOpen">
        <img src="/icons/results.png" width="40" @click="setIsResultsOpen" />
      </div>
      <div v-else>
        <h2 @click="setIsResultsOpen">Результаты</h2>
        <img src="/icons/close.png" width="40" @click="setIsResultsOpen" />
      </div>
    </div>

    <div class="result__list__wrap" v-if="isResultsOpen">
      <div class="result__list">
        <result-card
          v-for="item in getResults"
          :key="item.accuracity"
          :nickname="item.nickname"
          :time="item.time"
          :mistakes="item.mistakes"
          :speed="item.speed"

          :accuracity="item.accuracity"
        ></result-card>
      </div>

      <button>Очистить</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import ResultCard from "../ui/ResultCard.vue";
export default {
  components: { ResultCard },
  computed: {
    ...mapState({
      isResultsOpen: (state) => state.settings.isResultsOpen,
      isStarted: (state) => state.test.isStarted,
      results: (state) => state.results.results,
    }),

    ...mapGetters({
      getResults: "getResults"
    })
  },

  methods: {
    ...mapMutations({
      setIsResultsOpen: "setIsResultsOpen",
    }),
  },
};
</script>

<style>
.result__toggle div {
  justify-content: start;
}

.result__container {
  width: 500px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  z-index: 4;
}

.result__list__wrap {
  height: 100%;
  background: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 80px 40px 20px 40px;
  overflow: hidden;
}

.result__list {
  height: 95%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 28px;

  border: green 2px solid;
  padding: 10px;

  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
