<template>
  <div>
    <Header></Header>
    <v-card style="position:relative;">
      <v-img
        :src="this.$route.query.url"
        :class="
          handler
            ? 'animate__animated animate__fadeOutDown animate__slow'
            : 'animate__animated animate__slideInUp animate__faster'
        "
      />
      <h1 class="white--text img--text  text-h1">旺福</h1>
    </v-card>
    <v-card
      v-intersect="{
        handler: handlerIntersect
      }"
    >
      <v-img :src="this.$route.query.url" />
      <v-col class="white--text img--text" cols="3">
        <h1 class="text-right text-h2 mb-5">旺福</h1>
        <p>
          約一歲多，很親人也很愛玩，熟悉之後可以給摸給抱。
          頭小但身體很大很長，最近疏於管理長出一點肥宅肚肚。
          需要有個精明能幹的經紀人，來幫他安排他的演藝生活。
        </p>
        <v-list dense>
          <v-list-item v-for="(item, i) in items" :key="i" class="pa-0">
            <v-list-item-title class="white--text"
              >{{ item.title }}：{{ item.value }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-col>
    </v-card>
    <v-card>
      <v-img
        :src="this.$route.query.url"
        :class="
          !handler
            ? 'animate__animated animate__slideInUp animate__faster'
            : 'animate__animated animate__fadeOutDown animate__slow'
        "
      />
    </v-card>
    <v-col>
      <p class="primary--text ma-0">推薦明星</p>
      <v-col class="d-flex flex-wrap">
        <v-col cols="3" v-for="(img, index) in dogImgs" :key="index">
          <v-img :src="img.url" height="300px" />
        </v-col>
      </v-col>
    </v-col>
  </div>
</template>
<script>
import Header from "@/layout/Header.vue";
export default {
  data() {
    return {
      isIntersecting: false,
      handler: false,
      items: [
        { title: "品種", value: "米克斯" },
        { title: "種類", value: "貓" },
        { title: "性別", value: "母" },
        { title: "年紀", value: "成年" },
        { title: "結紮", value: "已結紮" },
        { title: "所在地", value: "新北市中和區" }
      ],
      dogImgs: [
        { url: require("@/assets/img/dog/dog-1.jpg") },
        { url: require("@/assets/img/dog/dog-2.jpg") },
        { url: require("@/assets/img/dog/dog-3.jpg") },
        { url: require("@/assets/img/dog/dog-4.jpg") },
        { url: require("@/assets/img/dog/dog-5.jpg") },
        { url: require("@/assets/img/dog/dog-6.jpg") },
        { url: require("@/assets/img/dog/dog-7.jpeg") }
      ]
    };
  },
  components: {
    Header
  },
  methods: {
    // onIntersect(entries) {
    //   console.log(entries[0]);
    //   this.isIntersecting = entries[0].intersectionRatio < 1;
    // },
    handlerIntersect(entries) {
      console.log(entries[0], "as");
      this.handler = entries[0].isIntersecting;
    }
  }
};
</script>
<style lang="scss" scoped>
.img--text {
  position: absolute;
  bottom: 40px;
  right: 40px;
}
.v-list {
  background: none;
}
</style>
