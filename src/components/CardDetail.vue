<template lang="">
  <div
    class="w-full mx-2 my-6 overflow-hidden bg-white border rounded-lg md:w-1/3 lg:w-1/4 sm:p-0"
  >
    <router-link :to="{ name: 'Movie', params: { id: movie.id } }">
      <div class="flex justify-center ">
        <img :src="movie.picUrl" alt="" class="object-cover w-full max-h-60 " />
      </div>
      <!-- text content -->
      <div class="flex flex-col items-start px-8 pt-4 pb-8">
        <!--  -->

        <span class="mb-1 text-md"
          >Genre:
          <span
            class="text-xs font-semibold text-gray-600 uppercase"
            v-for="(genre, index) in movie.genre"
            :key="index"
          >
            {{ genre }},
          </span>
        </span>

        <span class="mb-2 text-md"
          >Name:
          <span class="text-xl italic font-semibold uppercase">{{
            movie.name
          }}</span>
        </span>

        <span class="text-md">Description:</span>
        <!-- this logic is for display no more than 50 charters in field -->
        <span class="text-sm text-gray-600 ">{{
          movie.description.length > 50
            ? movie.description.substring(0, 49) + ` &hellip; `
            : movie.description
        }}</span>
        <span class="mt-3 text-green-600"
          >Year:
          <span class="italic font-semibold">
            {{ movie.year }}
          </span>
        </span>
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
    methods: {
      log(param) {
        console.log(param);
      },
    },
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
<style lang=""></style>
