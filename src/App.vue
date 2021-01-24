<template>
  <div id="app" class="box-border antialiased text-gray-900">
    <div
      id="nav"
      class="flex justify-between px-10 py-8 bg-blue-100 content-evenly"
    >
      <router-link :to="{ name: 'Home' }">
        <img
          src="../public/logo-via-logohub.png"
          alt=""
          class="h-10 mr-5 w-100"
        />
      </router-link>
      <div>
        <router-link :to="{ name: 'Home' }">Home</router-link> |
        <router-link :to="{ name: 'About' }">About</router-link> |
        <router-link :to="{ name: 'AddMovie' }">Add Movie</router-link>
      </div>
    </div>
    <router-view />
    <footer id="main-footer" class="p-2 font-light text-center bg-gray-400">
      Copyright
      <a href="https://www.gagik.me" target="_blank">© Gagik Navasatariyan</a>
      {{ date }}
    </footer>
  </div>
</template>
<script>
  //

  // ..

  // ....
  export default {
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
      color: #2c3e50;

      &.router-link-exact-active {
        color: #ff3953;
      }
    }
  }

  #main-footer {
    height: 40px;
  }
</style>
