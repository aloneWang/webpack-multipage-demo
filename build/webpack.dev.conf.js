const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.conf')
module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        port: 8086,
        host: "localhost",
        hot: true,
        contentBase: __dirname+ '../src' // 开发环境上下文，
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})