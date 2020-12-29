<template>
  <div>
    <v-toolbar color="#344550"
      ><v-toolbar-title class="font-weight-bold white--text mx-auto"
        >動物明星經紀公司</v-toolbar-title
      ></v-toolbar
    >
    <v-carousel v-model="model" cycle>
      <v-carousel-item v-for="(i, index) in test" :key="index">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ model }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: "",
      test: ["1", "2", "3", "3", "3"]
    };
  }
};
</script>
