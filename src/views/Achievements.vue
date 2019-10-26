<template>
  <div>
    <AchievementBar icon-name="waves" percent="w40" right-percent="w60"
    text="Du musst mehr auf deinen Heizkosten achten"/>
    <AchievementBar icon-name="power" percent="w80" right-percent="w20"
    text="Bist du eine Batterie oder wo sparst du dir den Strom auf?"/>
    <AchievementBar icon-name="euro" percent="w70" right-percent="w30"
    text="Du hast schon 1000 Euro gespart und das Klima verbessert!"/>
    <AchievementBar icon-name="directions_bike" percent="w90" right-percent="w10"
    text="Nur noch ein paar Kilometer und du gehörst zu den besten!"/>
  </div>
</template>

<script>
import AchievementBar from '../components/AchievementBar.vue';

export default {
  components: {
    AchievementBar,
  },
};
</script>
