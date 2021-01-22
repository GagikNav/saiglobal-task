<template>
  <div id="main" class="flex justify-center px-6 bg-gray-100 sm:p-0">
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
    /* background-image: url('../../public/img/clement-m-JIOP2qvo8yk-unsplash.jpg') !important; */
    /* background-size: 100%; */
    /* background-repeat: no-repeat; */
  }
</style>
