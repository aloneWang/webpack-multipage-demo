const fs = require("fs");
const path = require("path");
const VueLoader = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const utils = require('../utils/multipage')

const mode = process.env.NODE_ENV;
const devMode = process.env.NODE_ENV === "development";

const pagesDirPath = path.resolve(__dirname, "../src/pages");

module.exports = {
    mode,
    entry: utils.getEntries(),
    // entry: path.resolve(__dirname, "../src/pages/P1/index.js"),
    // entry: "./src/index.js",
    output: {
        publicPath: devMode ? "" : "/",
        filename: devMode ? "[name].js" : "static/js/[name].[chunkhash].js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            // {
            //     test: /\.(sc|sa|c)ss$/,
            //     use: [
            //         devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            //         "css-loader", 
            //         "sass-loader"
            //     ]
            // },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 limit: 8192,
            //                 name: devMode ? "[name].[hash:8].[ext]" : "static/images/[name].[hash:8].[ext]",
            //                 // publicPath: "/static/"
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new VueLoader(),
        new MiniCssExtractPlugin({
            filename: devMode ? "[name].css" : "static/css/[name].[hash].css",
            chunkFilename: devMode ? "[id].css" : "static/css/[id].[hash].css"
        }),
        // new CleanWebpackPlugin(path.resolve(__dirname, "../dist")),
        ...utils.getHtml(),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "../src/public/static"),
            to: path.resolve(__dirname, "../dist/static")
        }])
        // new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: [".js", ".vue"]
    }
}