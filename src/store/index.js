import { Math } from 'core-js';
import { createStore } from 'vuex';

export default createStore({
  state: {
    movies: [
      {
        id: 1,
        name: ' Alien',
        genre: ['action', 'romance', 'drama'],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quasi quas quo nulla repellat nihil iusto sequi architecto assumenda fugit.',
        year: 2020,
        picUrl:
          'https://images.unsplash.com/photo-1600213607670-7cb3ccec3b04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 2,
        name: ' Jedi ',
        genre: ['action', 'drama'],
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima at pariatur fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, corporis. Soluta nobis sequi aut aliquid reprehenderit tempora eaque perspiciatis unde!',
        year: 2017,
        picUrl:
          'https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 3,
        name: ' Flames ',
        genre: ['action', 'drama', 'war'],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet sit deleniti soluta ab animi magnam, ipsum at modi minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore ullam libero repellat iusto ut.',
        year: 2012,
        picUrl:
          'https://images.unsplash.com/photo-1483917841983-f83104f9ffa5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 4,
        name: 'Princess Sleeping',
        genre: ['love', 'drama', 'fantasy'],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa consectetur maiores ab inventore reiciendis necessitatibus architecto vero ullam. At.',
        year: 2011,
        picUrl:
          'https://images.unsplash.com/photo-1610865662679-8dfb712bd14b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 5,
        name: 'Kill Bill',
        genre: ['Crime', 'drama', 'fantasy'],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima libero dicta accusantium aperiam odio delectus fuga veniam laborum corrupti perferendis.',
        year: 2011,
        picUrl:
          'https://images.unsplash.com/photo-1569995617877-d845becc0d40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 6,
        name: 'Kill Bill',
        genre: ['Crime', 'drama', 'fantasy'],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima libero dicta accusantium aperiam odio delectus fuga veniam laborum corrupti perferendis.',
        year: 2011,
        picUrl:
          'https://www.joblo.com/assets/images/joblo/posters/2020/03/76AA8E0F-AF7A-4FC2-A7DF-C194DBC85900.jpeg',
      },
    ],
  },
  mutations: {
    ADD_DATA(state, value) {
      value.id = Math.floor(Math.random() * 1000000000);
      state.movies.unshift(value);
    },
  },
  actions: {
    addData({ state, commit }, value) {
      if (state.movies) {
        commit('ADD_DATA', value);
      }
    },
  },
  getters: {
    movieListLength: state => {
      return state.movies.length;
    },

    getMovieById: state => id => {
      return state.movies.find(movie => movie.id == id);
    },
  },

  modules: {},
});
