import Vue from 'vue'
import login from './components/book/login.vue'
import signup from './components/book/sain.vue'
import librali from './components/book/librali.vue'
import App from './App.vue'
 import fan from './components/book/fan.vue'
import blit from './components/blit/blit.vue'
import bl from './components/blit/bl.vue'
import data from './components/book/data.js'
import info from './components/book/inf.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import read from './components/book/read.vue'
Vue.use(BootstrapVue)
Vue.config.productionTip = false
import VueRouter from 'vue-router'
import at from './components/at.vue'
import VueCarousel from 'vue-carousel';


Vue.use(VueCarousel);

import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

Vue.use(VueGlide)
Vue.use(VueCarousel)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
   
    { path: '/blit', name: 'bl', component: blit ,props:true},
    { path: '/fan', name: 'bl', component: fan },
    { path: '/at', name: 'bl', component: at },
    { path: '/bl', name: 'bl', component: bl },
    { path: '/data', name: 'bl', component: data },
    { path: '/info/:idm,:ob', name: 'inf', component: info },
    { path: '/read/:obj',name:'read' , component: read },
    { path: '/login' , component: login },
    { path: '/signup' , component: signup },
    { path: '/librali' , component: librali },
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
