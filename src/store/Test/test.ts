import { AppContext } from "vue";
import { ActionContext } from "vuex";
import { Context } from "..";

export interface State {}
const exceptions = ["Enter", "CapsLock", "Shift", "Tab"];
export interface ITest {
  text: Array<string>;
  step: number;

  isCorrect: boolean;

  isStarted: boolean;

  timer: number;

  time: number;
  speed: number;
  uncorrectPressCount: number;
  accuracity: number;
}

const testModule = {
  state: (): ITest => ({
    text: ["a", "s"],
    step: 0,

    isCorrect: true,

    isStarted: false,

    timer: 0,

    time: 0,
    speed: 0,
    uncorrectPressCount: 0,
    accuracity: 0,
  }),
  getters: {
    getText: (state: ITest) => {
      return state.text;
    },
    getTestStatus: (state: ITest) => {
      return state.isStarted;
    },
  },
  mutations: {
    setText: (state: ITest, text: Array<string>) => {
      state.text = text;
    },
    setTimer(state: ITest, timer: number) {
      state.timer = timer;
    },
    setTime(state: ITest, time: number) {
      state.time += 1;
    },

    setIsStarted(state: ITest, status: boolean) {
      state.isStarted = true;
    },
  },
  actions: {
    startTest(context: Context) {
      context.commit(
        "setTimer",
        setInterval(() => {
          context.commit("setTime");
        }, 1000)
      );
    },
    endTest(context: Context) {
      if (context.state.step === context.state.text.length) {
        clearInterval(context.state.timer);
      }
    },

    async fetchText(context: Context, sentences: number) {
      const apiText = await fetch(
        `https://fish-text.ru/get?type=sentences&format=json&number=${sentences}`
      )
        .then((res) => res.json())
        .then((res) => res.text)
        .then((res) => res.split(""));

      await context.commit("setText", apiText);
    },

    handlePress(context: Context, e: KeyboardEvent) {
      if (!exceptions.includes(e.key)) {
        if (context.state.text[context.state.step] == e.key) {
          context.state.isCorrect = true;
          context.state.step += 1;
        } else {
          context.state.uncorrectPressCount += 1;
          context.state.isCorrect = false;
        }
      }
    },
  },

  namespace: "test",
};

export default testModule;
