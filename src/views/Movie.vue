<template>
  <div id="main" class="flex justify-center px-6 bg-gray-100">
    <LargeCard :movie="cardId(id)" />
  </div>
</template>

<script>
  import LargeCard from '@/components/LargeCard.vue';

  export default {
    name: 'Movie',
    // this id came from router props
    props: ['id'],
    components: {
      LargeCard,
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
