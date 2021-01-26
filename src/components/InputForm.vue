<template>
  <div class="relative w-full mb-5 rounded md:max-w-xl bg-trueGray-300">
    <form class="flex justify-center p-8 " @submit.prevent="modifyMovie">
      <div class="flex flex-col w-5/6">
        <!-- Name -->
        <label for="mname"
          >Movie name:
          <span
            class="float-right p-0 text-xs italic font-thin tracking-tighter text-red-600 "
            v-if="errorObject.name"
            >{{ errorObject.name }}</span
          ></label
        >
        <input
          class="text-lg antialiased font-medium rounded-lg focus:ring-lightblue-400 text-trueGray-800"
          type="text"
          name="mname"
          v-model="formData.name"
          required
        />
        <!-- Genre -->

        <label class="mt-4" for="fname"
          >Movie genre:
          <span
            class="float-right p-0 text-xs italic font-thin tracking-tighter text-red-600 "
            v-if="errorObject.genre"
            >{{ errorObject.genre }}</span
          ></label
        >

        <!-- I looped trough genres object to put theme in form -->
        <div class="flex flex-wrap justify-start gap-2">
          <div class="" v-for="(status, genre) in genres" :key="genre">
            <label class="mx-1" for="genre">{{ genre }}</label>
            <input
              v-model="formData.genre"
              :true-value="1"
              :false-value="0"
              class="rounded-lg focus:ring-0"
              type="checkbox"
              :id="genre"
              :value="genre"
            />
          </div>
        </div>
        <!-- Description -->
        <label class="mt-4" for="description"
          >Description:
          <span
            class="float-right p-0 text-xs italic font-thin tracking-tighter text-red-600 "
            v-if="errorObject.description"
            >{{ errorObject.description }}</span
          ></label
        >
        <textarea
          v-model="formData.description"
          name="description"
          class="text-sm font-medium rounded-lg h-28 focus:ring-lightblue-400 text-trueGray-800"
          required
        />
        <!-- Year -->
        <label class="mt-4" for="year"
          >Year:
          <span
            class="float-right p-0 text-xs italic font-thin tracking-tighter text-red-600 "
            v-if="errorObject.year"
            >{{ errorObject.year }}</span
          ></label
        >

        <select
          v-model="formData.year"
          name="year"
          class="text-base antialiased font-medium rounded-lg focus:ring-lightblue-400 text-trueGray-800"
          required
        >
          <option v-for="year in years" name="year" :value="year" :key="year">{{
            year
          }}</option>
        </select>

        <!-- image URL -->
        <label class="mt-4" for="year"
          >Image URL:
          <span
            class="float-right p-0 text-xs italic font-thin tracking-tighter text-red-600 "
            v-if="errorObject.picUrl"
            >{{ errorObject.picUrl }}</span
          ></label
        >
        <input
          v-model="formData.picUrl"
          type="url"
          name="imageUrl"
          class="text-sm antialiased font-light rounded-lg focus:ring-lightblue-400 text-trueGray-800"
        />
        <div>
          <button
            class="text-sm italic underline btn focus:outline-none"
            type="button"
            @click="feelLucky"
          >
            I feel lucky!!
          </button>
        </div>

        <div>
          <input
            @click="openModal"
            type="button"
            value="Submit"
            class="m-5 btn btn-blue disabled:opacity-20"
            :disabled="isError"
          />
        </div>
      </div>
      <!--  -->
      <!-- Notification -->
      <div
        :notifyType="Submit"
        v-if="isNotificationOpen"
        class="absolute bottom-0 flex flex-col items-center justify-center w-full h-full gap-10 rounded-2xl bg-lightblue-100"
      >
        <h1 class="text-4xl font-bold text-gray-800">
          Your Submit was successful!!
        </h1>
        <router-link :to="{ name: 'Home' }">
          <button type="button" class="text-xl btn btn-blue">Go to Home</button>
        </router-link>
      </div>
      <!-- modal component -->

      <ConfirmationModal
        v-if="isModalOpen"
        confirmType="Submit"
        v-on:confirm="callFormAction"
        v-on:cancel="closeModal($event)"
        class="absolute left-auto z-10 w-3/4 p-2 bg-white rounded-lg shadow-2xl bottom-10 h-1/4"
      />
    </form>
  </div>
</template>
<script>
  // this mixin is for data validation
  // I wanted to shorten component length
  import ValidateInput from '../mixins/ValidateInput'; // only form validator
  import InputFormMethods from '../mixins/InputFormMethods'; // rest of  the methods
  // ..
  import ConfirmationModal from './ConfirmationModal'; // Modal Component

  export default {
    mixins: [ValidateInput, InputFormMethods],

    props: { movieData: Object },
    components: { ConfirmationModal },

    data() {
      return {
        isNotificationOpen: false,
        isModalOpen: false,
        isError: true,
        errorObject: {},
        years: [],
        genres: {
          Comedy: '0',
          Crime: '0',
          Action: '0',
          Romance: '0',
          SiFi: '0',
          Drama: '0',
          Fantasy: '0',
        },

        formData: {
          genre: [],
          name: '',
          description: '',
          year: '',
          picUrl: '',
        },
      };
    },
    methods: {
      // Methods are in "InputFormMethod.js" mixin
    },
    watch: {
      formData: {
        handler(value) {
          this.validate(value);
        },
        deep: true,
      },

      // I am checking if there is an error in errorObject
      // to let submit
      errorObject() {
        if (
          Object.keys(this.errorObject).length === 0 &&
          this.errorObject.constructor === Object
        ) {
          this.isError = false;
        } else {
          this.isError = true;
        }
      },
    },

    created() {
      //  end date can be dynamic
      // created for populate years option.
      // ..
      for (let i = 2021; i >= 1980; i--) {
        this.years.push(i);
      }
      // ..
      // checking if in edit mode populates the form
      if (this.movieData) {
        this.formData = this.movieData; //movieData came from EditMovie component
      }
    },

    // ..
    //
  };
</script>
<style lang="scss">
  /* .. */
</style>
