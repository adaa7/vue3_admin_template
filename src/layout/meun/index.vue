<script setup lang='ts'>
import { useRouter } from 'vue-router';
defineProps(['menuList']);
let $router = useRouter();
function toRoute(vc: any) {
  if (vc.index) {
    $router.push(vc.index)
  }

}
</script>
<script lang='ts'>
export default {
  name: 'Meun'
}
</script>

<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <template v-if="!item.meta.hidden">
      <el-menu-item v-if="!item.children" @click="toRoute" :index="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-if="!item.meta.hidden">
      <el-menu-item v-if="item.children && item.children.length == 1" :key="item.children[0].path"
        :index="item.children[0].path" @click="toRoute">
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-if="!item.meta.hidden">
      <el-sub-menu v-if="item.children && item.children.length > 1" :key="item.path" :index="item.path"
        @click="toRoute">

        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Meun :menuList="item.children"></Meun>
      </el-sub-menu>
    </template>



  </template>
</template>

<style lang='less' scoped>
  
</style>