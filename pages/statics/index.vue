<template>
  <section class="container">
    <navbar></navbar>
    <h1>{{ $t('statics') }}</h1>
  </section>
</template>
<script>
  import Navbar from '../../components/common/navbar'
  export default {
    components: {Navbar}
  }
</script>