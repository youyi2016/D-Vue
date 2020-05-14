const path = require('path');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: path.resolve(__dirname, 'examples/index.js'),
	output: {
		filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
	},
	resolve: {
    extensions: ['.js', '.vue', '.json'], //相关文件在其他文件中引入时可以不写后缀
    alias: {
      '@instance': resolve('src/core/instance'),
    }
  },
}