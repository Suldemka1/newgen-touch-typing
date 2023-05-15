import { IStatsModule, StatsContext } from "@/models/store.model";

const stats = {
  state: (): IStatsModule => ({
    time: 0,
    speed: 0,
    mistakes: 0,
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
    setTime(state: IStatsModule) {
      state.time += 1;
    },
    setSpeed(state: IStatsModule, speed: number) {
      state.speed = speed;
    },
    setAccuracity(state: IStatsModule, acc: number | string) {
      state.accuracity = acc;
    },
    addMistake(state: IStatsModule) {
      state.mistakes += 1;
    },
    setStatsToZero(state: IStatsModule) {
      state.accuracity = 0;
      state.speed = 0;
      state.time = 0;
      state.mistakes = 0;
    },
  },
  actions: {
    countAccuracity(context: StatsContext) {
      const accuracity = (
        (context.rootState.test.text.length -
          context.state.mistakes) /
        (context.rootState.test.text.length / 100)
      ).toFixed(2);

      context.commit("setAccuracity", accuracity);
    },
  },
  modules: {},
  namespace: true,
};

export default stats;
