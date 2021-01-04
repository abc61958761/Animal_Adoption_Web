<template>
  <div>
    <v-toolbar color="#344550"
      ><v-toolbar-title class="font-weight-bold white--text mx-auto"
        >動物明星經紀公司</v-toolbar-title
      ></v-toolbar
    >
    <v-carousel v-model="model" cycle height="650px">
      <v-carousel-item v-for="(i, index) in test" :key="index">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: "",
      test: [
        require("@/assets/img/dog/dog-1.jpg"),
        require("@/assets/img/dog/dog-2.jpg"),
        require("@/assets/img/dog/dog-3.jpg"),
        require("@/assets/img/cat/cat-5.jpg"),
        require("@/assets/img/cat/cat-2.jpg")
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.carousel--text {
  position: absolute;
  bottom: 30%;
  left: 0px;
}
</style>
