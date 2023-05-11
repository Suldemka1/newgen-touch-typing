export interface IUser {
  nickname: string;
}

const user = {
  state: (): IUser => ({
    nickname: "John Doe",
  }),
  getters: {
    getNickname(state: IUser) {
      if (state.nickname == "") {
        return state.nickname;
      }
      return String().concat("@", state.nickname);
    },
  },
  mutations: {
    setNickname(state: IUser, nickname: string) {
      state.nickname = nickname;
    },
  },

  namespace: true,
};

export default user;
