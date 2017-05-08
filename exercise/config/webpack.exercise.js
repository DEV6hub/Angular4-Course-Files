var webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	CopyWebpackPlugin = require("copy-webpack-plugin"),
	helpers = require("./helpers");

const exercisePath = process.env.exercise;

var plugins = [
		new webpack.optimize.CommonsChunkPlugin({
			name: ["app", "vendor", "polyfills"]
		}),

		new ExtractTextPlugin("[name].css"),
		
		new HtmlWebpackPlugin({
			template: "index.html"
		})
		
];

if (exercisePath === 'localization') {
	plugins.push(
		new CopyWebpackPlugin([{
			from: "i18n", to: "i18n"
		}])
	)
}

module.exports = {
	context: helpers.root() + '/' + exercisePath + "/src",
	entry: {
		app: "./main.ts",
		vendor: helpers.root() + "/common/vendor.ts",
		polyfills: helpers.root() + "/common/polyfills.ts"
	},
	
	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".js"]
	},
	
	module: {
		exprContextCritical: false,
		loaders: [
			{
				test: /\.ts$/,
				loaders: ["ts-loader", "angular2-router-loader?debug=true"]
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: "file?name=assets/[name].[hash].[ext]"
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
	},
	
	plugins: plugins,
	
	devtool: "source-map",
	
	output: {
		path: helpers.root("dist"),
		publicPath: "http://localhost:8080/",
		filename: "[name].js",
		chunkFilename: "[id].chunk.js"
	},
	
	devServer: {
		historyApiFallback: {
			index: "http://localhost:8080/index.html"
		}
	}
}
