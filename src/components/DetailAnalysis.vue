<template>
 <md-card>
    <md-card-header >
      <div class="md-title">Zeitlicher Verlauf</div>
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
        <div class="md-layout-item source">
          <md-field>
            <md-select v-model="source" name="source" id="source" placeholder="Source">
              <md-option value=0>Strom</md-option>
              <md-option value=1>Wasser</md-option>
              <md-option value=2>Heizung</md-option>
              <md-option value=3>Fahrrad</md-option>
            </md-select>
          </md-field>
        </div>
        <div>
        Vergleiche:
        <md-checkbox v-model="showDataMannheim">Mannheim</md-checkbox>
        <md-checkbox v-model="showDataComunity">Comunity</md-checkbox>
        </div>
      </div>
    </md-card-header>

    <md-card-content>
    <div id="chart">
      <apexchart type=line height=350 ref='chart1' :options="chartOptions"
      :series="series[source]"/>
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
  create() {
    this.$refs.chart1.toggleSeries('Mannheim');
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
    showDataMannheim() {
      if (this.showDataMannheim) {
        this.series[this.source] = [...this.series[this.source], {
          name: 'Mannheim',
          data: [10, 11, 12, 13, 4, 15, 16, 17, 18],
        }];
        this.$refs.chart1.refresh();
      } else {
        this.series[this.source] = this.series[this.source].filter(s => s.name !== 'Mannheim');
        this.$refs.chart1.refresh();
      }
    },
    showDataComunity() {
      if (this.showDataComunity) {
        this.series[this.source] = [...this.series[this.source], {
          name: 'Comunity',
          data: [20, 18, 16, 14, 22, 24, 18, 17, 23],
        }];
        this.$refs.chart1.refresh();
      } else {
        this.series[this.source] = this.series[this.source].filter(s => s.name !== 'Comunity');
        this.$refs.chart1.refresh();
      }
    },
  },
  data() {
    return {
      showDataMannheim: false,
      showDataComunity: false,
      yAxisLabel: ['kW/h', 'l', 'kW/h', 'km'],
      source: 0,
      selectedDate: null,
      series: [[{
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
      chartOptions: {
        plotOptions: {
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        fill: {
          opacity: 1,
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

.md-layout-item.source{
  width: 30%;
  flex-grow: 0;
}

</style>
