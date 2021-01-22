import { createStore } from 'vuex';

export default createStore({
  state: {
    movies: [
      {
        id: 1,
        name: ' Alien',
        genre: ['action', 'romance', 'drama'],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, enim.',
        year: 2020,
        picUrl:
          'https://images.unsplash.com/photo-1600213607670-7cb3ccec3b04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80',
      },
      {
        id: 2,
        name: ' Jedi ',
        genre: ['action', 'drama'],
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima at pariatur fugit.',
        year: 2017,
        picUrl:
          'https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80',
      },
      {
        id: 3,
        name: ' Flames ',
        genre: ['action', 'drama', 'war'],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore ullam libero repellat iusto ut.',
        year: 2012,
        picUrl:
          'https://images.unsplash.com/photo-1483917841983-f83104f9ffa5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80',
      },
      {
        id: 4,
        name: 'Princess Sleeping',
        genre: ['love', 'drama', 'fantasy'],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, enim.',
        year: 2011,
        picUrl:
          'https://images.unsplash.com/photo-1610865662679-8dfb712bd14b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80',
      },
      {
        id: 5,
        name: 'Kill Bill',
        genre: ['Crime', 'drama', 'fantasy'],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, enim.',
        year: 2011,
        picUrl:
          'https://images.unsplash.com/photo-1569995617877-d845becc0d40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    movieListLength: state => {
      return state.movies.length;
    },
  },

  modules: {},
});
