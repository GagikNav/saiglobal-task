<template>
  <div class="flex flex-wrap justify-center gap-5 max-w-7xl">
    <!-- <button type="button" class="btn " @click="changeWord">
      show action
    </button> -->
    <CardDetail
      v-for="movie in filterRomance"
      :key="movie.id"
      :movieId="movie.id"
    />
  </div>
</template>

<script>
  import CardDetail from '@/components/CardDetail';

  import { mapState } from 'vuex';

  export default {
    name: 'Cards',

    data() {
      return {
        unFilteredMovies: '',
        filterWord: 'Romance',
        isShowAll: true,
      };
    },

    components: {
      CardDetail,
    },
    methods: {
      changeWord() {
        this.filterWord = 'Action';
        console.log(this.filterWord);
      },
      testFilter() {
        const movies = this.$store.state.movies;
        let f2 = [];
        movies
          .map(item => Object.values(item))
          .map((item, index) => {
            if (Object.values(item[2]).includes(this.filterWord)) {
              f2.push(index);
            }
          });
        console.log(f2);
      },

      //
    },
    computed: {
      // this is for test
      filterRomance() {
        if (!this.isShowAll) {
          let res = [];
          let movieCat = [];
          const movies = this.$store.state.movies;
          const genre = this.$store.state.movies.map(movie => movie.genre);
          const genreArr = genre.map(item => Object.values(item));
          const indexOfRomance = genreArr.map(i => i.includes(this.filterWord));
          indexOfRomance.map((item, index) => {
            if (item) {
              res.push(index);
            }
          });
          res.map(index => movieCat.push(movies[index]));
          return movieCat;
        } else {
          return this.$store.state.movies;
        }
      },
      ...mapState({
        movies: state => state.movies,
      }),
    },
  };
</script>

<style lang="scss" scoped></style>
