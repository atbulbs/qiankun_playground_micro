import { Output } from 'webpack'
const resolve: Function = require('../utils/resolve')

const { name } = require('../../package.json')

const outputConfig: Output = {
  library: `${name}-[name]`,
  // 把子应用打包成umd库格式
  libraryTarget: 'umd',
  jsonpFunction: `webpackJsonp_${name}`,
}

module.exports = outputConfig

export {}