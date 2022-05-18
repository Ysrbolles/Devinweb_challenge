<template>
  <section class="text-gray-600 body-font bg-gray-200">
    <div class="container px-5 py-24 mx-auto" >
      <div class="flex flex-wrap -m-4" >
        <div class="p-4 lg:w-1/3" v-for="item in Categories" :key="item.id">
          <div
            class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
          >
            <img
              class="h-80 rounded w-full object-cover object-center mb-6"
              :src="item.image"
              alt="content"
            />
            <h2
              class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
            >
              CATEGORY
            </h2>
            <h1
              class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
            >
              {{item.title}}
            </h1>
            <p class="leading-relaxed mb-3">
             {{item.subtitle}}
            </p>
            <a class="text-indigo-500 inline-flex items-center cursor-pointer"
              >Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    let Categories = [
      {
        id: "1",
        title: "Styles for Outdoor Explorers",
        subtitle: "Mens At Least 20% Sustainable Material",
        description: "",
        image: "https://images.unsplash.com/photo-1490036293550-29261601ccb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      },
      {
        id: "2",
        title: "Trail Running Essentials",
        subtitle: "Trail Running",
        description: "",
        image: "https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376",
      },
      {
        id: "3",
        title: "Picks for Peak Dads",
        subtitle: "Father's Day",
        description: "",
        image: "https://images.unsplash.com/photo-1576921876279-4e1b7304015d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374",
      },
    ];

    return { Categories };
  },
};
</script>
