<template>
  <div id="main" class="flex flex-col items-center justify-center w-full ">
    <Cards />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Cards from '@/components/Cards.vue';

  export default {
    name: 'Home',
    components: {
      Cards,
    },
  };
</script>
<style lang="css">
  #main {
    min-height: calc(100vh - 127px);
  }
</style>
