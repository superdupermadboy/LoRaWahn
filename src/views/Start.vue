<template>
    <div class="startPage" v-on:click="goToDashboard">
      <div>
        <img class="logo" src="../assets/images/Logo_CostSaver_weiß.png"/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Start',

  methods: {
    goToDashboard() {
      this.$router.push('dashboard');
    },
  },
};
</script>

<style scoped lang="scss">
.startPage {
  z-index: 2;
  margin: auto;
  background-color: #4454AD;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
  }
}

.logo {
  width: 80%;
}
</style>
