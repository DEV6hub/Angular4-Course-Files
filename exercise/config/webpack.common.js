var webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	helpers = require("./helpers");

module.exports = {
	context: helpers.root() + "/src",
	entry: {
		app: "./main.ts",
		vendor: helpers.root() + "/common/vendor.ts",
		polyfills: helpers.root() + "/common/polyfills.ts"
	},
	
	resolve: {
		extensions: ["", ".js", ".ts"]
	},
	
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: "ts"
			},
			{
				test: /\.html$/,
				loader: "html"
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: "file?name=assets/[name].[hash].[ext]"
			},
			{
				test: /\.css$/,
				exclude: helpers.root("src", "app"),
				loader: ExtractTextPlugin.extract("style", "css?sourceMap")
			},
			{
				test: /\.css$/,
				include: helpers.root("src", "app"),
				loader: "raw"
			},
			{
				test: /\.s(a|c)ss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ["app", "vendor", "polyfills"]
		}),
		
		new HtmlWebpackPlugin({
			template: "index.html"
		})
	]
}
