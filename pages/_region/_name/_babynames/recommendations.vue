<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><nuxt-link :to="'/' + this.$route.params.region">{{ this.$route.params.region }}</nuxt-link></li>
                        <li><nuxt-link :to="'/' + this.$route.params.region + '/' + this.$route.params.name">{{ this.$route.params.name }}</nuxt-link></li>
                        <li><a href="#">{{ this.$route.params.babynames }}</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <recommend :datahavetoshow="mydata"></recommend>
            </div>
        </div>
    </div>
</template>
<script>
  import axios from "axios";
  import recommend from '../../../../components/pages/recommend'

  export default {
    components: {
      recommend
    },
    async asyncData({ params }, callback) {
      await axios.get('https://reqres.in/api/users?page=2').then((res) => {
        callback(null, {mydata: res.data.data})
      });
    }
  }
</script>