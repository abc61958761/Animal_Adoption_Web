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
      <v-col class="d-flex flex-wrap" cols="12">
        <v-col :cols="ischange ? '12' : '3'"
          ><v-card><v-img src="@/assets/img/dog/dog-4.jpg"/></v-card
        ></v-col>
        <v-col :cols="ischange ? '12' : '3'"
          ><v-card><v-img src="@/assets/img/dog/dog-4.jpg"/></v-card
        ></v-col>
        <v-col :cols="ischange ? '12' : '3'"
          ><v-card><v-img src="@/assets/img/dog/dog-4.jpg"/></v-card
        ></v-col>
        <v-col :cols="ischange ? '12' : '3'"
          ><v-card><v-img src="@/assets/img/dog/dog-4.jpg"/></v-card
        ></v-col>
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
      ischange: false
    };
  }
};
</script>
<style lang="scss" scoped></style>
