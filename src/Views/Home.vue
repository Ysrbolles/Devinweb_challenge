<script setup>
import Navbar from "../components/Layout/Navbar.vue";
import Footer from "../components/Layout/Footer.vue";
import Content from "../components/HomeSection/Content.vue";
import Categories from "../components/HomeSection//Categories.vue";
import Hero from "../components/HomeSection/Hero.vue";
</script>

<template>
  <div class="h-screen w-screen bg-gray-200">
    <Navbar />
    <Hero />
    <Content />
    <Categories />
    <Footer />
  </div>
</template>

<script>
export default {
  components: { Hero },
  name: "Home",
};
</script>
