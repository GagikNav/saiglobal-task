<template>
  <div id="app" class="box-border antialiased bg-gray-100 text-secondary ">
    <div
      id="nav"
      class="relative z-50 flex items-center justify-between px-8 shadow h-26 opacity-95 content-evenly"
    >
      <router-link :to="{ name: 'Home' }">
        <img
          src="../src/assets/logo-removebg.png"
          alt="logo"
          class="h-28 w-38 "
        />
      </router-link>
      <div class="hidden gap-4 md:hover:text-primary md:order-last md:flex">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'AddMovie' }">Add Movie</router-link>
      </div>
      <div @click="showMenu = !showMenu">
        <img
          src="../src/assets/menu.svg"
          alt="menu button"
          class="w-8 h-8 cursor-pointer md:hidden "
        />
      </div>

      <!-- this is menu section only show on mobile -->
      <div
        v-if="showMenu"
        class="absolute right-0 flex flex-col items-end w-full gap-5 px-4 pb-5 bg-gray-100 top-20 md:hidden md:block"
      >
        <router-link
          class="flex justify-end w-full px-4 py-2 rounded hover:bg-gray-200"
          :to="{ name: 'Home' }"
          @click="showMenu = false"
          >Home</router-link
        >
        <router-link
          class="flex justify-end w-full px-4 py-2 rounded hover:bg-gray-200"
          :to="{ name: 'About' }"
          @click="showMenu = false"
          >About</router-link
        >
        <router-link
          class="flex justify-end w-full px-4 py-2 rounded hover:bg-gray-200"
          :to="{ name: 'AddMovie' }"
          @click="showMenu = false"
          >Add Movie</router-link
        >
      </div>
    </div>
    <router-view />
    <!-- 
      ** 
      **Footer section
     -->
    <footer
      id="main-footer"
      class="relative flex flex-col h-auto px-5 py-3 text-xs font-light text-center bg-footer text-footerText"
    >
      <div
        class="grid grid-cols-1 p-0 font-light sm:grid-cols-2 md:p-2 md:grid-cols-4 "
      >
        <!--  -->
        <div id="g-1" class="flex flex-col items-center justify-center ">
          <div class="flex flex-col items-end">
            <img
              src="../src/assets/logo-removebg.png"
              alt="logo"
              class="w-44 "
            />
          </div>
        </div>
        <div id="g-2" class="flex flex-col items-start mt-5 sm:p-10">
          <h3 class="text-lg font-semibold text-left text-primary">
            Popular Genres
          </h3>
          <ul class="flex flex-col items-start justify-start py-2">
            <li
              v-for="(popGenre, index) in popGenres"
              :key="index"
              class="py-2 capitalize cursor-pointer hover:text-primary"
            >
              <router-link
                :to="{ name: 'FilteredCards', params: { genre: popGenre } }"
              >
                {{ popGenre }}
              </router-link>
            </li>
          </ul>
        </div>
        <div id="g-3" class="flex flex-col items-start mt-5 sm:p-10 sm:flex ">
          <h3 class="text-lg font-semibold text-left text-primary">
            Shortcuts
          </h3>
          <ul class="flex flex-col items-start justify-start py-2">
            <li
              v-for="(shortCut, index) in shortCuts"
              :key="index"
              class="py-2 capitalize cursor-pointer "
            >
              <router-link :to="{ name: shortCut }">
                {{ shortCut }}
              </router-link>
            </li>
          </ul>
        </div>
        <div id="g-4" class="flex flex-col items-start mt-5 sm:p-10">
          <h3 class="text-lg font-semibold text-left text-primary">
            Contacts
          </h3>
          <ul class="flex flex-col items-start justify-start py-2">
            <li
              v-for="(contact, index) in contacts"
              :key="index"
              class="py-2 cursor-pointer hover:text-primary "
            >
              <i :class="contact.icon"></i>
              <a :href="contact.link" target="_blank">{{ contact.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="float-left w-full mt-3">
        Copyright
        <a href="https://www.gagik.me" target="”_blank”"
          >© Gagik Navasatariyan</a
        >
        {{ date }}
      </div>
    </footer>
  </div>
</template>
<script>
  //

  // ..

  // ....
  export default {
    data() {
      return {
        showMenu: false,
        popGenres: ['Drama', 'Comedy', 'Action', 'Romance'],
        shortCuts: ['About', 'Home', 'AddMovie'],
        contacts: {
          email: {
            title: 'gagik.ne@gmail.com',
            link: '#',
            icon: 'px-2 fas fa-envelope',
          },
          website: {
            title: '/Gagik.me',
            link: 'https://www.gagik.me',
            icon: 'px-2 fas fa-globe',
          },
          github: {
            title: '/GagikNav',
            link: 'https://github.com/GagikNav/saiglobal-task',
            icon: 'px-2 fab fa-github',
          },
          linkedin: {
            title: '/Gagik-n',
            link: 'https://www.linkedin.com/in/gagik-n/',
            icon: 'px-2 fab fa-linkedin',
          },
        },
      };
    },

    computed: {
      date: () => {
        const d = new Date();
        return d.getFullYear();
      },
    },
  };
</script>
<style lang="scss">
  #nav {
    a {
      font-weight: bold;
      color: #3b4754;

      &.router-link-exact-active {
        color: #00a4d3;
      }
    }
  }
</style>
