import { createStore } from "vuex";

export default createStore({
  state: {
    login: localStorage.getItem("token") ? true : false,
    userToken: null,
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
    setUserToken(state, payload) {
      state.currentUser = payload;
    },
  },
  actions: {
    setLogin({ commit }, payload) {
      commit("setLogin", payload);
    },
    //set current user
    setUserToken({ commit }, payload) {
      console.log("payload: ", payload);
      if (payload !== null) {
        commit("setUserToken", true);
      }
      commit("setUserToken", payload);
    },
  },
  modules: {},
});
