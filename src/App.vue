<template>
  <app-header></app-header>
  <test></test>
  <start-modal></start-modal>
</template>

<script>
import Test from "./components/Test.vue";
import Statistics from "./components/Statistics.vue";
import StartModal from "./components/StartModal.vue";
import AppHeader from "./components/Header.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  components: { Test, Statistics, StartModal, AppHeader },

  computed: {
    ...mapState({
      isStarted: (state) => state.test.isStarted,
    }),
  },

  methods: {
    ...mapActions({
      handlePress: "handlePress",
      startTest: "startTest",
    }),
    ...mapMutations({
      setIsStarted: "setIsStarted",
    }),
  },
  created() {
    //get cookies and set styles is exists
    const correctStylesFromCookie = this.$cookies.get("correctStyles");
    const uncorrectStylesFromCookie = this.$cookies.get("uncorrectStyles");

    if (correctStylesFromCookie != undefined) {
      this.$store.commit("setCorrectStyle", correctStylesFromCookie.background);
      this.$store.commit(
        "setUncorrectStyle",
        uncorrectStylesFromCookie.background
      );
    } else {
      this.$store.commit("setCorrectStyle", "green");
    }
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (this.isStarted === true) {
        this.handlePress(e);
      } else if (!this.isStarted && e.key === "Enter") {
        this.$store.commit("setIsStarted", true);
        this.setIsStarted();
        this.startTest();
      }
    });
  },
  updated() {
    document.removeEventListener("keydown", () => {
      console.log("event listeners are removed");
    });

    
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrap {
  max-width: 1240px;
  margin: auto;
}
</style>
