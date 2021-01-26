<template>
  <div>
    <div
      class="flex flex-col items-center justify-center w-full h-full rounded-2xl bg-lightblue-100"
    >
      <h1
        v-if="notifyType !== 'warning'"
        class="text-xl font-bold text-center text-gray-800 md:text-4xl"
      >
        Your {{ notifyType }} was successful!!
      </h1>

      <div
        class="flex flex-col items-center justify-center"
        v-if="notifyType === 'warning'"
      >
        <h1 class="block text-2xl font-bold text-red-700">
          Please correct the errors!
        </h1>
        <button
          @click="cancel"
          type="button"
          class="mx-auto mt-10 shadow btn btn-blue"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      notifyType: String,
    },
    methods: {
      cancel() {
        this.$emit('cancel', false);
      },
    },
    data() {
      return {
        //
      };
    },
  };
</script>
