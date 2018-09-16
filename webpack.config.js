
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
 });

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        app: ['./src/app.module.js']
    },
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : '[name].js'
    },
    
    module : {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015'] 
                }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test:/\.html$/,
                loaders:["raw-loader"]
            },
            {
                test:/\.(jpg|png|woff|woff2|eot|ttf|svg)(\?.*)?$/,
                loader:"file-loader",
                options : {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: './src/index.html', // Load a custom template (lodash by default see the FAQ for details)
            inject: true
        }),
        extractPlugin,
        new UglifyJSPlugin()
    ]
}