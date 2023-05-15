import { ActionContext } from "vuex";
import store from "..";
import { ITestModule, TestContext } from "@/models/store";

const exceptions = [
  "Enter",
  "CapsLock",
  "Shift",
  "Tab",
  "Ctrl",
  "Alt",
  "Backspace",
  "Esc",
  "Numlock"
];

const testModule = {
  state: (): ITestModule => ({
    text: [""],
    step: 0,
    progress: 0,

    timer: 0,

    isCorrect: true,
    isStarted: false,
  }),
  getters: {
    getText: (state: ITestModule) => {
      return state.text;
    },
    getTestStatus: (state: ITestModule) => {
      return state.isStarted;
    },
  },
  mutations: {
    deleteByKey(state: ITestModule, key: number) {
      delete state.text[key];
    },
    setText: (state: ITestModule, text: Array<string>) => {
      state.text = text;
    },

    setIsStarted(state: ITestModule, status: boolean) {
      state.isStarted = status;
    },

    setTimer(state: ITestModule, cb: Function) {
      state.timer = setInterval(cb, 1000);
    },

    setIsCorrect(state: ITestModule, status: boolean) {
      state.isCorrect = status;
    },

    setStep(state: ITestModule) {
      state.step += 1;
    },

    setTestToZero(state: ITestModule) {
      state.step = 0;
      clearInterval(state.timer);
      state.isCorrect = true;
    },
  },
  actions: {
    startTest(context: TestContext, endTestCB: Function) {
      context.commit("setIsStarted", true);
      context.commit("setTimer", () => {
        if (context.state.step !== context.state.text.length)
          context.commit("setTime");
        else {
          context.commit("setIsStarted", false);
          clearInterval(context.state.timer);
          // when test end
          endTestCB();
        }
        context.dispatch("countSpeed");
      });
    },

    restartTest(context: TestContext) {
      context.commit("setIsStarted", false);
      context.commit("setTestToZero");
      context.commit("setStatsToZero");
    },

    async fetchText(context: TestContext, sentences: number) {
      context.commit("setText", "");
      const apiText = await fetch(
        `https://fish-text.ru/get?type=sentences&format=json&number=${sentences}`
      )
        .then((res) => res.json())
        .then((res) => res.text)
        .then((res) => res.split(""));

      context.commit("setText", apiText);
    },

    handlePress(context: TestContext, e: KeyboardEvent) {
      if (!exceptions.includes(e.key)) {
        if (context.state.text[context.state.step] == e.key) {
          context.commit("setIsCorrect", true);

          // можно удалить введенный символ, задумывал сделать соотвествующий режим
          // потом уже стало лень
          // важно удалить символ по текущему step и только потом увеличить step
          // context.commit("deleteByKey", context.state.step);

          context.commit("setStep");
        } else {
          context.commit("setIsCorrect", false);
          context.commit("addUnPress");
        }
      }

      context.dispatch("countAccuracity");
    },
  },

  namespace: "test",
};

export default testModule;
