var webpack = require('webpack');

module.exports = {
  entry: [
    './index.jsx'
  ],

  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['jsx?harmony'], exclude: /node_modules/},
    ]
  },

  output: {
    path: 'dist/js',
    filename: 'index.js'
  }


};

