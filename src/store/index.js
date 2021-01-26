import { Math } from 'core-js';
import { createStore } from 'vuex';
import state from './state';
export default createStore({
  state,
  mutations: {
    ADD_DATA(state, value) {
      value.id = Math.floor(Math.random() * 1000000000);
      state.movies.unshift(value);
    },
    EDIT_DATA(state, value) {
      const movieIndex = state.movies.findIndex(
        movie => movie.id * 1 === value.id,
      );
      state.movies[movieIndex] = { ...value };
    },
    DELETE_DATA(state, value) {
      state.movies = state.movies.filter(movie => movie.id !== value);
    },
  },
  actions: {
    addData({ state, commit }, value) {
      if (state.movies) {
        commit('ADD_DATA', value);
      }
    },
    deleteData({ state, commit }, value) {
      if (state.movies) {
        commit('DELETE_DATA', value);
      }
    },
    editData({ state, commit }, value) {
      if (state.movies) {
        commit('EDIT_DATA', value);
      }
    },
  },
  getters: {
    movieListLength: state => {
      return state.movies.length;
    },

    getMovieById: state => id => {
      return state.movies.find(movie => movie.id === id * 1);
    },
    getLastMovie: state => state.movies[0],
  },

  modules: {},
});
