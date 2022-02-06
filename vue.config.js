/* eslint-disable @typescript-eslint/no-var-requires */
const { name } = require('./package')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProd ? '/child2nginx' : '/',
  lintOnSave: false,
  devServer: {
    port: 7072,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把子应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
