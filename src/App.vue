<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">

    <div class="header">
      <h3 align="center">{{ $route.name }}</h3>
    </div>

    <router-view/>

    <div class="phone-viewport">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item to="/" exact md-icon="equalizer"></md-bottom-bar-item>
        <md-bottom-bar-item to="/dataanalysis" md-icon="list_alt"></md-bottom-bar-item>
        <md-bottom-bar-item to="/achievements" md-icon="grade">
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
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: #4454AD, // The primary color of your application
  accent: #E40520 // The accent or secondary color
));

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
