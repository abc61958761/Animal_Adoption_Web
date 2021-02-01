<template>
  <v-col cols="3" class="image--info text-right" v-if="show">
    <h1>花柴</h1>
    <p class="text-left">
      下發結人際長，數用模自該看平朋務麼有司難營：間單我超！安條利相大強據史海在用是決，不道費高機筆。案克有？在快任角是但在性自木出的了之照意三史當有子子，保印世布中年以告臺行水出男中兩而步。人們一這率木在方不議：那者那學指城是地們務好心。
    </p>
    <v-btn outlined color="#757575">更多</v-btn>
  </v-col>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
.image--info {
  position: absolute;
  right: 48px;
  top: 150px;
  color: #757575;
}
</style>
