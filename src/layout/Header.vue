<template>
  <div>
    <v-toolbar color="#344550" @click="back" class="cursor">
      <v-toolbar-title class="font-weight-bold white--text mx-auto"
        >動物明星經紀公司</v-toolbar-title
      >
    </v-toolbar>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      if (this.$route.path == "/introduction") this.$router.go(-1);
    }
  }
};
</script>
