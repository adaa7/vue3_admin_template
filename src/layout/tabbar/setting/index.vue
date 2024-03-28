<script setup lang='ts'>
import useSettingStores from '@/stores/modules/setting';
import useUserStores from '@/stores/modules/user';
let settingStores = useSettingStores()
let userStore = useUserStores();
import { useRouter,useRoute } from 'vue-router';
let changeSetting = () => {
  settingStores.flag = !settingStores.flag
}
const errorHandler = () => true
const fullScreen = () => {
  let full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
let $router = useRouter()
let $route = useRoute()
const logout =async () => {
  // alert(111)
  await userStore.userLogout();

  $router.push({ path: '/login', query: { redirect :$route.path} });
}
</script>

<template>
  <el-button icon="Refresh" size="default" circle @click="changeSetting" />
  <el-button icon="FullScreen" size="default" circle @click="fullScreen" />
  <el-button icon="Setting" size="default" circle />
  <!-- <img :src="userStore.avatar" alt="" style="width: 46px;height: 47px; margin: 0 10px;"> -->
  <el-avatar :size="40" src="https://empty" @error="errorHandler" style="margin: 0 10px;">
    <img :src="userStore.avatar" />
  </el-avatar>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登入</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang='less' scoped></style>