<template>
  <div class="home">
    <HelloWorldTsx msg="HelloWorldTsxCssModule"/>
    <HelloWorld msg="This is an child2 home page"/>
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
