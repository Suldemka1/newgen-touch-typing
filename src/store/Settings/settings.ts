import { ISettingsModule } from "@/models/store.model";

const settings = {
  state: (): ISettingsModule => ({
    isResultsOpen: true,
    isSettingsOpen: true,
  }),
  getters: {
    getisSettingsOpenState(state: ISettingsModule) {
      return state.isSettingsOpen;
    },
  },
  mutations: {
    setIsResultsOpen(state: ISettingsModule) {
      state.isResultsOpen = !state.isResultsOpen;
    },
    setIsSettingsOpen(state: ISettingsModule) {
      state.isSettingsOpen = !state.isSettingsOpen;
    },
  },
  actions: {},
  modules: {},
  namespace: true,
};

export default settings;
