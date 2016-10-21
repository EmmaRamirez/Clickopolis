var webpack = require('webpack');

module.exports = {
  entry: './public/index.tsx',
  output: {
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.ts?x$/, loader: 'ts-loader' },
      { test: /\.styl$/, loaders: ['style', 'css', 'stylus']},
    ]
  },
  watch: true
}
