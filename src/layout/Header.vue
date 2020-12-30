<template>
  <div>
    <v-toolbar color="#344550"
      ><v-toolbar-title class="font-weight-bold white--text mx-auto"
        >動物明星經紀公司</v-toolbar-title
      ></v-toolbar
    >
    <v-carousel v-model="model" cycle>
      <v-carousel-item v-for="(i, index) in test" :key="index">
        <v-img :src="i" height="100%"></v-img>
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
