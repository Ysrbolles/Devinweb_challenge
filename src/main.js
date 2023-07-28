import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import "./index.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    // Global settings:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  })
createApp(App).use(router).mount('#app')
 