<template>
  <div class="h-screen bg-gray-200">
    <navbar />
    <section class="text-gray-600 body-font relative" data-aos="fade-left">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        >
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.6697264754107!2d-5.342917483814136!3d35.586542880216456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b42786fb31485%3A0xb1a810462abe4fbb!2sDevinweb%20-%20Agence%20de%20D%C3%A9veloppement%20Logiciels%2C%20Web%2C%20Mobile!5e0!3m2!1sen!2sma!4v1652988261330!5m2!1sen!2sma"
            style="filter: opacity(0.6)"
          ></iframe>
          <div
            class="bg-gray-200 relative flex flex-wrap py-6 rounded shadow-md"
          >
            <div class="lg:w-1/2 px-6">
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs"
              >
                ADDRESS
              </h2>
              <p class="mt-1">
                Wilaya center, Avenue Ali Yaeta, étage 3, n 31, Tétouan
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs"
              >
                EMAIL
              </h2>
              <a class="text-indigo-500 leading-relaxed">contact@devinweb.com</a>
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
              >
                PHONE
              </h2>
              <p class="leading-relaxed">0539966760</p>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/3 md:w-1/2 bg-gray-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              class="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            class="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-gray-900 rounded-xl text-lg"
          >
            Send
          </button>

          <p class="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Layout/Footer.vue";
import Navbar from "../components/Layout/Navbar.vue";
export default {
  components: { Navbar, Footer },
};
</script>
