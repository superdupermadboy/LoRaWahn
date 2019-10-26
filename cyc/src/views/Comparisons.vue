<template>
 <md-card>
    <md-card-header >
      <div class="md-title">Detail Analysys</div>
        <div class="card-control">
          <div class="datepicker">
            <md-datepicker v-model="selectedDate">
              <label>Start Date</label>
            </md-datepicker>
            <md-datepicker v-model="selectedDate">
              <label>End Date</label>
            </md-datepicker>
          <div class="md-layout-item source">
            <md-field>
              <md-select v-model="source" name="source" id="source" placeholder="Source">
                <md-option value="power">Strom</md-option>
                <md-option value="water">Wasser</md-option>
                <md-option value="heat">Heizung</md-option>
                <md-option value="bike">Fahrrad</md-option>
              </md-select>
            </md-field>
          </div>
        </div>
      </div>
    </md-card-header>

    <md-card-content>
    <div id="chart">
      <apexchart type=bar height=350 :options="chartOptions" :series="series[0]" />
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
  data() {
    return {
      selectedDate: null,
      series: [[{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      }], [{
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      }], [{
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      }]],
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

.datepicker {
  width: 200px;
  display: flex;
}

.card-control {
  width: 100%;
}

.md-layout-item.source{
  width: 100px;
}

</style>
