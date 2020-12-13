<template>
  <div>
    <v-btn @click="verify">登入</v-btn>
    <h1>Users</h1>
    <div v-for="user of users" :key="user.id">
      {{user}}
    </div>
  </div>
</template>
<script>
import { users } from "@/api";

export default {
  data: () => {
    return {
      users: null
    }
  },
  methods: {
    verify() {
      this.$router.push("/signin");
    }
  },
  async mounted() {
    const response = await users.users();
    this.users = response.data.data;
  }
};
</script>
<style lang="scss" scoped></style>
