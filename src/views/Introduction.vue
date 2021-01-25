<template>
  <div>
    <Header></Header>
    <v-card v-intersect="onIntersect" style="position:relative;">
      <v-img
        :src="this.$route.query.url"
        :class="
          !handler
            ? 'animate__animated animate__fadeOutDown animate__slow'
            : 'animate__animated animate__slideInUp animate__faster'
        "
      />
      <h1 class="white--text img--text img--text--size">旺福</h1>
    </v-card>
    <v-card
      v-intersect="{
        handler: handlerIntersect
      }"
    >
      <v-img
        :src="this.$route.query.url"
        :class="isIntersecting ? 'animate__animated animate__slideInUp ' : ''"
      />
      <h3 class="white--text img--text ">旺福2</h3>
    </v-card>
    <v-card>
      <v-img
        :src="this.$route.query.url"
        :class="
          handler ? 'animate__animated animate__slideInUp animate__faster' : ''
        "
      />
    </v-card>
  </div>
</template>
<script>
import Header from "@/layout/Header.vue";
export default {
  data() {
    return {
      isIntersecting: false,
      handler: false
    };
  },
  components: {
    Header
  },
  methods: {
    onIntersect(entries) {
      this.isIntersecting = entries[0].intersectionRatio < 1;
    },
    handlerIntersect(entries) {
      this.handler = entries[0].intersectionRatio == 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.img--text {
  position: absolute;
  bottom: 40px;
  right: 0px;
  &--size {
    font-size: 144px;
  }
}
.test {
  background-color: hotpink;
}
</style>
