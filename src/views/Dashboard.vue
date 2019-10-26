<template>
  <div>
   <md-card>
      <md-card-header>
        <div class="md-title">Your CO2 footprint</div>
      </md-card-header>

      <md-card-content>
        <div id="chart">
           <BalkendiagrammStartseite />
        </div>
      </md-card-content>
    </md-card>

    <md-card>
      <md-card-header>
        <div class="md-title">Your CO2 footprint</div>
      </md-card-header>

      <md-card-content>
        <Barometer />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import BalkendiagrammStartseite from '../assets/images/Balkendiagramm_Startseite.svg';
import Barometer from '../assets/images/Barometer.svg';

export default {
  components: {
    BalkendiagrammStartseite,
    Barometer,
  },
};
</script>;
