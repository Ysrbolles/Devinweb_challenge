<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        href="/"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer" 
      >
        <span>
          <i class="bi bi-shop text-2xl" />
        </span>
        <span class="ml-3 text-3xl">Devinweb</span>
      </a>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <a
          class="mr-5 hover:text-gray-900 text-xl cursor-pointer"
          v-for="link in Links"
          :key="link.name"
          :href="link.link"
          >{{ link.name }}</a
        >
      </nav>
      <span class="cursor-pointer">
        <i class="bi bi-bag-heart-fill text-2xl text-gray-900" />
      </span>
    </div>
  </header>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "Navbar",
  setup() {
    let Links = [
      { name: "Home", link: "/" },
      { name: "Shop", link: "/shop" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ];
  
    return { Links };
  },
};
</script>
