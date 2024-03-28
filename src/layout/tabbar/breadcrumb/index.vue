<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'
import useSettingStore from '@/stores/modules/setting';
import { useRoute } from 'vue-router';
let $route = useRoute();
let SettingStore = useSettingStore();
function changeIcon() {
  SettingStore.fold = !SettingStore.fold
}
console.log($route.meta.title);

</script>

<template>
  <el-icon size="21px" style="margin-right: 10px;" @click="changeIcon">
    <Expand v-show="SettingStore.fold" />
    <Fold v-show="!SettingStore.fold" />
  </el-icon>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="item.path" v-show="item.meta.title">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang='less' scoped></style>