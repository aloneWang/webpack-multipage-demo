const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.conf')
module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        port: 8086,
        host: "localhost",
        hot: true
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})