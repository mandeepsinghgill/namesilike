<template>
  <section class="container">
    <div class="content">
      <div class="column is-half">
        <h1>{{ $t('statics.title') }}</h1>
        <p>{{ $t('statics.description') }}</p>
        <input type="text" v-model="name" class="input is-success" :placeholder="$t('statics.textPlaceholder')">
        <hr>
        <button class="button is-danger" @click="searchByName">Search</button>
        <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
      </div>
    </div>
  </section>
</template>
<script>
  import VueHighcharts from 'vue2-highcharts'

  export default {
    components: {VueHighcharts},
    data() {
      return {
        asyncData: {},
        name: '',
        datacollection: null,
        options: {
          chart: {
            type: 'line'
          },
          title: {
            text: 'Test'
          },
          subtitle: {
            text: 'Test'
          },
          xAxis: {
            tickInterval: 6,
            min: 1995,
            max: 2016,
            labels: {
              style: {
                color: "#555555",
                font: "'Josefin Sans', sans-serif",
                fontSize:"1.2em"
              }
            },
          },
          yAxis: {
            title: {
              text: 'Data'
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#1C4977'
            }],
            tickAmount:4,
            labels: {
              formatter: function () {
                return this.value + '°';
              }
            }
          },
          tooltip: {
            crosshairs: true,
            shared: true
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            series: {
              dataLabels: {
                enabled: true,
                borderRadius: 2,
                color: "#4a90e2",
                formatter: function () {
                  if (this.x === 2015) {
                    return this.y
                  } else {
                    return ''
                  }
                }
              },
              events: {
                click: function (e) {
                  return null
                }
              }
            },
            line: {
              marker: {
                enabled: false
              }
            }
          },
          series: []
        }
      }
    },
    methods: {
      async searchByName() {
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
          this.asyncData = {
            pointStart: 1995,
            data: response.data.ts,
            lineWidth: 3
          };
        });

        lineCharts.addSeries(this.asyncData);
        lineCharts.hideLoading();
      }
    }
  }
</script>