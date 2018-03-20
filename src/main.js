import Vue from 'vue';
import Apps from './App.vue';
import Home from './components/Home.vue';
import Todos from './components/Todos.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.css';
import '../public/webfonts/fontawesome-all.min.css';
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/todos', component: Todos },
    { path: '*', redirect: '/home' }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(Apps)
});
