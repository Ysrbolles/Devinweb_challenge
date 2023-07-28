<template>
  <div class="h-full w-screen bg-gray-200">
    <navbar />
    <ProductsDetailsInfo />
    <suggested />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Layout/Footer.vue';
import Navbar from '../components/Layout/Navbar.vue';
import ProductsDetailsInfo from "../components/Products/ProductsDetailsInfo.vue";
import Suggested from '../components/Products/Suggested.vue';
export default {
  name: "ProductsDetails",
  components: {
    ProductsDetailsInfo,
    Navbar,
    Footer,
    Suggested
  }
};
</script>
