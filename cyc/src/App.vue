<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <div class="header">
      <h3 align="center">{{ $route.name }}</h3>
    </div>

    <router-view/>

    <div class="phone-viewport">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item to="/" exact md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/comparisons" md-label="Posts" md-icon="eco"></md-bottom-bar-item>
        <md-bottom-bar-item to="/achievements" md-label="Achievements" md-icon="favorite">
        </md-bottom-bar-item>
        <md-bottom-bar-item to="/tips" md-icon="eco"></md-bottom-bar-item>
        <md-bottom-bar-item md-icon="more_horiz"></md-bottom-bar-item>
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

.bottomBar .md-icon {
  font-size:32px!important;
}
</style>
