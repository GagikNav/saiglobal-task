<template>
  <div id="main" class="flex flex-col items-center justify-center w-full ">
    <Cards :genre="genre" />
  </div>
</template>

<script>
  import Cards from '@/components/Cards.vue';

  export default {
    name: 'FilteredCards',
    props: {
      genre: String,
    },
    components: {
      Cards,
    },
    methods: {},
  };
</script>
<style lang="css">
  #main {
    min-height: calc(100vh - 127px);
  }
</style>
