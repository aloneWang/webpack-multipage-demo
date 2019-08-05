const merge = require("webpack-merge")
const webpack = require('webpack')
const path = require('path')
import webpackconfig  from './webpack.base.conf'
export default = merge(webpackconfig, {
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: "vendor",
                    filename: "static/js/vendor.[chunkhash].js",
                    test: /(vue|vuex)/,
                    chunks: "initial"
                }
            }
        }
    }
})