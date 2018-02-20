<template>
  <div>
    <navbar></navbar>
    <nuxt/>
  </div>
</template>

<script>
  import Navbar from '../components/common/navbar'
  export default {
    components: {Navbar}
  }
</script>

<style>
html {
  background-size: 100% auto;
  background: url("../assets/images/pattern.svg"), radial-gradient(circle at 50% 50%, #ffd842, #ffc32a) repeat-y center top;
}
</style>
