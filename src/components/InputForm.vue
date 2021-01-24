<template>
  <div class="w-6/12 mb-5 rounded bg-trueGray-300">
    <form class="flex justify-center p-8 " @submit.prevent="addMovie">
      <div class="flex flex-col w-5/6">
        <!-- Name -->
        <label for="fname">Movie name:</label>
        <input
          class="text-lg antialiased font-medium rounded-lg focus:ring-lightblue-400 text-trueGray-800"
          type="text"
          name="mname"
          v-model="formData.movieName"
          required
        />
        <!-- {{ formData }} -->
        <!-- Genre -->

        <label class="mt-4" for="fname">Movie genre:</label>

        <!-- I looped trough genres object to put theme in form -->
        <div class="flex flex-wrap justify-start gap-2">
          <div class="" v-for="(status, genre) in genres" :key="genre">
            <label class="mx-1" for="genre">{{ genre }}</label>
            <input
              v-model="formData.genre"
              class="rounded-lg focus:ring-0"
              type="checkbox"
              :id="genre"
              :value="genre"
            />
          </div>
        </div>
        <!-- Description -->
        <label class="mt-4" for="description">Description:</label>
        <textarea
          v-model="formData.description"
          type="text"
          name="description"
          class="text-sm font-medium rounded-lg h-28 focus:ring-lightblue-400 text-trueGray-800"
          required
        />
        <!-- Year -->
        <label class="mt-4" for="year">Year:</label>
        <input
          v-model="formData.year"
          type="number"
          name="year"
          class="text-lg antialiased font-medium rounded-lg focus:ring-lightblue-400 text-trueGray-800"
          required
        />
        <!-- image URL -->
        <label class="mt-4" for="year">Imag URL:</label>
        <input
          v-model="formData.picUrl"
          type="url"
          name="imageUrl"
          class="text-lg antialiased font-medium rounded-lg focus:ring-lightblue-400 text-trueGray-800"
        />
        <div>
          <input type="submit" value="Submit" class="btn-blue" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        genres: {
          Comedy: true,
          Crime: true,
          Action: true,
          Romance: true,
          SiFi: true,
          Drama: true,
        },

        formData: {
          genre: [],
          movieName: '',
          description: '',
          year: '',
          picUrl: '',
        },
      };
    },

    methods: {
      // submit trough the action as a convention
      addMovie(e) {
        e.preventDefault();
        console.log('form submitted');
        this.$store.dispatch('addData', this.formData);
        this.clearForm();
      },
      clearForm() {
        this.formData = {
          genre: [],
          movieName: '',
          description: '',
          year: '',
          picUrl: '',
        };
      },
    },

    computed: {
      moviesList() {
        return this.$store.state.movies;
      },
    },

    // ..
    //
  };
</script>
<style lang="scss">
  /* .. */
</style>
