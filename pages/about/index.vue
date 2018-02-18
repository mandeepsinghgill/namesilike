<template>
  <section class="container">
    <p>{{ $t('content.info.title') }}</p>
  </section>
</template>
<script>

  export default {
    head() {
      return {
        title: this.$t('content.info.title'),
        meta: [
          {hid: 'description', name: 'description', content: 'My custom description'}
        ]
      }
    }
  }
</script>