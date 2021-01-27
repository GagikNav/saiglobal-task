<template lang="">
  <div
    class="w-full overflow-hidden bg-white border border-gray-300 rounded-md shadow-md md:w-1/3 lg:w-1/4 sm:p-0"
  >
    <router-link :to="{ name: 'Movie', params: { id: movie.id } }">
      <div class="relative flex justify-center h-1/2">
        <img
          :src="movie.picUrl"
          :alt="movie.name"
          class="object-cover object-center w-full max-h-64 "
        />
      </div>
      <!-- text content -->
      <div class="flex flex-col items-start px-3 pb-8 ">
        <!--  -->
        <span class="w-full pr-5 mt-3 text-sm font-light text-right ">
          {{ movie.year }}
        </span>

        <span id="movie-title" class="mb-3 text-lg font-semibold uppercase">{{
          movie.name
        }}</span>

        <div id="genre-wrapper" class="flex gap-1 mb-3">
          <span
            class="text-xs text-gray-500 capitalize font-extralight"
            v-for="(genre, index) in movie.genre"
            :key="index"
          >
            {{ genre }},
          </span>
        </div>
        <!-- this logic is for display no more than 50 charters in field -->
        <span class="text-sm text-gray-600 ">{{
          movie.description.length > 100
            ? movie.description.substring(0, 99) + ` &hellip; `
            : movie.description
        }}</span>
      </div>
    </router-link>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    props: {
      movieId: Number,
    },
    data() {
      return {
        movie: {},
      };
    },
    methods: {},

    created() {
      this.movie = this.getMovie(this.movieId);
    },

    name: 'CardDetail',
    // ..
    computed: {
      ...mapGetters({
        getMovie: 'getMovieById',
      }),
    },
  };
</script>
