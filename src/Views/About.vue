<template>
  <div class="bg-gray-200">
    <navbar />
 
    <section class="text-gray-600 body-font bg-gray-200" data-aos="zoom-in-right">
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="inline-block w-8 h-8 text-gray-400 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path
              d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
            ></path>
          </svg>
          <p class="leading-relaxed text-lg">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware. Man bun next level coloring book skateboard
            four loko knausgaard. Kitsch keffiyeh master cleanse direct trade
            indigo juice before they sold out gentrify plaid gastropub normcore
            XOXO 90's pickled cindigo jean shorts. Slow-carb next level
            shoindigoitch ethical authentic, yr scenester sriracha forage
            franzen organic drinking vinegar.
          </p>
          <span
            class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"
          ></span>
          <h2
            class="text-gray-900 font-medium title-font tracking-wider text-sm"
          >
            HOLDEN CAULFIELD
          </h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font" data-aos="flip-left">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"
          >
            OUR TEAM
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2" v-for="item in Team" :key="item.id">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                :src="item.image"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                 {{item.name}}
                </h2>
                <h3 class="text-gray-500 mb-3">{{item.position}}</h3>
                <p class="mb-4">
                  {{item.bio}}
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
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

  setup() {
    let Team = [
      {
        id: "1",
        name: "Alper Kamu",
        position: "UI Developer",
        bio: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        image:
          "https://images.unsplash.com/photo-1598916451261-c8f1d61d24a2?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940",
      },
      {
        id: "2",
        name: "Holden Caulfield",
        position: "Designer",
        bio: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        image:
          "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942",
      },

      {
        id: "3",
        name: "Atticus Finch",
        position: "Designer",
        bio: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        image:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940",
      },
      {
        id: "4",
        name: "Henry Letham",
        position: "UI Developer",
        bio: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        image:
          "https://images.unsplash.com/photo-1583391265517-35bbdad01209?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587",
      },
    ];
    return { Team };
  },
};
</script>
