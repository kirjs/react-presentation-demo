var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.hot.js');
var open = require('open');

new WebpackDevServer(webpack(config), {
  publicPath: '/js/',
  contentBase: './dist',
  filename: config.output.filename,
  hot: true
}).listen(config.server.port, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:' + config.server.port);
    open('http://localhost:' + config.server.port);
  });