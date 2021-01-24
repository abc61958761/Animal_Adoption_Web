<template>
  <div>
    <Header></Header>
    <v-row class="px-6 pt-12">
      <v-col class="d-flex" cols="12">
        <v-select
          label="選擇明星類型"
          dense
          outlined
          class="mr-2"
          :items="species"
          v-model="type"
        ></v-select>
        <v-select label="選擇明星公司" dense outlined class="ml-2"></v-select>
        <v-btn
          color="primary"
          class="white--text ml-4"
          depressed
          @click="change"
          >搜尋</v-btn
        >
      </v-col>
      <v-col class="d-flex justify-space-between align-center py-0">
        <p class="primary--text ma-0">其他明星</p>
        <span>
          <v-icon color="primary" @click="ischange = true" class="mx-2"
            >mdi-format-list-bulleted-square</v-icon
          >
          <v-icon color="primary" @click="ischange = false"
            >mdi-view-dashboard</v-icon
          >
        </span>
      </v-col>
    </v-row>

    <v-row class="px-3" v-for="count in rowCount" :key="count">
      <v-col class="d-flex flex-wrap">
        <v-col
          :cols="ischange ? '12' : '3'"
          v-for="index in 4"
          :key="index"
        >
          <v-img
            :src="tmpImgs[count+index].url"
            :height="ischange ? '600px' : '200px'"
            @click="details(tmpImgs[count+index].url, (tmpImgs[count+index].control = true), $event)"
            class="animate__animated animate__zoomInUp animate__slow "
          />
        </v-col>
        <v-col cols="12" v-if="!ischange">
          <v-img
            :src="detailImgUrl"
            width="100%"
            height="550px"
            class="detail-image"
          />
        </v-col>
      </v-col>
    </v-row>
    <hr />
    <p class="text-center primary--text">更多明星</p>
  </div>
</template>
<script>
import Header from "@/layout/Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      ischange: false,
      dogImgs: [
        { url: require("@/assets/img/dog/dog-1.jpg"), control: false },
        { url: require("@/assets/img/dog/dog-2.jpg"), control: false },
        { url: require("@/assets/img/dog/dog-3.jpg"), control: false },
        { url: require("@/assets/img/dog/dog-4.jpg"), control: false },
        { url: require("@/assets/img/dog/dog-5.jpg"), control: false },
        { url: require("@/assets/img/dog/dog-6.jpg"), control: false },
        { url: require("@/assets/img/dog/dog-7.jpeg"), control: false }
      ],
      catImgs: [
        { url: require("@/assets/img/cat/cat-1.png"), control: false },
        { url: require("@/assets/img/cat/cat-2.jpg"), control: false },
        { url: require("@/assets/img/cat/cat-3.jpg"), control: false },
        { url: require("@/assets/img/cat/cat-4.jpg"), control: false },
        { url: require("@/assets/img/cat/cat-5.jpg"), control: false }
      ],
      tmpImgs: [],
      isControl: false,
      detailImgUrl: null,
      species: ["dog", "cat"],
      type: "dog",
      isTypes: "dog",
      rowCount: 0
    };
  },
  methods: {
    details(imgUrl, control, event) {
      this.hideDetail();
      event.target.closest(".row").querySelector(".detail-image").style.display='block';

      this.isControl = control;
      this.detailImgUrl = imgUrl;
    },
    change() {
      this.isTypes = this.type;
      switch (this.isTypes) {
        case 'dog':
          this.tmpImgs = this.dogImgs;
          break;
        case 'cat':
          this.tmpImgs = this.catImgs;
          break;
        default:
          break;
      }
      this.rowCount = Math.round(this.tmpImgs.length/4);
    },
    hideDetail() {
      const allDetailImages = document.getElementsByClassName("detail-image");
      for (const item of allDetailImages) {
        item.style.display = 'none';
      }
    }
  },
  mounted() {
    this.change();
  }
};
</script>
<style lang="scss" scoped>
.detail-image {
  display: none;
}
</style>
