/**
 * @description: 多页面获取相关文件
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
const fs = require("fs")
const glob = require('glob')
const merge = require('webpack-merge')

const PAGE_PATH = path.resolve(__dirname, '../src/pages')

/**
 * @description: 获取多页面入口文件 
 * @returns 入口文件集合
 */
const  getEntries = ()  => {
    let result = fs.readdirSync(PAGE_PATH);
    let entry = {};
    result.forEach(item => {
        entry[item] = path.resolve(__dirname, `../src/pages/${item}/index.js`);
    });
    return entry;
}

/**
 * @description: 获取多页面html模板集合
 * @return: html集合
 */
const getHtml = () => {
    let htmlList = []
    let files = fs.readdirSync(PAGE_PATH);
    files.forEach((filename)=> {
        let templatePath;
        let selfTemplatePath = PAGE_PATH + `/${filename}/index.html`;
        let publicTemplatePath = path.resolve(__dirname, "../src/public/index.html")
        try {
            fs.accessSync(selfTemplatePath);
            templatePath = selfTemplatePath;
        } catch(err) {
            templatePath = publicTemplatePath;
        }
        //  模板配置选项
        let conf = {
            template: templatePath,
            filename: filename+ '.html',
            // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
            chunks: ['manifest', 'vendor', filename],
            inject: true
        }
        if(process.env.NODE_PATH === 'production') {
            let conf = merge(conf, {
                minify: {
                    removeComments: true, // 清除注释
                    collapseWhitespace: true, // 清除空格
                    removeAttributeQuotes: true // 清除引号
                }
            })
        }
        htmlList.push(new HtmlWebpackPlugin(conf))
    })
    return htmlList
}

module.exports = {
    getEntries,
    getHtml
}