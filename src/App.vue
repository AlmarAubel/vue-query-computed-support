<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import HelloWorldSimple from "./components/HelloWorldSimple.vue";
import HelloWorldWithQueryKeys from "./components/HelloWorldWithQueryKeys.vue";
import HelloWorldWithEnabled from "./components/HelloWorldWithEnabled.vue";
import HelloWorldInvalidate from "./components/HelloWorldInvalidate.vue";
import HelloWorldMutation from "./components/HelloWorldMutation.vue";
</script>

<template>  
<!-- <HelloWorldSimple />-->
<!--  <hello-world-invalidate/>-->
  <hello-world-mutation/>
  <hr/>
<!--  <hello-world-with-query-keys/>-->
<!--  <hr/>-->
<!--  <hello-world-with-enabled/>-->
  
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
