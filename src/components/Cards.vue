<template>
  <div class="flex flex-wrap justify-center gap-5 my-5 max-w-7xl">
    <!-- also this btn is experimental -->
    <!-- <button type="button" class="btn " @click="changeWord">
      show action
    </button> -->
    <CardDetail v-for="movie in movies" :key="movie.id" :movieId="movie.id" />
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
        filteredMovies: [],
      };
    },

    components: {
      CardDetail,
    },
    methods: {
      //  this section is experimental
      //!
      //!
      //!
      /*
      changeWord() {
        this.filterWord = 'Action';
        this.testFilter();
        console.log(this.filterWord);
      },
      testFilter() {
        const movies = this.$store.state.movies;
        let filterIndexArr = [];
        movies
          .map(item => Object.values(item))
          .map((item, index) => {
            if (Object.values(item[2]).includes(this.filterWord)) {
              filterIndexArr.push(index);
            }
          });

        console.log(filterIndexArr);
        filterIndexArr.map(index => {
          this.filteredMovies.push(this.movies[index]);
        });
        console.log(this.filteredMovies);
      },
*/
    },
    computed: {
      ...mapState({
        movies: state => state.movies,
      }),
    },
  };
</script>

<style lang="scss" scoped></style>
