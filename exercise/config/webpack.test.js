var webpack = require("webpack"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	helpers = require("./helpers");

module.exports = {
	context: helpers.root(),
	devtool: "inline-source-map",
	
	resolve: {
		extensions: [".js", ".ts"],
    	modules: [helpers.root(), "node_modules"]
	},
	
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.css$/,
				exclude: helpers.root("src", "app"),
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
			},
			{
				test: /\.css$/,
				include: helpers.root("src", "app"),
				loader: "raw-loader"
			},
			{
				test: /\.s(a|c)ss$/,
				loaders: ["raw-loader", "sass-loader"]
			}
		]
	}
}
