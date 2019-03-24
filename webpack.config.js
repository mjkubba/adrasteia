module.exports = {
  externals: {
    jquery: 'jQuery'
  },
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './client/index',
  ],
  output: {
    path: 'static/code',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.css$/,
      loader: 'style-loader',
    }, {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]',
      },
    },
  ],
  },
};
