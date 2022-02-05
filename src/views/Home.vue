<template>
  <div class="home">
    <img height="200" alt="Vue logo" src="../assets/logo.png">
    <HelloWorldTsx msg="HelloWorldTsxCssModule"/>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorldTsx from '@/components/HelloWorldTsx/index.tsx'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorldTsx,
    HelloWorld
  }
})
</script>
