import { ITextModule } from "@/models/store";

export interface ITextStyle {
  background: string;
  border: string;
  color: string;
}

// initial state for correctJSON
const initialCorrectStyle: ITextStyle = {
  background: "green",
  border: "green solid 2px",
  color: "white",
};

// initial state for uncorrectJSON
const initialUncorrectStyle: ITextStyle = {
  background: "red",
  border: "red solid 2px",
  color: "black",
};

const textOptions = {
  state: (): ITextModule => ({
    sentences: 3,
    textSize: "15",

    isCorrect: true,

    correctStyle: initialCorrectStyle,
    uncorrectStyle: initialUncorrectStyle,
  }),

  getters: {
    getCorrectStyles(state: ITextModule) {
      const correctStyle = state.correctStyle;
      return correctStyle;
    },

    getUncorrectStyles(state: ITextModule) {
      const uncorrectStyle = state.uncorrectStyle;
      return uncorrectStyle;
    },

    getTextSize(state: ITextModule) {
      return String().concat(state.textSize, "px");
    },
  },

  mutations: {
    setSentencesCount(state: ITextModule, count: number) {
      state.sentences = Number(count);
    },
    setTextSize(state: ITextModule, size: string) {
      console.log(size);
      state.textSize = size;
    },
    setCorrectStyle(state: ITextModule, color: string) {
      state.correctStyle.background = color;
      state.correctStyle.border = `${color} solid 2px`;
    },
    setUncorrectStyle(state: ITextModule, color: string) {
      state.uncorrectStyle.background = color;
      state.uncorrectStyle.border = `${color} solid 2px`;
    },
  },

  actions: {},
  namespace: true,
};

export default textOptions;
