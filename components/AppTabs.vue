<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="推荐" name="first"></el-tab-pane>
    <el-tab-pane label="咨询" name="second"></el-tab-pane>
    <el-tab-pane label="热板" name="third"></el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
