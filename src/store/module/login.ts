import {
  LoginState,
  ILoginReqParams,
  ILoginRespParams
} from '@/types/views/login.d';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as LoginApi from '@/api/login';
interface ILoginState {
  loginInfo: ILoginRespParams;
}
const state: ILoginState = {
  loginInfo: {
    data: {
      userName: ''
    }
  }
};

// 强制使用getter获取state
const getters: GetterTree<ILoginState, any> = {
  loginInfo: (state: ILoginState) => state.loginInfo
};

// 更改state
const mutations: MutationTree<ILoginState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: ILoginState, data: ILoginRespParams) {
    state.loginInfo.data.userName = data.data.userName;
  }
};

const actions: ActionTree<ILoginState, any> = {
  UPDATE_STATE_ASYN({ commit, state: LoginState }, data: LoginState) {
    commit('UPDATE_STATE', data);
  },
  GET_DATA_ASYN({ commit, state: ILoginState }, params: ILoginReqParams) {
    LoginApi.getData({...params}).then((resp: ILoginRespParams) => {
      console.log(resp);
      commit('UPDATE_STATE', resp);
    });
  }
};
// @ts-ignore
export type gettersType = ReturnType<typeof getters>;
// @ts-ignore
export type mutationsType = ReturnType<typeof mutations>;
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

