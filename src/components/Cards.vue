<template>
  <div v-if="genre" class="flex flex-wrap justify-center gap-5 my-5 max-w-7xl">
    <CardDetail
      v-for="movie in getFilteredMovies(genre)"
      :key="movie.id"
      :movieId="movie.id"
    />
  </div>
  <div v-if="!genre" class="flex flex-wrap justify-center gap-5 my-5 max-w-7xl">
    <CardDetail v-for="movie in movies" :key="movie.id" :movieId="movie.id" />
  </div>
</template>

<script>
  import CardDetail from '@/components/CardDetail';

  import { mapState, mapGetters } from 'vuex';

  export default {
    name: 'Cards',
    props: {
      genre: String,
    },
    data() {
      return {
        filterIndexArr: [],
        filteredMovies: [],
        isShowAll: true,
      };
    },
    created() {},
    components: {
      CardDetail,
    },
    methods: {},

    computed: {
      ...mapState({
        movies: state => state.movies,
      }),
      ...mapGetters(['getFilteredMovies']),
      // ..
    },
  };
</script>
