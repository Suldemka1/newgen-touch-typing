import { IStatsModule, StatsContext } from "@/models/store";

const stats = {
  state: (): IStatsModule => ({
    time: 0,
    speed: 0,
    uncorrectPressCount: 0,
    accuracity: 100,
  }),
  getters: {
    getSpeed(state: IStatsModule) {
      return String(state.speed);
    },
    getAccuracity(state: IStatsModule) {
      return String().concat(String(state.accuracity), "%");
    },
  },
  mutations: {
    setTime(state: IStatsModule, time: number) {
      state.time += 1;
    },
    setSpeed(state: IStatsModule, speed: number) {
      state.speed = speed;
    },

    setAccuracity(state: IStatsModule, acc: number | string) {
      state.accuracity = acc;
    },

    addUnPress(state: IStatsModule) {
      state.uncorrectPressCount += 1;
    },
    setStatsToZero(state: IStatsModule) {
      state.accuracity = 0;
      state.speed = 0;
      state.time = 0;
      state.uncorrectPressCount = 0;
    },
  },
  actions: {
    countAccuracity(context: StatsContext) {
      const accuracity = (
        (context.rootState.test.text.length -
          context.state.uncorrectPressCount) /
        (context.rootState.test.text.length / 100)
      ).toFixed(2);

      context.commit("setAccuracity", accuracity);
    },

    countSpeed(context: StatsContext) {
      const speed = (
        ((context.rootState.test.step + context.state.uncorrectPressCount) /
          context.rootState.test.timer) *
        60
      ).toFixed();
      context.commit("setSpeed", speed);
    },
  },
  modules: {},
  namespace: true,
};

export default stats;
