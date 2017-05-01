var webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	CopyWebpackPlugin = require("copy-webpack-plugin"),
	helpers = require("./helpers");

const lessonPath = process.env.lesson;

module.exports = {
	context: helpers.root() + "/" + lessonPath + "/src",
	entry: {
		app: "./main.ts",
		vendor: helpers.root() + "/common/vendor.ts",
		polyfills: helpers.root() + "/common/polyfills.ts"
	},
	
	resolve: {
		extensions: ["", ".ts", ".js"]
	},
	
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ["ts", "angular2-router-loader"]
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
				exclude: helpers.root(lessonPath, "src", "app"),
				loader: ExtractTextPlugin.extract("style", "css?sourceMap")
			},
			{
				test: /\.css$/,
				include: helpers.root(lessonPath, "src", "app"),
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
		
		new CopyWebpackPlugin([{
			from: "i18n", to: "i18n"
		}]),
		
		new HtmlWebpackPlugin({
			template: "index.html"
		})
	]
}
