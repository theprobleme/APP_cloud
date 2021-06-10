// Imports
import axios from 'axios'
import Vue from 'vue'                           // Initialisation de la vue de l'application
import App from './App.vue'                     // Initilisation de l'app
import vuetify from './plugins/vuetify';        // Initialisation du Framework de l'app : Vuetify
import VueRouter from 'vue-router';             // Initialisation du router pour VueJS
axios.defaults.withCredentials = true;

import Login from '../src/components/Login'
import Home from '../src/components/Home'
import Card from '../src/components/Card'
import Service from '../src/components/Service'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
      {
          path: "/login",
          component: Login,
          name: "login"
      }, {
          path: "*",
          redirect: '/login',
      }, {
        path: "/home",
        component: Home,
        name: "home"
      }, {
        path: "/card",
        component: Card,
        name: "card"
      }, {
        path: "/service",
        component: Service,
        name: "service"
      }
    ]
  })

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')

