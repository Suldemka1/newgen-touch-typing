export interface ITextModuleState {
  sentences: number;

  textSizeNum: string;
  textSize: string;

  isCorrect: boolean;
  correctStyle: ITextStyle;
  uncorrectStyle: ITextStyle;
  currentStyle: ITextStyle;
}

interface ITextStyle {
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
  state: (): ITextModuleState => ({
    sentences: 4,

    textSizeNum: "17",
    textSize: "17px",

    isCorrect: true,

    correctStyle: initialCorrectStyle,
    uncorrectStyle: initialUncorrectStyle,

    currentStyle: initialCorrectStyle,
  }),

  getters: {
    getCorrectStyles(state: ITextModuleState) {
      const correctStyle = state.correctStyle;
      return correctStyle;
    },

    getUncorrectStyles(state: ITextModuleState) {
      const uncorrectStyle = state.uncorrectStyle;
      return uncorrectStyle;
    },

    getTextSize(state: ITextModuleState) {
      return String().concat(state.textSize, "px");
    },
  },

  mutations: {
    setSentencesCount(state: ITextModuleState, count: number) {
      state.sentences = Number(count);
    },
    setTextSize(state: ITextModuleState, size: string) {
      console.log(size);
      state.textSize = size;
    },
    setCorrectStyle(state: ITextModuleState, color: string) {
      state.correctStyle.background = color;
      state.correctStyle.border = `${color} solid 2px`;
    },
    setUncorrectStyle(state: ITextModuleState, color: string) {
      state.uncorrectStyle.background = color;
      state.uncorrectStyle.border = `${color} solid 2px`;
    },
  },

  actions: {},
  namespace: true,
};

export default textOptions;
