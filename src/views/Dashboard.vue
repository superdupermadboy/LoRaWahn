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

      <md-card-content class="barChart">
        <img src="../assets/images/Balkendiagramm.png" />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import Barometer from '../assets/images/Barometer.svg';

export default {
  components: {
    Barometer,
  },
};
</script>

<style scoped>
.barChart {
  width: 100%;
}
</style>;
