const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const json = require('./src/client/js/file.json');


module.exports = {

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
                    }

            ]

    	},
    	plugins: [
    		new HtmlWebpackPlugin({

    			template: './src/client/views/index.html',
    			filename: './index.html',

    		})
    	]

};




