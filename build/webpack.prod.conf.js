const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.conf.js");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = merge(baseConfig, {
    devtool: 'source-map',
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: "vendor",
                    filename: "statics/js/vendor.[hash:7].js",
                    test: /(vue|vuex)/,
                    chunks: "initial"
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
});