<template>
  <div class="flex flex-wrap justify-center gap-5 ">
    <CardDetaile v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
  import CardDetaile from '@/components/CardDetaile';

  import { mapState } from 'vuex';

  export default {
    name: 'Cards',
    components: {
      CardDetaile,
    },
    computed: {
      ...mapState({
        movies: state => state.movies,
      }),
    },
  };
</script>

<style lang="scss" scoped></style>
