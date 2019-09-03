import { HomeState } from '@/types/views/home.d';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as HomeApi from '@/api/home';

const state: HomeState = {
  home: {
   author: undefined
  }
};

// 强制使用getter获取state
const getters: GetterTree<HomeState, any> = {
  author: (state: HomeState) => state.home.author
};

// 更改state
const mutations: MutationTree<HomeState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: HomeState, data: HomeState) {
    for (const key in data) {
      if (state.hasOwnProperty(key)) {
        state[key] = data[key];
      }
    }
  }
};

const actions: ActionTree<HomeState, any> = {
  UPDATE_STATE_ASYN({ commit, state: HomeState }, data: HomeState) {
    commit('UPDATE_STATE', data);
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Home.getData()
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};

