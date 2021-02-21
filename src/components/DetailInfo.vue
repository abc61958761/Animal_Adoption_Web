<template>
  <v-col cols="3" class="image--info text-right" v-if="show">
    <h1>貴賓</h1>
    <p class="text-left">
      貴賓犬原為狩獵犬，尤其擅常水中拾獵。牠們反應機靈、樂於討好，因而發展為表演犬，跟著馬戲團巡迴演出。此犬種自從被上流社會，尤其是法國貴族發現後，就因牠討喜的性格和造型多變的毛髮深受喜愛。
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
