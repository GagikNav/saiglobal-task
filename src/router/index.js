import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Movie from '../views/Movie.vue';
import AddMovie from '../views/AddMovie.vue';
import EditMovie from '../views/EditMovie.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/add-movie',
    name: 'AddMovie',
    component: AddMovie,
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    props: true,
    component: Movie,
  },
  {
    path: '/edit/:id',
    name: 'EditMovie',
    props: true,
    component: EditMovie,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
