<template>
  <section class="container">
    <navbar></navbar>
    <home></home>
  </section>
</template>

<script>
  import Navbar from '../components/common/navbar'
  import Home from '../components/pages/home'
  export default {
    components: {Navbar, Home}
  }
</script>
