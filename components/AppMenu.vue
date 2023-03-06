<template>
  <el-menu
    :default-active="activeIndex"
    class="app-menu"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">前端</el-menu-item>
    <el-menu-item index="3">后端</el-menu-item>
    <el-menu-item index="4">关于</el-menu-item>
    <div class="flex-grow" />
    <el-input v-model="input" placeholder="Please input" />
    <el-switch v-model="value1" />
    <!-- <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const input = ref("");
const value1 = ref(true);
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss">
.flex-grow {
  flex-grow: 1;
}

.app-menu {
  height: 48px;
}
</style>
