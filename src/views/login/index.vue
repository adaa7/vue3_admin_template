<script setup lang='ts'>
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import useUserStore from '@/stores/modules/user';
import { useRouter, useRoute } from 'vue-router';
import { ElNotification } from 'element-plus';
import { getTime } from '@/utils/time';
let userStore = useUserStore()
let $router = useRouter()
let $route = useRoute()
let loginForms = ref()
let loading = ref(false);
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})
async function login() {
  await loginForms.value.validate()
  loading.value = true
  userStore.userLogin(loginForm).then((value:any) => {
    $router.push({path:($route.query.redirect as any)||'/'});
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI，${getTime()}好`
    })
  }, (error:any) => {
    ElNotification({
      type: 'error',
      message: (error as Error).message,

    })
    loading.value = false
  })
}
let rules = reactive({
  username: [{ required: true, min: 5, max: 10, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, min: 6, max: 10, message: '密码长度至少6位', trigger: 'blur' }]
})
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎进入</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">登入</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang='less' scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;


  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    .login_btn {
      width: 100%;
    }

    h1 {
      font-size: 40px;
      color: white;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }
  }
}
</style>