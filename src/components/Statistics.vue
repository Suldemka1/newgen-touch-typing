<template>
  <div class="statistics">
    <span>Время {{ time }}</span>
    <span>Допущено ошибок {{ uncorrectPressCount }}</span>
    <span>APM {{ speed }}</span>
    <span>Точность {{ accuracity }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Statistics",

  computed: {
    ...mapState({
      time: (state) => state.test.time,
      uncorrectPressCount: (state) => state.test.uncorrectPressCount,
      speed: (state) => state.test.speed,
      accuracity: (state) => state.test.accuracity,
    }),
  },

  mounted() {
    console.log("statistics");
    console.log(this.time);
  },
};
</script>

<style>
.statistics {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
}

.statistics span {
  width: fit-content;
  white-space: nowrap;
  
  color: white;
  font-size: 22px;
  font-weight: 600;
}
</style>
