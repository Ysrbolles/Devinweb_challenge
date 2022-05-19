<script setup>
import Navbar from "./components/Layout/Navbar.vue";
import Home from "./Views/Home.vue";
import Content from "./components/HomeSection/Content.vue";
import Categories from "./components/HomeSection//Categories.vue";
import Footer from "./components/Layout/Footer.vue"

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
