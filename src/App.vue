<template>
  <div id="app" class="box-border antialiased text-gray-900">
    <div id="nav" class="flex px-10 py-8 bg-blue-100 content-evenly">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view
      style="background-image: url('../public/img/clement-m-JIOP2qvo8yk-unsplash.jpg')"
    />
    <footer id="main-footer" class="p-2 font-light text-center bg-gray-400">
      Copyright
      <a href="https://www.gagik.me" target="_blank">© Gagik Navasatariyan</a>
      {{ date }}
    </footer>
  </div>
</template>
<script>
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
        color: #42b983;
      }
    }
  }

  #main-footer {
    height: 40px;
  }
</style>
