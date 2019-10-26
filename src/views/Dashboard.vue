<template>
  <div>
   <md-card>
      <md-card-header>
        <div class="md-title">Deine Nachhaltigkeit</div>
      </md-card-header>

      <md-card-content>
          <Barometer />
      </md-card-content>
    </md-card>

    <md-card>
      <md-card-header>
        <div class="md-title">Du im vergleich</div>
      </md-card-header>

      <md-card-content>
        <BalkendiagrammStartseite />
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
