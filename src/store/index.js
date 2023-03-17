import { createStore } from "vuex";

export default createStore({
  state: {
    login: false,
    currentUser: null,
  },
  getters: {
    getLogin(state) {
      return state.login;
    },
  },
  mutations: {
    setLogin(state, payload) {
      state.login = payload;
    },
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
  },
  actions: {
    setLogin({ commit }, payload) {
      commit("setLogin", payload);
    },
    //set current user
    setCurrentUser({ commit }, payload) {
      console.log("payload: ", payload);
      commit("setCurrentUser", payload);
    },
  },
  modules: {},
});
