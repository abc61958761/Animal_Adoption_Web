<template>
  <div>
    <Header></Header>
    <v-carousel v-model="model" cycle height="650px">
      <v-carousel-item v-for="(i, index) in carouselImgs" :key="index">
        <v-img :src="i" height="100%">
          <v-col class="carousel--text font-weight-bold" cols="4">
            <h2>旺福</h2>
            <p>
              下發結人際長，數用模自該看平朋務麼有司難營：間單我超！安條利相大強據史海在用是決，不道費高機筆。案克有？在快任角是但在性自木出的了之照意三史當有子子，保印世布中年以告臺行水出男中兩而步。人們一這率木在方不議：那者那學指城是地們務好心。
            </p>
          </v-col>
        </v-img>
      </v-carousel-item>
    </v-carousel>
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
        <v-select
          label="選擇明星性別"
          dense
          outlined
          class="ml-2"
          :items="gender"
          v-model="genderType"
        ></v-select>
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
          class="display-relative cursor"
        >
          <v-img
            :lazy-src="tmpImgs[index + count].url"
            :src="tmpImgs[index + count].url"
            :height="ischange ? '800px' : '300px'"
            @mouseover="
              details(
                tmpImgs[count + index].url,
                (tmpImgs[count + index].control = true),
                $event
              )
            "
            @load="isControl = true"
            @click="toIntroduction(tmpImgs[count + index].more)"
            :class="
              isControl
                ? 'animate__animated animate__wobble animate__delay-2s'
                : ''
            "
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
                style="background:grey;opacity: 0.5;"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <DetailInfo :show="ischange"></DetailInfo>
        </v-col>
        <v-col
          cols="12"
          v-show="!ischange"
          class="detail-image"
          @mouseout="handlerDetail($event)"
        >
          <v-img :src="detailImgUrl"></v-img>
          <DetailInfo :show="!ischange"></DetailInfo>
        </v-col>
      </v-col>
    </v-row>
    <hr />
    <v-col class="d-flex justify-center flex-column align-center">
      <v-btn class="primary--text" text @click="handlerMore" v-if="!more">
        更多明星
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
      <v-progress-circular
        :size="50"
        indeterminate
        color="primary"
        v-if="more"
      ></v-progress-circular>
    </v-col>
  </div>
</template>
<script>
import Header from "@/layout/Header.vue";
import DetailInfo from "@/components/DetailInfo.vue";
export default {
  components: {
    Header,
    DetailInfo
  },
  data() {
    return {
      more: false,
      ischange: false,
      dogImgs: [
        {
          url: require("@/assets/img/dog/h1.jpg"),
          control: false,
          more: [
            require("@/assets/img/dog/h1.jpg"),
            require("@/assets/img/dog/h1.jpg"),
            require("@/assets/img/dog/h1.jpg")
          ]
        },
        {
          url: require("@/assets/img/dog/g1.jpg"),
          control: false,
          more: [
            require("@/assets/img/dog/g1.jpg"),
            require("@/assets/img/dog/g1.jpg"),
            require("@/assets/img/dog/g1.jpg")
          ]
        },
        {
          url: require("@/assets/img/dog/a1.jpg"),
          control: false,
          more: [
            require("@/assets/img/dog/a1.jpg"),
            require("@/assets/img/dog/a2.jpg"),
            require("@/assets/img/dog/a3.jpg")
          ]
        },
        {
          url: require("@/assets/img/dog/b1.jpg"),
          control: false,
          more: [
            require("@/assets/img/dog/b1.jpg"),
            require("@/assets/img/dog/b1.jpg"),
            require("@/assets/img/dog/b1.jpg")
          ]
        },
        {
          url: require("@/assets/img/dog/c1.jpg"),
          control: false,
          more: [
            require("@/assets/img/dog/c1.jpg"),
            require("@/assets/img/dog/c1.jpg"),
            require("@/assets/img/dog/c1.jpg")
          ]
        },
        {
          url: require("@/assets/img/dog/d1.jpg"),
          control: false,
          more: [
            require("@/assets/img/dog/d1.jpg"),
            require("@/assets/img/dog/d1.jpg"),
            require("@/assets/img/dog/d1.jpg")
          ]
        },
        {
          url: require("@/assets/img/dog/f1.jpg"),
          control: false,
          more: [
            require("@/assets/img/dog/f1.jpg"),
            require("@/assets/img/dog/f1.jpg"),
            require("@/assets/img/dog/f1.jpg")
          ]
        }
      ],
      catImgs: [
        { url: require("@/assets/img/cat/cat-1.png"), control: false },
        { url: require("@/assets/img/cat/cat-2.jpg"), control: false },
        { url: require("@/assets/img/cat/cat-3.jpg"), control: false },
        { url: require("@/assets/img/cat/cat-4.jpg"), control: false },
        { url: require("@/assets/img/cat/cat-5.jpg"), control: false },
        { url: require("@/assets/img/cat/cat-4.jpg"), control: false },
        { url: require("@/assets/img/cat/cat-5.jpg"), control: false }
      ],
      tmpImgs: [],
      isControl: false,
      detailImgUrl: null,
      species: ["dog", "cat"],
      type: "dog",
      isTypes: "dog",
      rowCount: 0,
      gender: ["公", "母"],
      model: "",
      carouselImgs: [
        require("@/assets/img/dog/h1.jpg"),
        require("@/assets/img/dog/a3.jpg"),
        require("@/assets/img/dog/dog-3.jpg"),
        require("@/assets/img/cat/cat-4.jpg"),
        require("@/assets/img/cat/cat-2.jpg")
      ],
      genderType: "公",
      timeout: null
    };
  },
  methods: {
    handlerDetail(event) {
      event.target
        .closest(".row")
        .querySelector(".detail-image").style.display = "none";
    },
    details(imgUrl, control, event) {
      this.hideDetail();
      event.target
        .closest(".row")
        .querySelector(".detail-image").style.display = "block";
      this.isControl = control;
      this.detailImgUrl = imgUrl;
    },
    change() {
      this.isTypes = this.type;
      switch (this.isTypes) {
        case "dog":
          this.tmpImgs = this.dogImgs;
          break;
        case "cat":
          this.tmpImgs = this.catImgs;
          break;
      }
      this.rowCount = Math.round(this.tmpImgs.length / 4);
    },
    hideDetail() {
      const allDetailImages = document.getElementsByClassName("detail-image");
      for (const item of allDetailImages) {
        item.style.display = "none";
      }
    },
    toIntroduction(url) {
      this.$router.push({ name: "Introduction", params: { url: url } });
    },
    handlerMore() {
      this.more = true;
      this.timeout = window.setTimeout(() => {
        this.more = false;
        this.tmpImgs = this.dogImgs.concat(this.dogImgs);
        this.rowCount = Math.round(this.tmpImgs.length / 4);
      }, 3000);
    }
  },
  mounted() {
    this.change();
  },
  destroyed() {
    clearTimeout(this.timeout);
  }
};
</script>
<style lang="scss" scoped>
.detail-image {
  display: none;
  position: relative;
  overflow: hidden;
  height: 800px;
}
.carousel--text {
  position: absolute;
  bottom: 30%;
  left: 0px;
}
.display-relative {
  position: relative;
}
.cursor {
  cursor: pointer;
}
</style>
