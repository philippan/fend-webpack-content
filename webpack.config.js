const path = require('path');
const webpack = require('webpack');
const json = require('./src/client/js/file.json');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {

        mode: 'development',
        entry: './src/client/index.js',
        module: {
            
            rules: [
                    {
                        enforce: 'pre',
                        test: '/\.js$/',
                        exclude: /node_modules/,
                        loader: "eslint-loader"
                    },
                    {
                        test: '/\.js$/',
                        exclude: /node_modules/,
                        loader: "babel-loader",
                    },
                    {
                        test: /\.(png|jpe?g|gif)$/i,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'file-loader',
                            }
                        ]
                    },
                    {
                        test: '/\.json$/',
                        loader: "json-loader"
                    },
                    {
                        test: '/\.s[ac]ss$/i',
                        use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                        ]
                    }

            ]

        },
        plugins: [
            new HtmlWebpackPlugin({

                template: './src/client/views/index.html',
                filename: './index.html',

            }),
            new CleanWebpackPlugin({
            
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false

            })
        ]

};