
process.env.NODE_ENV = 'production'

var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')
var spinner = ora('building for production...')
spinner.start()

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan(' 编译完成.\n'))
  console.log(chalk.yellow(
    '  提示：请将编译包放置在服务器上.\n' +
    '  用文件路径打开无效.\n'
  ))
})
