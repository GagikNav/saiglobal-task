<template lang="">
  <div class="flex flex-col items-center justify-around bg-gray-200">
    <div id="text" class="">
      <!-- dynamically changes color if delete -->
      <h1
        class="text-2xl font-semibold "
        :class="{ 'text-red-600': confirmType === 'Delete' }"
      >
        Are you sure you want to {{ confirmType }} ?
      </h1>
    </div>
    <div class="flex items-center justify-center w-full gap-20 h-1/2">
      <button
        @click="confirm"
        type="button"
        class="px-5 shadow-md btn btn-blue"
      >
        YES
      </button>
      <button @click="cancel" type="button" class="px-5 shadow-md btn btn-red ">
        NO
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ConfirmationModal',
    props: { confirmType: String },
    methods: {
      confirm() {
        this.$emit('confirm', true);
      },
      cancel() {
        this.$emit('cancel', false);
      },
    },
  };
</script>
<style lang=""></style>
