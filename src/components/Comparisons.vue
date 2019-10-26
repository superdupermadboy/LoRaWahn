<template>
 <md-card>
    <md-card-header >
      <div class="md-title">Vergleich</div>
        <div class="card-control">
          <div class="datepicker">
            <md-datepicker v-model="selectedDate">
              <label>Start Date</label>
            </md-datepicker>
            </div>
            <div class="datepicker">
            <md-datepicker v-model="selectedDate">
              <label>End Date</label>
            </md-datepicker>
            </div>
          <div class="md-layout-item">
            <md-field>
              <md-select v-model="source" name="source" id="source" placeholder="Source">
                <md-option value=0>Strom</md-option>
                <md-option value=1>Wasser</md-option>
                <md-option value=2>Heizung</md-option>
                <md-option value=3>Fahrrad</md-option>
              </md-select>
            </md-field>
        </div>
      </div>
    </md-card-header>

    <md-card-content>
    <div id="chart">
      <apexchart type=bar height=350 ref='chart1' :options="chartOptions"
      :series="raw_data[source]"/>
    </div>
    </md-card-content>
  </md-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  components: {
    apexchart: VueApexCharts,
  },
  watch: {
    source() {
      this.$refs.chart1.updateOptions({
        yaxis: {
          title: {
            text: this.yAxisLabel[this.source],
          },
        },
      });
    },
  },
  data() {
    return {
      yAxisLabel: ['kW/h', 'l', 'kW/h', 'km'],
      colors: ['#ffff00', '#0000FF', '#0000FF', '#0000FF'],
      source: 0,
      selectedDate: null,
      raw_data: [[{
        name: 'Strom',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      }], [{
        name: 'Wasser',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      }], [{
        name: 'Heizung',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      }], [{
        name: 'Fahrrad',
        data: [15, 10, 20, 31, 70, 55, 5, 80, 60],
      }]],
      series: null,
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)',
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter(val) {
              return `$ ${val} thousands`;
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>

.datepicker{
    width:48%
}

.card-control {
  display:flex;
  flex-wrap: wrap;
  width: 100%;
}

</style>
