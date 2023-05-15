<template>
  <div class="statistics">
    <span>Время {{ time }}</span>
    <span>Ошибок {{ uncorrectPressCount }}</span>
    <span>APM {{ speed }}</span>
    <span>Точность {{ accuracity }}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "Statistics",

  computed: {
    ...mapState({
      time: (state) => state.stats.time,
      uncorrectPressCount: (state) => state.stats.uncorrectPressCount,
      // speed: (state) => state.stats.speed,
      // accuracity: (state) => state.stats.accuracity,
    }),
    ...mapGetters({
      speed: "getSpeed",
      accuracity: "getAccuracity",
    }),
  },

  methods: {
    ...mapMutations({}),

    ...mapActions({
    }),
  },

  mounted() {},
  updated() {},
};
</script>

<style>
.statistics {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.statistics span {
  /* width: 100%; */
  white-space: nowrap;

  color: white;
  font-size: 22px;
  font-weight: 600;
}
</style>
