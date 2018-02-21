<template>
  <section class="container">
    <div class="content">
      <div class="column is-half has-text-centered statics">
        <h1 class="title is-1 is-spaced">{{ $t('statics.title') }}</h1>
        <p class="subtitle">{{ $t('statics.description') }}</p>
        <input type="text" v-model="name" class="input is-success is-spaced" :placeholder="$t('statics.textPlaceholder')">
        <button class="button is-danger spaced" @click="searchByName">Search</button>
        <statics-modal v-if="showStaticsData" show-statics="showStaticsData" :name="name" @closed="closeStaticsData"></statics-modal>
      </div>
    </div>
  </section>
</template>
<script>
  import StaticsModal from '../../components/modals/statics'

  export default {
    components: {
      StaticsModal
    },
    data () {
      return {
        showStaticsData: false,
        name: null
      }
    },
    mounted() {

    },
    methods: {
      searchByName() {
        if (this.name) {
          this.showStaticsData = true
        }
      },
      closeStaticsData() {
        this.showStaticsData = false
      }
    }
  }
</script>