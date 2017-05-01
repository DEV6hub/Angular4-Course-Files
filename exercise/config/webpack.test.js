const webpack = require("webpack"),
	helpers = require("./helpers");

module.exports = {
	context: helpers.root(),
	devtool: "inline-source-map",
	
	resolve: {
		extensions: ["", ".js", ".ts"],
		root: helpers.root()
	},
	
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: "ts",
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				loader: "html"
			},
			{
				test: /\.css$/,
				include: helpers.root("src", "app"),
				loader: "raw"
			}
		]
	}
}
