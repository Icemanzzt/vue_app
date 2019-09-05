import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/styles/common.scss';
// import fastclick from 'fastclick';
// fastclick.FastClick.attach(document.body);
Vue.config.productionTip = false;
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
Vue.use(Vant).use(Lazyload);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
