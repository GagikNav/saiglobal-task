<template>
  <div class="w-full h-auto pt-10 bg-gray-100 ">
    <div class="flex w-full ">
      <div class="mx-auto sm:max-w-2xl lg:max-w-full lg:w-1/2 lg:h-4/5">
        <div class="lg:hidden">
          <img
            class="object-cover object-center w-full h-full mx-auto mt-1 rounded shadow-2xl "
            :src="movie.picUrl"
            :alt="movie.name"
            style="height:40vh"
          />
        </div>

        <div
          id="content-area "
          class="relative px-2 mt-5 lg:max-w-4xl lg:ml-auto lg:px-20 lg:mt-0"
        >
          <div id="genre" class="mb-5 md:mt-8">
            <span
              class="text-sm uppercase "
              v-for="(genre, index) in movie.genre"
              :key="index"
            >
              {{ genre }},
            </span>
          </div>

          <div class="block">
            <span
              class="font-sans text-3xl antialiased font-bold leading-tight uppercase md:text-4xl "
            >
              {{ movie.name }}</span
            >
            <span
              class="block mt-5 text-lg antialiased font-semibold tracking-wide "
              ><span class="text-base ">Released:</span> {{ movie.year }}</span
            >
          </div>

          <span
            class="block mt-5 overflow-hidden antialiased font-semibold tracking-wider text-secondary md:text-base md:mt-8"
          >
            {{ movie.description }}
          </span>
          <div
            id="button-section"
            class="flex m-10 outline-none justify-evenly"
          >
            <router-link :to="{ name: 'EditMovie', params: { id: movie.id } }">
              <button
                class="tracking-wider uppercase shadow-lg btn btn-blue active:bg-lightblue-400 focus:outline-none focus:ring focus:border-lightblue-400"
              >
                EDIT
              </button>
            </router-link>
            <button
              class="tracking-wider uppercase shadow-lg btn btn-red active:bg-red-400 focus:outline-none focus:ring focus:border-red-600"
              @click="openModal"
              type="button"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
      <div class="hidden w-1/2 lg:relative lg:block">
        <img
          class="absolute inset-0 object-cover object-center w-full h-full rounded shadow-2xl"
          :src="movie.picUrl"
          alt=""
        />
      </div>
    </div>
    <!-- Notification -->
    <Notification
      notifyType="Delete"
      v-if="isNotificationOpen"
      class="absolute bottom-0 left-auto flex flex-col items-center justify-center w-full h-full gap-10 rounded-lg bg-lightblue-100"
    />

    <!-- modal component -->
    <ConfirmationModal
      v-if="isModalOpen"
      confirmType="Delete"
      v-on:confirm="callFormAction"
      v-on:cancel="closeModal($event)"
      class="absolute bottom-0 z-10 w-full bg-white border border-gray-500 rounded-lg shadow-2xl md:w-1/2 h-1/4"
    />
  </div>
</template>
<script>
  import ConfirmationModal from './ConfirmationModal'; // Modal Component
  import Notification from './Notification';
  export default {
    components: { ConfirmationModal, Notification },
    props: {
      id: String,
    },
    name: 'LargeCard',
    data() {
      return {
        isNotificationOpen: false,
        isModalOpen: false,
        movie: {},
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      callFormAction() {
        this.deleteMovie(); //form Action Delete
      },

      handleNotification(status) {
        this.isNotificationOpen = status;
      },
      deleteMovie() {
        this.$store.dispatch('deleteData', this.movie.id);
        this.closeModal();
        this.handleNotification(true);
        setTimeout(() => {
          this.$router.push('/');
        }, 2000);
      },
    },

    created() {
      this.movie = this.getMovie(this.$route.params.id);
    },

    computed: {
      getMovie() {
        return this.$store.getters.getMovieById;
      },
    },
  };
</script>
<style lang="">
  /* .. */
</style>
