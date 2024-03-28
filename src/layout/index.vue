<script setup lang='ts'>
import { ref, watch ,nextTick} from 'vue';
import { useRoute } from 'vue-router';
import Header from './logo/index.vue';
import useUserStore from '@/stores/modules/user';
import useSettingStore from '@/stores/modules/setting';

import Menu from './meun/index.vue';

import Tabbar from './tabbar/Tabbar.vue'
let settingStore = useSettingStore();
let userStore = useUserStore();
let $route = useRoute();
let flag = ref(true)
watch(() => settingStore.flag, () => {
  flag.value=false
  nextTick(()=>{
    flag.value=true
  })
})
</script>

<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold: settingStore.fold ? true : false }">
      <Header />
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white" :default-active="$route.path"
          :collapse="settingStore.fold ? true : false">
          <Menu :menuList="userStore.meunRouters"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold: settingStore.fold ? true : false }">
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区 -->
    <div class="layout_main" :class="{ fold: settingStore.fold ? true : false }">
      <router-view v-if="flag"></router-view>
    </div>
  </div>
</template>

<style lang='less' scoped>
@base-meun-min-width: 83px;

.layout_container {
  width: 100%;
  height: 100vh;


  .layout_slider {
    width: 260px;
    height: 100vh;
    background-color: #001529;
    transition: all 0.3s;

    .scrollbar {
      width: calc(100% - 40px);
      height: calc(100vh - 68px);
      padding: 0 20px;

      .el-menu {
        border-right: 0;
      }
    }

    &.fold {
      width: @base-meun-min-width;
      padding: 0 0;

      .scrollbar {
        padding: 0 0;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    top: 0;
    left: 260px;
    width: calc(100% - 260px);
    height: 50px;
    color: black;
    transition: all 0.3s;

    &.fold {
      width: calc(100% - @base-meun-min-width);
      left: @base-meun-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - 260px - 40px);
    height: calc(100% - 50px - 40px);
    left: 260px;
    top: 50px;
    background-color: #f1f1f1;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;

    &.fold {
      width: calc(100% - @base-meun-min-width - 40px);
      left: @base-meun-min-width;
    }
  }
}
</style>