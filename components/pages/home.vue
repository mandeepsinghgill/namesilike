<template>
  <section class="content center">
    <h1>{{ $t('titles.main') }}</h1>
    {{ $t('home') }}
    <p>{{ $t('content.siteDescription') }}</p>
    <h1>
      {{ ip }}
    </h1>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        ip: null
      }
    },
    mounted() {
      this.$axios.$get('http://icanhazip.com').then(response => {
        this.ip = response.trim()
      });
    }
  }
</script>