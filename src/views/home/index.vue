<script setup lang='ts'>
import { onMounted } from 'vue';
import useUserStore from '@/stores/modules/user';
let userStore = useUserStore()
onMounted(() => {
  // userStore.userInfo();
})
</script>

<template>
  <h1>home</h1>
</template>

<style lang='less' scoped></style>