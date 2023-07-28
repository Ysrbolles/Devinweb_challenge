<template>
  <section class="text-gray-600 body-font bg-gray-200" >
    <div
      class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center lg:justify-between"
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"  data-aos="fade-up">
        <img
          class="object-cover object-center rounded-full"
          alt="hero"
          src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
        />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
         data-aos="fade-down"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Before they sold out <br class="hidden lg:inline-block" />readymade
          gluten
        </h1>
        <p class="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <div class="flex justify-center">
          <button
            class="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-gray-900 text-lg rounded-xl"
          >
            Shop Now!
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>
