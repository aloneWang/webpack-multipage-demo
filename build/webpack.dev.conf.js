const merge = require("webpack-merge")
const webpack = require('webpack')
const webpackconfig =require('./webpack.base.conf')
module.exports = merge(webpackconfig, {
    devServe: {
        port: '8080',
        host: '0.0.0.0',
        hot: true
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})