import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { VueFire, VueFireAuth } from "vuefire"
import { firebaseApp } from "../src/firebase"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import './scss/styles.scss'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)


app
  .use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })
app.use(VueSweetalert2);
app.use(MotionPlugin)
app.use(createPinia())
app.use(router)
app.mount('#app')
