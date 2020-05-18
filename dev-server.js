const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
let config = require('./build/webpack.dev.js');
if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in production mode!');
    config = require('./build/webpack.prod.js');
} else {
  console.log('Looks like we are in development mode!');
}

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});