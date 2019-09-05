import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/styles/common.scss';
import fastclick from 'fastclick';
// @ts-ignore
fastclick.attach(document.body);
Vue.config.productionTip = false;
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
Vue.use(Vant).use(Lazyload);

import _ from 'lodash';
Vue.prototype._ = _;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
