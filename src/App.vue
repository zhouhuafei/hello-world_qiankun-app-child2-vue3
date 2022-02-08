<template>
  <el-card style="margin: 10px;font-size: 12px;">
    <template v-slot:header>
      <div style="text-align: left;">子应用child2的跳转入口</div>
    </template>
    <el-button :icon="Link" @click="$router.push({name:'Home'})">child2 - Home</el-button>
    <el-button :icon="Link" @click="$router.push({name:'About'})">child2 - About</el-button>
  </el-card>

  <router-view />
</template>

<script setup lang="ts">
import { Link } from '@element-plus/icons-vue'
</script>

<style lang="scss">
  @import "@/scss/common";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
