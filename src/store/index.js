import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload;
    }
  },
  actions: {
    async getMovies({ commit }) {
      try {
        const response = await api.get("/movie");
        commit("setMovies", response.data);
      } catch {
        commit("setMovies", []);
      }
    }
  },
  modules: {}
});
