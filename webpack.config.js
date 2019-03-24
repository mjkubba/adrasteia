const path = require('path');

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: [
    '@babel/polyfill',
    './client/index',
  ],
  output: {
    path: path.join(__dirname,'static/code'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]',
          },
        }
      ]
    },
  ],
  },
};
