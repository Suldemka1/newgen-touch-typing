import { createStore } from "vuex";
import { IState } from "@/models/store.model";
import settings from "./Settings/settings";
import textOptions from "./Settings/text";
import testModule from "./Test/test";
import user from "./Settings/user";
import stats from "./Stats/stats";
import results from "./Results/results";

const store = createStore<IState>({
  modules: {
    results: results,
    settings: settings,
    user: user,
    text: textOptions,
    test: testModule,
    stats: stats,
  },
});

export default store;
