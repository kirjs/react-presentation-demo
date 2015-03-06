var webpack = require('webpack');

var serverConfig = {
  host: 'localhost',
  port: 3007,
  path: 'dist/'
};
var config = {
  watch: true,
  entry: [
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:' + serverConfig.port,
    './index.jsx'
  ],

  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: 'http://localhost:' + serverConfig.port + '/',
    path: '/dist/js',
    filename: 'index.js'
  }


};
config.server = serverConfig;

module.exports = config;