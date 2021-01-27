<template>
  <div id="main" class="flex flex-col items-center justify-center w-full ">
    <Hero />
    <Cards />
  </div>
</template>

<script>
  import Cards from '@/components/Cards.vue';
  import Hero from '@/components/Hero.vue';

  export default {
    name: 'Home',

    components: {
      Cards,
      Hero,
    },
    methods: {},
  };
</script>
<style lang="css">
  #main {
    min-height: calc(100vh - 127px);
  }
</style>
