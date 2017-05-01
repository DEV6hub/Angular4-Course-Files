var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

const ENV = process.env.NODE_ENV = process.env.ENV = "production";

module.exports = webpackMerge(commonConfig, {
	devtool: "source-map",
	
	htmlLoader: {
		minimize: false // workaround for ng2
	},
	
	output: {
		path: helpers.root("dist"),
		publicPath: "http://localhost:8080/",
		filename: "[name].js",
		chunkFilename: "[id].chunk.js"
	},
	
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				keep_fnames: true
			}
		}),
		new ExtractTextPlugin("[name].css"),
		new webpack.DefinePlugin({
			"process.env": {
				"ENV": JSON.stringify(ENV)
			}
		})
	]
});
