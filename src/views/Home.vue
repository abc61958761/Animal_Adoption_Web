<template>
  <div>
    <v-btn @click="verify">登入</v-btn>
  </div>
</template>
<script>
export default {
  methods: {
    verify() {
      this.$router.push("/signin");
    }
  }
};
</script>
<style lang="scss" scoped></style>
