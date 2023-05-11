import { Context } from "..";

interface ISettings {
  isOpen: boolean;
}

const settings = {
  state: (): ISettings => ({
    isOpen: true,
  }),
  getters: {
    getIsOpenState(state: ISettings) {
      return state.isOpen;
    },
  },
  mutations: {
    setIsOpen(state: ISettings) {
      state.isOpen = !state.isOpen;
    },
  },
  actions: {},
  modules: {},
  namespace: true,
};

export default settings;
