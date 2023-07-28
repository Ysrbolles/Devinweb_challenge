<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Home from "./Views/Home.vue";
export default {
  components: { Home },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
