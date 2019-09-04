// login.Data 参数类型
export interface ILoginData {
  pageName: string;
  userName: string;
}

// VUEX login.State 参数类型
export interface LoginState {
  data: any;
}

// GET_DATA_ASYN 接口参数类型
export interface ILoginReqParams {
  name: string;
}
interface IData {
  userName: string;

}
export interface ILoginRespParams {
  data: IData;
}
