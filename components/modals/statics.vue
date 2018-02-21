<template>
  <div>
    <b-modal scroll="keep" @close="close($event)" :active.sync="showChartModal" :width="widthOfObject">
      <div class="card">
        <p class="searched_name" v-if="name">{{ name }}</p>
        <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
        <p class="meaning-label">{{ $t('graph.meaning') }}</p>
        <p class="meaning" v-if="datacollection">{{ datacollection.meaning }}</p>
      </div>
    </b-modal>
  </div>
</template>
<script>
  import VueHighcharts from 'vue2-highcharts'
  import StaticsCharts from '../../mixins/StaticsChart'
  export default {
    props: ['showStatics', 'name'],
    mixins: [StaticsCharts],
    components: {VueHighcharts},
    computed: {
      widthOfObject() {
        return document.body.clientWidth / 2 - 100
      }
    },
    mounted() {
      this.showChartModal = true;
      this.$nextTick(() => {
        this.asyncFetch();
      })
    },
    methods: {
      async asyncFetch() {
        let lineCharts = this.$refs.lineCharts;
        await this.$axios('http://namabayi4-env.eu-west-1.elasticbeanstalk.com/lookup_name_info', {
          params: {
            'user_ID': '1120',
            'session_ID': '2222',
            'selected_language': 'nl',
            'names_per_question': 2,
            'name_to_lookup': this.name,
            'screen_height': 100,
            'screen_width': 200
          }
        }).then(response => {
          lineCharts.delegateMethod('showLoading', 'Loading...');
          this.datacollection = response.data;
          this.asyncData = {
            pointStart: 1995,
            data: response.data.ts,
            name: this.name,
            lineWidth: 3,
            showInLegend: false,
          };
          lineCharts.addSeries(this.asyncData);
          lineCharts.hideLoading();
        });
      },
      close(e) {
        this.$emit('closed', true)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/modal-statics.scss";
</style>