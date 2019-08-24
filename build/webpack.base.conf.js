const path = require('path')
const utils = require('../utils/multipage')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = (name)=>{
    return path.resolve(__dirname, '..', name)
}
let mode = process.env.NODE_ENV
let DevMode = mode === 'development' ? true : false
console.log("这是"+mode+'环境')
module.exports = {
    mode,
    entry: utils.getEntries(),
    output: {
        path: resolve('dist'),
        filename: DevMode ? '[name].js' : 'statics/js/[name].[chunkhash:7].js',
        publicPath: DevMode ? '' : '' // 静态资源绝对路径前缀
    },
    module:{
        rules:[
            {
                test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: DevMode ? '[name].[ext]' : 'statics/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: DevMode ? '[name].[ext]' : 'statics/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve:{
        extensions:['.vue','.js','.css'],
        alias: {
            'components': resolve('src/components'),
            'assets': resolve('src/assets')
        }
    },
    plugins:[
        ...utils.getHtml(),  // 多页面html 模板集合
        // 分离 css ,相比 ExtractTextPlugin 目前 不支持 webpack4
        new MiniCssExtractPlugin({
            filename: DevMode ? '[name].css' : 'statics/css/[name].[hash:7].css',
            chunkFilename: DevMode ? "[id].css" : "statics/css/[id].[hash:7].css"
          }),
        new VueLoaderPlugin()  // vue-loader 依赖
    ]
}