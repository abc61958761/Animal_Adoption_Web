<template>
  <div>
    <div v-if="!isLoading">
      <Header></Header>
      <v-card class="display-relative">
        <v-img
          :src="change ? this.imgs : otherImgs[0]"
          :class="
            handler
              ? 'animate__animated animate__fadeOutDown animate__slower'
              : 'animate__animated animate__slideInUp animate__faster'
          "
        >
        </v-img>
        <h1 class="white--text img--text  text-h1">旺福</h1>
      </v-card>
      <v-card
        v-intersect="{
          handler: handlerIntersect,
          options: {
            threshold: [0, 0.3, 0.4, 0.5, 1]
          }
        }"
      >
        <v-img
          :src="change ? this.imgs : otherImgs[1]"
          :class="
            handler
              ? 'animate__animated animate__slideInUp  animate__faster'
              : 'animate__animated animate__fadeOutDown animate__slower'
          "
        />
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
          :src="change ? this.imgs : otherImgs[2]"
          :class="
            !isIntersecting
              ? 'animate__animated animate__slideInUp animate__faster'
              : 'animate__animated animate__fadeOutDown animate__slower'
          "
          aspect-ratio="1.2"
        />
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
      <v-col>
        <p class="primary--text ma-0">推薦明星</p>
        <v-col class="d-flex flex-wrap cursor">
          <v-col cols="3" v-for="(img, index) in dogImgs" :key="index">
            <v-img
              :src="img.url"
              height="300px"
              @click="handlerClick(img.url)"
              :lazy-src="img.src"
            >
              <template v-slot:placeholder>
                <v-row
                  class="ma-0"
                  align="center"
                  justify="center"
                  style="background:grey;opacity: 0.5;height:100%"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-col>
      </v-col>
    </div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/img/load.gif" style="width:30%" />
    </div>
  </div>
</template>
<script>
import Header from "@/layout/Header.vue";
export default {
  data() {
    return {
      change: false,
      isIntersecting: false,
      handler: false,
      isLoading: true,
      items: [
        { title: "品種", value: "米克斯" },
        { title: "種類", value: "貓" },
        { title: "性別", value: "母" },
        { title: "年紀", value: "成年" },
        { title: "結紮", value: "已結紮" },
        { title: "所在地", value: "新北市中和區" }
      ],
      dogImgs: [
        { url: require("@/assets/img/dog/a1.jpg") },
        { url: require("@/assets/img/dog/b1.jpg") },
        { url: require("@/assets/img/dog/c1.jpg") },
        { url: require("@/assets/img/dog/d1.jpg") },
        { url: require("@/assets/img/dog/h1.jpg") },
        { url: require("@/assets/img/dog/f1.jpg") },
        { url: require("@/assets/img/dog/g1.jpg") },
        { url: require("@/assets/img/dog/dog-3.jpg") }
      ],
      imgs: "",
      otherImgs: []
    };
  },
  components: {
    Header
  },
  methods: {
    handlerIntersect(entries) {
      this.handler = entries[0].intersectionRatio > 0.3;
      this.isIntersecting = entries[0].intersectionRatio > 0.5;
    },
    handlerClick(img) {
      this.imgs = img;
      this.change = true;
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    this.timeout = window.setTimeout(() => {
      this.isLoading = false;
    }, 3500);
  },
  created() {
    this.otherImgs = sessionStorage.getItem("otherImgs").split(",");
  },
  destroyed() {
    sessionStorage.clear();
    clearTimeout(this.timeout);
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
.loading {
  background: gray;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
