const merge = require("webpack-merge")
const webpack = require('webpack')
import webpackconfig  from './webpack.base.conf'
export default = merge(webpackconfig, {
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