<template>
  <app-header></app-header>
  <result></result>
  <test></test>
  <settings></settings>
  <start-modal></start-modal>
  {{ getResults }}
</template>

<script>
import Test from "./components/Test.vue";
import Statistics from "./components/Statistics.vue";
import StartModal from "./components/StartModal.vue";
import AppHeader from "./components/Header.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Settings from "./components/Settings/Settings.vue";
import Result from "./components/Result/Result.vue";

export default {
  components: { Test, Statistics, StartModal, AppHeader, Settings, Result },

  computed: {
    ...mapState({
      isStarted: (state) => state.test.isStarted,
      step: (state) => state.test.step,

      nickname: (state) => state.user.nickname,
      time: (state) => state.stats.time,
      uncorrectPressCount: (state) => state.stats.uncorrectPressCount,
      speed: (state) => state.stats.speed,
      accuracity: (state) => state.stats.accuracity,

      result: (state) => state.results.result,
      results: (state) => state.results.results,
    }),

    ...mapGetters({
      getResults: "getResults",
    }),
  },

  methods: {
    ...mapActions({
      handlePress: "handlePress",
      startTest: "startTest",
      endTest: "endTest",
    }),
    ...mapMutations({
      setIsStarted: "setIsStarted",
      setCorrectStyle: "setCorrectStyle",
      setUncorrectStyle: "setUncorrectStyle",
      setNickname: "setNickname",
      setTextSize: "setTextSize",
      deleteByKey: "deleteByKey",
      setResults: "setResults",
      setResult: "setResult",
      setResultsFromCookie: "setResultsFromCookie",
    }),

    setup() {
      //get cookies and set styles if exists
      const resultsFromCookie = this.$cookies.get("results");
      const correctStylesFromCookie = this.$cookies.get("correctStyles");
      const uncorrectStylesFromCookie = this.$cookies.get("uncorrectStyles");
      const nicknameFromCookie = this.$cookies.get("nickname");
      const textSizeFromCookie = this.$cookies.get("textSize");

      resultsFromCookie ? this.setResultsFromCookie(resultsFromCookie) : null;

      correctStylesFromCookie
        ? this.setCorrectStyle(correctStylesFromCookie.background)
        : this.setCorrectStyle("green");

      uncorrectStylesFromCookie
        ? this.setUncorrectStyle(uncorrectStylesFromCookie.background)
        : this.setUncorrectStyle("red");

      nicknameFromCookie
        ? this.setNickname(nicknameFromCookie)
        : this.setNickname("John Doe");

      textSizeFromCookie
        ? this.setTextSize(textSizeFromCookie)
        : this.setTextSize("17");
    },

    saveResults() {
      const newResult = {
        nickname: this.nickname,
        time: this.time,
        mistakes: this.uncorrectPressCount,
        speed: this.speed,
        accuracity: this.accuracity,
      };

      this.setResult(newResult);
      this.setResults();
    },
  },
  created() {
    this.setup();
    console.log(this.$cookies.get("results"));
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (this.isStarted) {
        this.handlePress(e);
      } else if (!this.isStarted && e.key === "Enter") {
        this.setIsStarted(true);
        this.startTest(() => {
          this.saveResults();
          this.$cookies.set("results", this.results);
        });
      }
    });
  },
  updated() {
    document.removeEventListener("keydown", () => {
      console.log("event listeners are removed");
    });
    console.log("event listeners are removed");
  },
};
</script>

<style>
:root {
  --primary-color: green;
  --secondary-color: red;
  --black: black;
  --white: white;

  --default-indent: 4px;
  --desktop: 1240px;

  --default-fontsize: 21px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

#app {
  height: -webkit-fill-available;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrap {
  max-width: var(--desktop);
  margin: auto;
}

header {
  background: var(--primary-color);
}

summary {
  user-select: none;
  cursor: pointer;
}

button {
  width: 100%;
  background: var(--primary-color);
  color: var(--white);
  border-radius: 5px;
  border: none;
  font-size: var(--default-fontsize);
  font-weight: 600;
  text-align: center;
  padding: var(--default-indent);
  outline: none;
  cursor: pointer;
}

button:active {
  background: rgb(6, 54, 6);
}

input {
  width: 100%;
  height: 30px;

  border: 3px solid var(--primary-color);
  border-radius: 5px;
  padding: 0 var(--default-indent);
}

input[type="color"] {
  background: transparent;
  border: none;
  padding: 0;
}

select {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 3px solid var(--primary-color);
}
</style>
