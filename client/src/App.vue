<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="h-vh  w-screen  bg-cover bg-gray-200 bg-[url('https://images.unsplash.com/flagged/photo-1553802922-e345434156e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80')]" >
    <Navbar />
    <Home />
  </div>
</template>

<script>
import Navbar from "./components/Layout/Navbar.vue";
import Home from "./Views/Home.vue";

export default {
  name: "App",

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  /* background-color: rgb(210, 213, 219); */
  height: 100%;
}
</style>
