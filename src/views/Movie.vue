<template>
  <div id="main" class="flex justify-center bg-gray-100">
    <LargeCard :id="id" />
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
