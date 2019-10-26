<template>
  <md-card >
    <md-card-content>
      <div>
        <div class="achievement_block">
          <md-icon>{{ iconName }}</md-icon>
          <div class="chart">
            <div class="left" v-bind:class="percent"></div>
            <div class="right" v-bind:class="rightPercent"></div>
            <div class="indicator" v-bind:class="percent  "></div>
          </div>
        </div>
        <div class="text">
          {{ text }}
        </div>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: ['iconName', 'percent', 'rightPercent', 'text'],
};
</script>

<style scoped lang="scss">
.achievement_block {
  height: 50px;
  display: flex;

  .chart {
    flex-grow: 1;
    display: flex;
    position: relative;
    padding: 0 10px;

    > div {
      height: 100%;
    }

    .left {
      background-color: #E40520;
    }
    .right {
      background-color: #4454AD;
    }

    .indicator {
      position: absolute;
      top: -10px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid black;
    }
  }
}

.text {
  margin-left: 34px;
  margin-top: 5px;
}

.w10 {
  width: 10%;

  &.indicator {
    left: calc(40% - 2px);
  }
}
.w20 {
  width: 20%;

  &.indicator {
    left: calc(80% - 4px);
  }
}
.w30 {
  width: 30%;

  &.indicator {
    left: calc(80% - 6px);
  }
}
.w40 {
  width: 40%;

  &.indicator {
    left: calc(40% - 8px);
  }
}
.w50 {
  width: 50%;

  &.indicator {
    left: calc(50% - 10px);
  }
}
.w60 {
  width: 60%;

  &.indicator {
    left: calc(80% - 12px);
  }
}
.w70 {
  width: 70%;

  &.indicator {
    left: calc(70% - 14px);
  }
}
.w80 {
  width: 80%;

  &.indicator {
    left: calc(80% - 16px);
  }
}
.w90 {
  width:90%;

  &.indicator {
    left: calc(90% - 18px);
  }
}
</style>;
