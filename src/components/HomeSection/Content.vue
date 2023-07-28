<template>
  <section class="text-gray-600 body-font bg-gray-200 cursor-pointer">
    <div class="container px-5 py-24 mx-auto" >
      <div class="flex flex-col text-center w-full mb-20" data-aos="fade-right">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          THE NEW REACT <br class="hidden lg:inline-block" />INFINITY RUN
          FLYKNIT 3
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Tested, designed, and created to keep you running.
        </p>
      </div>

      <div class="flex flex-wrap -m-4" data-aos="fade-left">
        <div class="xl:w-1/4 md:w-1/2 p-4" v-for="item in Stroedata" :key="item.id">
        <a href="/shop/1">
             <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-60 rounded w-full object-cover object-center mb-6"
              :src="item.image"
              alt="content"
            />
            <h3
              class="tracking-widest text-indigo-500 text-xs font-medium title-font"
            >
              {{item.subtitle}}
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              {{item.title}}
            </h2>
            <p class="leading-relaxed text-base">
             {{item.description.substring(0, 80)}}...
            </p>
          </div>
        </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Content',
  setup() {
    let Stroedata = [
      {
        id: "1",
        title: "Nike React Miler 3",
        subtitle: "Men's Road Running Shoes",
        description: "Cushioned and comfortable, just like every run should feel. The Nike React Miler 3 gives you a soft and smooth ride as your feet hit the pavement. We added stability at the heel for a secure sensation, while durable traction helps keep you going on runs long and short.",
        image:
          "https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825",
      },
      {
        id: "2",
        title: "Nike Air Zoom Vomero 16",
        subtitle: "Men's Road Running Shoes",
        description: "A trusted favorite for your daily training returns. This version adds responsive ZoomX foam cushioning, bringing an energetic pop to your stride that’s perfect for high mileage on the road. It’s super lightweight, with plenty of stretch and ventilation through the upper. Looking for the right amount of support? We’ve got you covered with an adjustable midfoot band and a stable clip at the heel.",
        image:
          "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80",
      },
      {
        id: "3",
        title: "Nike React Infinity  Flyknit 3",
        subtitle: "Men's Road Running Shoes",
        description: "Still our most tested shoe, made to help you stay after those lofty running goals. The Nike React Infinity Run 3 feels soft and stable with a smooth ride that carries you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning around the heel and ankle for a supportive sensation. Keep running, we've got you.",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670",
      },
      {
        id: "3",
        title: "Nike ZoomX Invincible",
        subtitle: "Men's Road Running Shoes",
        description: "Get after those long runs with lightweight, responsive foam that delivers a soft feel with every step. A Flyknit upper gives your foot breathability where you need it most and a secure fit you can depend on. Designed for optimal shock absorption with a wider forefoot for stability and a more curved outsole for easier heel-to-toe transitions. As one of our most tested shoes, lace up and feel the potential when your foot hits the pavement.",
        image:
          "https://images.unsplash.com/photo-1518656306295-aa28b28b2504?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670",
      },
    ];

    return { Stroedata };
  },
};
</script>
