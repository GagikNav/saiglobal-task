<template lang="">
  <div
    class="mx-2 my-6 overflow-hidden bg-white border rounded-lg lg:w-1/4 md:w-1/3 sm:w-full "
  >
    <div class="flex justify-center ">
      <img
        :src="movie.picUrl"
        alt=""
        class="object-scale-down w-full h-full "
      />
    </div>
    <!-- text content -->
    <div class="flex flex-col items-start px-8 pt-4 pb-8">
      <!--  -->

      <span class="mb-1 text-md"
        >Genre:
        <span
          class="text-xs font-semibold text-gray-600 uppercase"
          v-for="genre in movie.genre"
          :key="genre"
        >
          {{ genre }},
        </span>
      </span>

      <span class="mb-2 text-md"
        >Name:
        <span class="text-xl italic font-semibold uppercase">{{
          movie.name
        }}</span>
      </span>

      <span class="text-md">Description:</span>
      <span class="text-sm text-gray-600 ">{{ movie.description }}</span>
      <span class="mt-3 text-green-600"
        >Year:
        <span class="italic font-semibold">
          {{ movie.year }}
        </span>
      </span>
    </div>
  </div>
</template>
<script>
  // import { mapState } from 'vuex';

  export default {
    props: {
      movie: Object,
    },
    name: 'CardDetaile',
    // ..
    /*computed: {
      ...mapState({
        movie: state => state.movies[0],
      }),
    },*/
  };
</script>
<style lang=""></style>
