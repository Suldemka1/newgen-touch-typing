import { IResult, IResultModule, ResultContext } from "@/models/store";

const results = {
  state: (): IResultModule => ({
    results: [],

    result: {
      nickname: "",
      time: 0,
      misktakes: 0,
      speed: 0,
      accuracity: 0,
    },
  }),
  getters: {
    getResults(state: IResultModule) {
      return state.results.filter((item) => item.time != 0);
    },
  },
  mutations: {
    setResult(state: IResultModule, result: IResult) {
      state.result = result;
      // state.results = [...state.results, state.result];
    },
    setResults(state: IResultModule) {
      state.results = [...state.results, state.result];
    },
    setResultsFromCookie(state: IResultModule, results: IResult[]) {
      state.results = results;
    },
  },
  actions: {},
};

export default results;
