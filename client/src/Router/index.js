import { createRouter, createWebHistory } from 'vue-router'
import Home from  "../Views/Home.vue"
import About from  "../Views/About.vue"
import Contact from  "../Views/Contact.vue"
import Products from "../Views/Products.vue"
import ProductsDetails from  "../Views/ProductsDetails.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'products',
    component: Products
  },
  {
    path: '/shop/:id',
    name: 'products/:id',
    component: ProductsDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },


]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router