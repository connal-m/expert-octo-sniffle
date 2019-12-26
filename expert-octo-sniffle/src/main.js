import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';
import App from './App.vue';
import Crag from './components/Crags.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      { path: '/' },
      { path: '/crag/:name', component: Crag, name: 'Crag'}
    ]
})

const app = new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')

// Now the app has started!
