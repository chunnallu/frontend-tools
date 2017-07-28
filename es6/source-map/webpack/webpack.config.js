/**
 * Created by lcl on 2017/7/28.
 */
var path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {  // webpack dev server 的配置，不用webpack dev server 可以删除
        contentBase: './dist',
        compress:true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};