const webpack = require("webpack"),
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
				include: helpers.root("src", "app"),
				loader: "raw-loader"
			}
		]
	}
}
