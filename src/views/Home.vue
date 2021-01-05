<template>
  <div>
    <Header></Header>
    <v-row class="px-6 pt-12">
      <v-col class="d-flex" cols="12">
        <v-select label="選擇明星類型" dense outlined class="mr-2"></v-select>
        <v-select label="選擇明星公司" dense outlined class="ml-2"></v-select>
        <v-btn color="primary" class="white--text ml-4" depressed>搜尋</v-btn>
      </v-col>
      <v-col class="d-flex justify-space-between align-center py-0">
        <p class="primary--text ma-0">其他明星</p>
        <span>
          <v-icon color="primary" @click="ischange = true"
            >mdi-view-dashboard</v-icon
          >
          <!-- <v-icon>mdi-view-dashboard</v-icon> -->
        </span>
      </v-col>
    </v-row>

    <v-row class="px-3">
      <v-col  class="d-flex flex-wrap">
        <v-col
          :cols="ischange? '12' : '3'"
          v-for="(img, index) in imgs"
          :key="index"
          >
           <v-img :src="img.url" :height="ischange ? '600px' : '200px'"  @click="details(img.url, (img.control = true))"
 />
        </v-col>
         <v-col cols="12">
          <v-img :src="detailImgUrl" width="100%" height="550px" v-show="!ischange"/>
        </v-col>
      </v-col>
       
    </v-row>
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
      isControl: false,
      detailImgUrl: null
    };
  },
  methods: {
    details(imgUrl, control) {
      this.isControl = control;
      this.detailImgUrl = imgUrl;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
