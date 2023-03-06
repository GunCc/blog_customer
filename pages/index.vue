<template>
  <div class="index-wrap flex">
    <!-- 主要区域内容 -->
    <section class="index-main">
      <!-- 轮播 -->
      <IndexMain />
    </section>
    <!-- 侧边栏内容 -->
    <aside class="index-aside ml-8">
      <AsideUserInfo />
      <AppAsideWrap />
    </aside>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.index-wrap {
  .index-main {
    flex: 1;
  }
  .index-aside {
    width: 280px;
  }
}
</style>
