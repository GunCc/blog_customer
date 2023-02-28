<template>
  <div class="layout-default">
    <AppHeader />
    <div class="container">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
<style lang="scss">
.layout-default {
  .container {
    min-height:100vh;
    margin:24px auto;
    width:1080px;
  }
}
</style>
