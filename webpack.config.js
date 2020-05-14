const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// function resolve (dir) {
//   return path.join(__dirname, '..', dir)
// }

module.exports = {
	entry: path.resolve(__dirname, 'examples/index.js'),
	output: {
		filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
	},
	plugins: [
			new HtmlWebpackPlugin({
					title: 'D-Vue'
			})
  ],
	resolve: {
    extensions: ['.js', '.vue', '.json'], //相关文件在其他文件中引入时可以不写后缀
    // alias: {
    //   '@instance': resolve('src/core/instance'),
    // }
  },
}