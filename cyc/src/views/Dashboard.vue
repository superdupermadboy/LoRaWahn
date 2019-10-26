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
      series: [77, 23],
      chartOptions: {
        labels: ['Geschafft', 'Ziel'],
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
        colors: ['#4454AD', '#E40520'],
      },
    };
  },
};
</script>;
