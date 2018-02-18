<template>
  <section class="container">
    <navbar></navbar>
    <p>{{ $t('content.info.title') }}</p>
  </section>
</template>
<script>
  import Navbar from '../../components/common/navbar'

  export default {
    components: {Navbar}
  }
</script>