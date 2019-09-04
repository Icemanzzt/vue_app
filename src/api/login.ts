import Api from '@/utils/request';
import {ILoginReqParams} from '@/types/views/login';
export const getData = (params: ILoginReqParams) => {
  return Api.getData(params);
};

