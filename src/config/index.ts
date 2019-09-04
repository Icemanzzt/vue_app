import mockRequestConfig from './mockRequestConfig';

/**
 * @desc 返回当前APP_ENV
 * @desc APP_ENV = 'development'(开发环境)，APP_ENV = 'test'(测试环境)
 */
export const APP_ENV: string = process.env.APP_ENV;
/**
 * 线上环境
 */
export const ONLINEHOST: string = 'https://xxx.com';

/**
 * 测试环境
 */
export const QAHOST: string = 'http://xxx.com';

/**
 * 线上mock
 */
export const MOCKHOST: string = 'http://xxx.com';

/**
 * 是否mock
 */
export const ISMOCK: boolean = APP_ENV === 'development';

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST: string = ONLINEHOST;

/**
 * 请求的公共参数
 */
export const conmomPrams: any = {};

/**
 * @description token在Cookie中存储的天数，默认1天
 */
export const cookieExpires: number = 1;

/**
 * @method requestUrl
 * @description 返回项目的接口url
 */
declare interface IRequestUrlConfig {
    [key: string]: string;
}
declare interface IRequestUrl {
    development: IRequestUrlConfig;
    test: IRequestUrlConfig;
}
export const requestUrl = (() => {
    const requestUrl: IRequestUrl = {
        development: mockRequestConfig,
        test: mockRequestConfig
    };
    return APP_ENV === 'development' ? requestUrl.development : requestUrl.test;
})();