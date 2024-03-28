<script setup lang='ts'>
import Breadcrumb from './breadcrumb/index.vue';
import Setting from './setting/index.vue';
</script>

<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Breadcrumb />
    </div>
    <div class="tabbar_rigth">
      <Setting />
    </div>
  </div>
</template>

<style lang='less' scoped>
.tabbar {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 2px solid #cdcdcd;

  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabbar_rigth {
    display: flex;
    align-items: center;

  }
}
</style>