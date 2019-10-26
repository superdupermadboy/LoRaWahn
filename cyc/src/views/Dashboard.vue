<template>
 <md-card>
    <md-card-header>
      <div class="md-title">Your CO2 footprint</div>
    </md-card-header>

    <md-card-content>
       <div id="chart">
      <apexchart type=pie width=380 :options="chartOptions" :series="series" />
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
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: '60%',
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
    };
  },
};
</script>;
