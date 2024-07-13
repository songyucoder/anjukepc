<template>
  <div class="app-layout">
      <app-header />
      <div class="flex mt-5">
          <RouterView />
        <!-- <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/tests">组件测试</router-link> -->
      </div>
      <app-footer />
  </div>
</template>

<script lang="ts" setup>
import AppFooter from './Footer.vue'
import AppHeader from './Header.vue'
// import Home from '@/views/Home.vue'

</script>

<style lang="less" scoped>
.app-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
