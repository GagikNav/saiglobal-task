<template>
  <div class="flex flex-wrap justify-center gap-5 max-w-7xl">
    <CardDetail v-for="movie in movies" :key="movie.id" :movieId="movie.id" />
  </div>
</template>

<script>
  import CardDetail from '@/components/CardDetail';

  import { mapState } from 'vuex';

  export default {
    name: 'Cards',
    components: {
      CardDetail,
    },
    created() {
      this.movies;
      console.log(this.movies);
    },
    computed: {
      ...mapState({
        movies: state => state.movies,
      }),
    },
  };
</script>

<style lang="scss" scoped></style>
