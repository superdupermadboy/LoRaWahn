<template>
  <div>
    <AchievementBar icon-name="waves" percent="w40" right-percent="w60"/>
    <AchievementBar icon-name="power" percent="w80" right-percent="w20"/>
    <AchievementBar icon-name="euro" percent="w70" right-percent="w30"/>
    <AchievementBar icon-name="directions_bike" percent="w90" right-percent="w10"/>
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
