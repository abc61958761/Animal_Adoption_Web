<template>
    <div>
        <v-card class="pa-5">
            <v-text-field label="帳號" outlined v-model="account"></v-text-field>
            <v-text-field label="密碼" outlined v-model="password"></v-text-field>
            <v-btn text @click="registration=true">註冊</v-btn>
            <v-btn text @click="forget=true">忘記密碼</v-btn>
        </v-card>
        <v-dialog v-model="registration" persistent>
           <v-card class="pa-5">
               <v-card-title>註冊</v-card-title>
               <v-text-field label="帳號"></v-text-field>
               <v-text-field label="密碼"></v-text-field>
               <v-btn @click="registration=false">取消</v-btn>
               <v-btn>註冊</v-btn>
           </v-card>
        </v-dialog>
        <v-dialog v-model="forget">
            <v-card class="pa-5"> 
               <v-text-field label="email"></v-text-field>
               <v-btn @click="forget=false">取消</v-btn>
               <v-btn>送出</v-btn>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            account:'',
            password:'',
            registration:false,
            forget:false
        }
    }
    
}
</script>
<style lang="scss" scoped>

</style>