<template>
  <div class="h-screen w-screen bg-gray-200">
    <products-layout />
  </div>
</template>

<script>
import Footer from "../components/Layout/Footer.vue";
import Navbar from "../components/Layout/Navbar.vue";
import ProuctsList from "../components/Products/ProuctsList.vue";
import SideFilter from "../components/Products/SideFilter.vue";
import ProductsLayout from "../components/Products/ProductsLayout.vue";

export default {
  name: "products",
  components: { Navbar, Footer, ProuctsList, SideFilter, ProductsLayout },
};
</script>
