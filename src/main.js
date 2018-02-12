import Vue from 'vue';
import Apps from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.css';

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(Apps)
});
