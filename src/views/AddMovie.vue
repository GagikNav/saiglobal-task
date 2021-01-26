<template>
  <div id="main" class="flex flex-col items-center px-6 bg-gray-50 fle sm:p-0">
    <h1 class="m-5 text-2xl font-semibold">You can add new movie data here</h1>
    <InputForm />
  </div>
</template>

<script>
  import InputForm from '../components/InputForm';
  export default {
    name: 'AddMovie',
    components: {
      InputForm,
    },
  };
</script>
<style lang="css">
  /*  */
</style>
