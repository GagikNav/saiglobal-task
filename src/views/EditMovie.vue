<template>
  <div id="main" class="flex flex-col items-center px-6 bg-gray-100 fle sm:p-0">
    <h1 class="m-5 text-2xl font-semibold">You can edit movie data here</h1>
    <InputForm :movieData="movieData" />
  </div>
</template>

<script>
  import InputForm from '../components/InputForm';
  export default {
    data() {
      return {
        movieData: {},
      };
    },

    name: 'EditMovie',
    props: ['id'],
    components: {
      InputForm,
    },
    created() {
      this.movieData = this.cardId(this.$route.params.id);
    },
    computed: {
      cardId() {
        return this.$store.getters.getMovieById;
      },
    },
  };
</script>
<style lang="css">
  /*  */
</style>
