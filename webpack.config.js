'use strict';

var webpack = require('webpack');
var path = require('path');

var buildPath = path.resolve(__dirname, 'dist');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'./src/client/main',
		'./stylesheets/main'
	],
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
		}),
	],
	resolve: {
		extensions: ['', '.js', '.less', 'json']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel?stage=0&optional[]=runtime&cacheDirectory'],
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.css/, loader: "style-loader!css-loader"
			},
			{
        test: /\.json$/,
        loader: 'json-loader'
      }
		]
	}
};
