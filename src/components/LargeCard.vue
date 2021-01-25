<template>
  <div class="w-full h-auto bg-gray-200">
    <div class="flex w-full ">
      <div class="mx-auto sm:max-w-2xl lg:max-w-full lg:w-1/2 lg:h-4/5">
        <div class="lg:hidden">
          <img
            class="object-cover object-center w-full h-full mx-auto mt-1 rounded-lg shadow-2xl "
            :src="movie.picUrl"
            alt=""
            style="height:40vh"
          />
        </div>

        <div
          id="content-area "
          class="px-2 mt-5 lg:max-w-4xl lg:ml-auto lg:px-20 lg:mt-0"
        >
          <div id="genre" class="mb-5 md:mt-8">
            <span
              class="text-base font-semibold text-red-500 uppercase "
              v-for="(genre, index) in movie.genre"
              :key="index"
            >
              {{ genre }},
            </span>
          </div>

          <div class="block">
            <span
              class="font-sans text-3xl antialiased font-bold leading-tight text-gray-900 uppercase md:text-4xl "
            >
              {{ movie.name }}</span
            >
            <span
              class="block mt-5 text-lg antialiased font-semibold tracking-wide text-green-500"
              ><span class="text-base ">Released:</span> {{ movie.year }}</span
            >
          </div>
          {{ id }}

          <span
            class="block mt-5 overflow-hidden antialiased font-semibold tracking-wider text-gray-600 md:text-lg md:mt-8"
          >
            {{ movie.description }}
          </span>
          <div
            id="button-section"
            class="flex m-10 outline-none justify-evenly"
          >
            <router-link :to="{ name: 'EditMovie', params: { id: movie.id } }">
              <button
                class="tracking-wider uppercase shadow-lg btn btn-blue active:bg-lightblue-400 focus:outline-none focus:ring focus:border-lightblue-400"
              >
                EDIT
              </button>
            </router-link>
            <button
              class="tracking-wider uppercase shadow-lg btn btn-red active:bg-red-400 focus:outline-none focus:ring focus:border-red-600"
              @click="deleteMovie"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
      <div class="hidden w-1/2 lg:relative lg:block">
        <img
          class="absolute inset-0 object-cover object-center w-full h-full rounded-lg shadow-2xl"
          :src="movie.picUrl"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      log(param) {
        console.log(param);
      },
      editMovie() {
        // ..
      },
      deleteMovie() {
        this.$store.dispatch('deleteData', this.movie.id);
      },
    },

    created() {
      this.movie = this.getMovie(this.$route.params.id);
    },
    props: {
      // movie: Object,
      id: String,
    },
    name: 'LargeCard',

    data() {
      return {
        movie: {},
      };
    },

    computed: {
      getMovie() {
        return this.$store.getters.getMovieById;
      },
    },
    // created() {
    //
    // },
    // ..
  };
</script>
<style lang="">
  /* .. */
</style>
