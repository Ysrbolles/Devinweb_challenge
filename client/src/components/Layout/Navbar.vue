<template>
  <div
    class="bg-gray-900 text-gray-100 py-8 px-6 rounded-b-3xl shadow md:flex justify-between items-center"
  >
    <div class="flex items-center cursor-pointer hover:text-gray-300">
      <span class="text-gray-100 hover:text-gray-300 text-xl mr-1">
        <i class="bi bi-shop text-2xl" />
      </span>
      <h1 class="text-3xl">DevInWeb</h1>
    </div>
    <span @click="openmenu()" class="absolute md:hidden right-6 top-8 cursor-pointer text-4xl" >
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']" />
    </span>
    <ul
      class="md:flex md:items-center md:px-0 px-8 md:pb-0 pb-8 md:static absolute bg-gray-900  rounded-b-3xl md:w-auto w-full top-19 duration-700 ease-in"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.name">
        <a
          :href="link.link"
          class="text-xl hover:text-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >{{ link.name }}</a
        >
      </li>
      <span class="cursor-pointer hover:text-gray-300">
          <li class="bi bi-bag-heart-fill text-2xl"/>
      </span>
    </ul>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "Navbar",
  setup() {
    let open = ref(false);
    let Links = [
      { name: "Home", link: "#" },
      { name: "Shop", link: "#" },
      { name: "About", link: "#" },
      { name: "Contact", link: "#" },
    ];
    function openmenu () {
        open.value = !open.value;
    }
    return { Links, open , openmenu};
  },
};
</script>
