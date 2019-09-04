import Vue from 'vue';
import Vuex from 'vuex';
import Login from './module/login';
import Home from './module/home';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {
        //
    },
    modules: {
        //
        Login,
        Home
    }
});
