const path = require('path')
const chalk = require('chalk');
const webpack = require('webpack');
const resolve = dir => {
    return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'
const {APP_ENV} = process.env;
const proxyUrlAndPort = {
    development: {
        url: 'https://www.easy-mock.com',
        port: 8090
    },
    test: {
        url: 'https://www.easy-mock.com',
        port: 8091
    }
}
const proxyUrlAndPortObj = proxyUrlAndPort[APP_ENV];
const proxyUrl = proxyUrlAndPortObj? proxyUrlAndPortObj.url : ''; // 当前运行环境代理接口域名
const port = proxyUrlAndPortObj ? proxyUrlAndPortObj.port : ''; // 当前运行环境代理端口
const log = console.log;
log(chalk.yellow(`APP当前运行环境：${APP_ENV}`));
log(chalk.green(`APP当前运行环境代理域名：${proxyUrl}`));
module.exports = {
    publicPath: BASE_URL,
    outputDir: 'dist', // 打包生成的生产环境构建文件的目录
    assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
    indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
    pages: undefined, // 构建多页
    productionSourceMap: false, // 开启 生产环境的 source map?
    chainWebpack: config => {
        // 配置路径别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
        config.module
            .rule('tslint')
            .test(/\.ts$/)
            .use('tslint-loader')
            .loader('tslint-loader')
            .end()
        config.module
            .rule('ts')
            .test(/\.ts$/)
            .use('thread-loader')
            .loader('thread-loader')
            .end()
    },
    configureWebpack: {
        resolve: {
            alias: {
                src: resolve('src')
            }
        },
        plugins: [new webpack.DefinePlugin({
            'process.env.APP_ENV': JSON.stringify(APP_ENV)
        })]
    },
    css: {
        modules: false, // 启用 CSS modules
        extract: true, // 是否使用css分离插件
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {} // css预设器配置项
    },
    devServer: {
        port, // 端口
        proxy: proxyUrl // 设置代理
    }
}
