import { createStore } from "vuex";
import settings from "./Settings/settings";
import textOptions, { ITextModuleState } from "./Settings/textOptionsModule";
import testModule, { ITest } from "./Test/test";
import { ActionContext } from "vuex";
import user, { IUser } from "./Settings/user";

export type Context = ActionContext<ITest, State>;

export interface State {
  settings: any;
  user: IUser;
  text: ITextModuleState;
  test: ITest;
}

const store = createStore<State>({
  modules: {
    settings: settings,
    user: user,
    text: textOptions,
    test: testModule,
  },
});

export default store;
