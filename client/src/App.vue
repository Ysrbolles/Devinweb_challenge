<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="h-screen w-screen bg-gray-200" >
    <Navbar />
    <Home />
    <Content />
    <Categories />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Layout/Navbar.vue";
import Home from "./Views/Home.vue";
import Content from "./components/HomeSection/Content.vue";
import Categories from "./components/HomeSection//Categories.vue";
import Footer from "./components/Layout/Footer.vue"

export default {
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
