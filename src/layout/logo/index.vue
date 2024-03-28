<script setup lang='ts'>
import { ref } from 'vue';
let imgSrc = ref('@/assets/notData.png')
</script>

<template>
  <div>
    <!-- <img :src="imgSrc" alt=""> -->
    <h1>硅谷甄选运营平台</h1>
  </div>
</template>

<style lang='less' scoped>
div {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  height: 24px;

  h1 {
    color: white;
    font-size: 20px;
    overflow: hidden;
  }
}
</style>