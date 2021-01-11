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

    <v-row class="px-3">
      <v-col class="d-flex flex-wrap">
        <v-col
          :cols="ischange ? '12' : '3'"
          v-for="(img, index) in isTypes == 'dog' ? imgs : catImgs"
          :key="index"
        >
          <v-img
            :src="img.url"
            :height="ischange ? '600px' : '200px'"
            @click="details(img.url, (img.control = true))"
          />
        </v-col>
        <v-col cols="12" v-if="detailImgUrl">
          <v-img
            :src="detailImgUrl"
            width="100%"
            height="550px"
            v-show="!ischange"
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
      imgs: [
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
      isControl: false,
      detailImgUrl: null,
      species: ["dog", "cat"],
      type: "",
      isTypes: "dog"
    };
  },
  methods: {
    details(imgUrl, control) {
      this.isControl = control;
      this.detailImgUrl = imgUrl;
    },
    change() {
      if (this.type == "cat") {
        this.isTypes = "cat";
      } else return (this.isTypes = "dog");
    }
  }
};
</script>
<style lang="scss" scoped></style>
