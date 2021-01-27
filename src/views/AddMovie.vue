<template>
  <div id="main" class="flex flex-col items-center px-1 bg-gray-50 fle sm:p-0">
    <h1 class="my-2 text-lg font-semibold sm:m-5">
      You can add new movie's data here:
    </h1>
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
