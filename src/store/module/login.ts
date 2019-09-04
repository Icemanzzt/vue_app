import { LoginState } from '@/types/views/login.d';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as LoginApi from '@/api/login';

const state: LoginState = {
  login: {
   author: undefined
  }
};

// 强制使用getter获取state
const getters: GetterTree<LoginState, any> = {
  author: (state: LoginState) => state.login.author
};

// 更改state
const mutations: MutationTree<LoginState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: LoginState, data: LoginState) {
    for (const key in data) {
      if (state.hasOwnProperty(key)) {
        state[key] = data[key];
      }
    }
  }
};

const actions: ActionTree<LoginState, any> = {
  UPDATE_STATE_ASYN({ commit, state: LoginState }, data: LoginState) {
    console.log(data);
    commit('UPDATE_STATE', data);
  },
  GET_DATA_ASYN({ commit, state: LoginState }) {
    LoginApi.getData();
  }
};
// @ts-ignore
export type gettersType = ReturnType<typeof actions>;
// @ts-ignore
export type mutationsType = ReturnType<typeof actions>;
// @ts-ignore
export type actionType = ReturnType<typeof actions>;
const namespaced: boolean = true;
export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
};

