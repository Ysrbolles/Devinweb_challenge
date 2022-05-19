<template>
    <section class="text-gray-600 body-font">
  <div class="container  py-2 mx-auto">
    <div class="flex flex-wrap " >
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer" v-for="item in ProuctsList" :key="item.id" >
        <a href="/shop/1" class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="item.image">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{item.category}}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{{item.name}}</h2>
          <p class="mt-1">{{item.price}}</p>
        </div>
      </div>
     
    </div>
  </div>
</section>
</template>


<script>
export default {
    

    setup(){
        let ProuctsList = [
            {
                id: "1",
                name: "Nike Air Force 1 '07",
                price: "$100",
                category: "Best Seller",
                image: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370",
            },
            {
                id: "2",
                name: "Nike Air VaporMax Plus",
                price: "$210",
                category: "Just In",
                image: "https://i.ebayimg.com/images/g/O9wAAOSw75Bd76mm/s-l400.jpg",
            },
            {
                id: "3",
                name: "Nike SuperRep Go",
                price: "$74.97",
                category: "Best Seller",
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964",
            },
            {
                id: "4",
                name: "Nike Air Jordan",
                price: "$100",
                category: "Just In",
                image: "https://images.unsplash.com/photo-1612452830710-97cd38a7b6e8?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587",
            },
            {
                id: "5",
                name: "Nike Air Force 1 '07",
                price: "$100",
                category: "Best Seller",
                image: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370",
            },
            {
                id: "6",
                name: "Nike Air VaporMax Plus",
                price: "$210",
                category: "Just In",
                image: "https://i.ebayimg.com/images/g/O9wAAOSw75Bd76mm/s-l400.jpg",
            },
            {
                id: "7",
                name: "Nike SuperRep Go",
                price: "$74.97",
                category: "Best Seller",
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964",
            },
            {
                id: "8",
                name: "Nike Air Jordan",
                price: "$100",
                category: "Just In",
                image: "https://images.unsplash.com/photo-1612452830710-97cd38a7b6e8?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587",
            },
            {
                id: "6",
                name: "Nike Air Force 1 '07",
                price: "$100",
                category: "Best Seller",
                image: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370",
            },
            {
                id: "7",
                name: "Nike Air VaporMax Plus",
                price: "$210",
                category: "Just In",
                image: "https://i.ebayimg.com/images/g/O9wAAOSw75Bd76mm/s-l400.jpg",
            },
            {
                id: "8",
                name: "Nike SuperRep Go",
                price: "$74.97",
                category: "Best Seller",
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964",
            },
            {
                id: "9",
                name: "Nike Air Jordan",
                price: "$100",
                category: "Just In",
                image: "https://images.unsplash.com/photo-1612452830710-97cd38a7b6e8?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587",
            },
        ]
        return {ProuctsList}
    }
}
</script>