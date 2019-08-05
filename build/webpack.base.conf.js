/**
 * @description: webpack 基础配置
 */
import getEntries from '../utils/multipage'
import { getHtml } from '../utils/multipage'

const VueLoader = require("vue-loader/lib/plugin");
const path = require('path')

let ProMode = process.env.NODE_ENV === 'production' ? true : false

export default = {
    entry: getEntries(),
    // 输出配置
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: ProMode ? 'static/js/[name].[chunkhash].js' : '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? "" : '/'
    },
    reslove: {
        extensions: ['.js', '.vue'],
        alias:{
            '@': path.resolve(__dirname, '../src')
        }
    },
    module:{
        rules:[{
            test: /\.vue$/,
            use:'vue-loader'
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            include: [path.resolve(__dirname,'../src')]
          },{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: 'url-loader',
          }]
    },
    plugins:[
        new VueLoader(),
        ...getHtml()
    ]
}
