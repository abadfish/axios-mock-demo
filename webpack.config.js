const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, "src/index.tsx"),
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[contenthash].bundle.js",
	},
	plugins: [new HtmlWebpackPlugin({
		template: path.join(__dirname, "public", "index.html")
  })],
	devServer: {
		port: 3000,
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.m?js|jsx$/,
				exclude: /(node_modules|bower_components)/, 
				use: {
					loader: "swc-loader",
				},
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			}
		]
	}

}
