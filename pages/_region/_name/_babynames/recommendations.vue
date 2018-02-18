<template>
    <div class="container">
        <div class="columns">

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