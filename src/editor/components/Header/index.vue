<script setup lang="ts">

</script>

<template>
  <t-head-menu>
    <t-menu-item value="item1">
      已选内容
    </t-menu-item>
    <t-menu-item value="item2">
      菜单内容一
    </t-menu-item>
    <t-menu-item value="item3">
      菜单内容二
    </t-menu-item>
    <template #operations>
      <a href="javascript:;"><icon class="t-menu__operations-icon" name="search" /></a>
      <a href="javascript:;"><icon class="t-menu__operations-icon" name="notification-filled" /></a>
      <a href="javascript:;"><icon class="t-menu__operations-icon" name="home" /></a>
    </template>
  </t-head-menu>
</template>

<style lang="scss">
@import url('./style.scss')
</style>
