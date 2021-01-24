<template>
  <div>
    <Header></Header>
    <v-img :src="this.$route.query.url" v-show="!test" />
    <v-img
      :src="this.$route.query.url"
      :class="viewHeight ? 'animate__animated animate__bounceInUp' : ''"
    />
  </div>
</template>
<script>
import Header from "@/layout/Header.vue";
export default {
  data() {
    return {
      viewHeight: false
    };
  },
  components: {
    Header
  }
};
</script>
