import { IUserModule } from "@/models/store";
import { notContains } from "class-validator";

const user = {
  state: (): IUserModule => ({
    nickname: "John Doe",
  }),
  getters: {
    getNickname(state: IUserModule) {
      if (state.nickname[0] != " " && state.nickname) {
        return String().concat("@", state.nickname);
      }
      return "@John Doe";
    },
  },
  mutations: {
    setNickname(state: IUserModule, nickname: string) {
      state.nickname = nickname;
    },
  },

  namespace: true,
};

export default user;
