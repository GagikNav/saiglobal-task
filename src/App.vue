<template>
  <div id="app" class="box-border antialiased bg-gray-100 text-secondary ">
    <div
      id="nav"
      class="relative z-50 flex items-center justify-between h-20 px-8 opacity-95 content-evenly"
    >
      <router-link :to="{ name: 'Home' }">
        <img src="../src/assets/logo-removebg.png" alt="" class="w-20 h-20 " />
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
          >Home</router-link
        >
        <router-link
          class="flex justify-end w-full px-4 py-2 rounded hover:bg-gray-200"
          :to="{ name: 'About' }"
          >About</router-link
        >
        <router-link
          class="flex justify-end w-full px-4 py-2 rounded hover:bg-gray-200"
          :to="{ name: 'AddMovie' }"
          >Add Movie</router-link
        >
      </div>
    </div>
    <router-view />
    <footer
      id="main-footer"
      class="relative flex flex-col h-auto px-5 py-3 text-xs font-light text-center bg-footer text-footerText"
    >
      <div
        class="grid grid-cols-1 p-0 font-light sm:grid-cols-2 md:p-2 md:grid-cols-4 "
      >
        <!--  -->
        <div id="g-1" class="flex flex-col items-center justify-center ">
          <div class="flex flex-col items-end gap-2 ">
            <img src="../src/assets/logo-removebg.png" alt="logo" class="" />
          </div>
        </div>
        <div id="g-2" class="flex flex-col items-start mt-5 sm:p-10">
          <h3 class="text-lg font-semibold text-left text-primary">
            Popular Genres
          </h3>
          <ul class="flex flex-col items-start justify-start py-2">
            <li class="py-2 uppercase cursor-pointer ">Comedy</li>
            <li class="py-2 uppercase cursor-pointer">Romance</li>
            <li class="py-2 uppercase cursor-pointer">Drama</li>
            <li class="py-2 uppercase cursor-pointer ">Fantasy</li>
          </ul>
        </div>
        <div id="g-3" class="flex flex-col items-start mt-5 sm:p-10 sm:flex ">
          <h3 class="text-lg font-semibold text-left text-primary">
            Shortcuts
          </h3>
          <ul class="flex flex-col items-start justify-start py-2">
            <li class="py-2 uppercase cursor-pointer ">Serries</li>
            <li class="py-2 uppercase cursor-pointer">Movies</li>
            <li class="py-2 uppercase cursor-pointer">About</li>
            <li class="py-2 uppercase cursor-pointer ">See All movies</li>
          </ul>
        </div>
        <div id="g-4" class="flex flex-col items-start mt-5 sm:p-10">
          <h3 class="text-lg font-semibold text-left text-primary">
            Contacts
          </h3>
          <ul class="flex flex-col items-start justify-start py-2">
            <li class="py-2 cursor-pointer hover:text-primary ">
              <i class="px-2 fas fa-envelope"></i>
              <a href="#">gagik.n@gmail.com</a>
            </li>
            <li class="py-2 cursor-pointer hover:text-primary">
              <i class="px-2 fas fa-globe"></i>
              <a href="https://www.gagik.me" target="”_blank”">/Gagik.me</a>
            </li>
            <li class="py-2 cursor-pointer hover:text-primary">
              <i class="px-2 fab fa-github"></i>
              <a
                href="https://github.com/GagikNav/saiglobal-task"
                target="”_blank”"
                >/GagikNav</a
              >
            </li>
            <li class="py-2 cursor-pointer hover:text-primary">
              <i class="px-2 fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/gagik-n/" target="”_blank”"
                >/gagik-n/</a
              >
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

  #main-footer {
    // height: 40px;
  }
</style>
