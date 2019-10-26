<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <router-view/>

    <div class="phone-viewport">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item to="/" exact md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/comparisons" md-label="Posts" md-icon="eco"></md-bottom-bar-item>
        <md-bottom-bar-item to="/achievements" md-label="Achievements" md-icon="favorite">
        </md-bottom-bar-item>
        <md-bottom-bar-item to="/tips" md-label="Tips" md-icon="favorite"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="..." md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import './assets/styles/global.scss';
</style>
