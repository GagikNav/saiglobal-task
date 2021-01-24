<template>
  <div>
    <h1> Large Card Page</h1>
    <h1> {{movie.name}}</h1>
  </div>
</template>
<script>
export default {
  props: {
      movie: Object,
    },
    name: 'LargeCard',
  // ..
  
}
</script>
<style lang="">
  /* .. */
</style>
