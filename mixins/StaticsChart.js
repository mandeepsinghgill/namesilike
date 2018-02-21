export default {
  data () {
    return {
      showChartModal: false,
      width: null,
      height: null,
      asyncData: {},
      datacollection: null,
      options: {
        chart: {
          type: 'line',
          background:'transparent',
          width: this.widthOfObject,
          height: 300,
          style: {
            fontFamily: "'Josefin Sans', sans-serif",
            color: "#1C4977",
          },
        },
        title: {
          text: this.$t('graph.title'),
          x: -0,
          style: {
            fontWeight: 'bold'
          }
        },
        subtitle: {
          text: this.$t('graph.subtitle')
        },
        xAxis: {
          lineColor: "#555555",
          tickColor: "#555555",
          max: 2016,
          min: 1995,
          tickInterval: 6,
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
            text: null
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#1C4977'
          }],
          tickAmount:4,
          gridLineColor:'#555555',
          lineColor: "#555555",
          tickColor: "#555555",
          labels: { style:  { color: "#555555",
              font: "'Josefin Sans', sans-serif",
              fontSize:"1.1em"
            },
            align: 'left',
            x: -10,
            y: 5
          },
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
              borderRadius: 0,
              color: "#4a90e2",
              formatter: function () {
                if (this.x === 2015) {
                  return this.y
                } else {
                  return ''
                }
              },
              line:{
                marker: {
                  enabled: false
                }
              }
            },
            legend: {
              align: 'center',
              verticalAlign: 'top',
              borderWidth: 2,
              floating: false,
              enabled: true,
              itemStyle: {
                font: "'Josefin Sans', sans-serif",
                fontSize: "1.4em",
                fontWeight: 1
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
  }
}