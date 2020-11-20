<template>
  <div>
    <v-card class="pa-5">
      <v-text-field
        label="帳號"
        outlined
        v-model="loginParams.email"
      ></v-text-field>
      <v-text-field
        label="密碼"
        outlined
        v-model="loginParams.password"
      ></v-text-field>
      <v-btn @click="login()">登入</v-btn>
      <v-btn text @click="registration = true">註冊</v-btn>
      <v-btn text @click="forget = true">忘記密碼</v-btn>
    </v-card>
    <v-dialog v-model="registration" persistent>
      <v-card class="pa-5">
        <v-card-title>註冊</v-card-title>
        <v-text-field label="姓名" v-model="signupParams.name"></v-text-field>
        <v-text-field label="email" v-model="signupParams.email"></v-text-field>
        <v-text-field
          label="密碼"
          v-model="signupParams.password"
        ></v-text-field>
        <v-text-field
          label="確認密碼"
          v-model="signupParams.confirmPassword"
        ></v-text-field>
        <v-btn @click="registration = false">取消</v-btn>
        <v-btn @click="signup()">註冊</v-btn>
      </v-card>
    </v-dialog>
    <v-dialog v-model="forget">
      <v-card class="pa-5">
        <v-card-title>忘記密碼</v-card-title>
        <v-text-field label="email"></v-text-field>
        <v-btn @click="forget = false">取消</v-btn>
        <v-btn>送出</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { users } from "@/api";
export default {
  data() {
    return {
      loginParams: {
        email: "",
        password: ""
      },
      signupParams: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      registration: false,
      forget: false
    };
  },
  methods: {
    async login() {
      const response = await users.login(this.loginParams);
      console.log(response);
    },
    async signup() {
      const response = await users.signup(this.signupParams);
      console.log(response);
      this.registration = false;
    }
  }
};
</script>
<style lang="scss" scoped></style>
