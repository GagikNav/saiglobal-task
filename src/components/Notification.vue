<template lang="">
  <div>
    <div
      class="absolute bottom-0 flex flex-col items-center justify-center w-full h-full gap-10 rounded-2xl bg-lightblue-100"
    >
      <h1 class="text-4xl font-bold text-gray-800">
        Your {{ notifyType }} was successful!!
      </h1>
      <router-link :to="{ name: 'Home' }">
        <button type="button" class="text-xl btn btn-blue">Go to Home</button>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      notifyType: String,
    },
    data() {
      return {
        //
      };
    },
  };
</script>
<style lang=""></style>
