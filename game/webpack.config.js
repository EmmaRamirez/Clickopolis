var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.ts',
  output: {
    filename: './dist/scripts/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      { from: './src/img', to: './dist/img' },
      { from: './src/index.html', to: './dist/index.html' }
    ])
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass' ]},
      { test: /\.styl$/, loaders: ['style', 'css', 'stylus']},
      { test: /\.jpg$/, loader: "url-loader?limit=10000&minetype=image/jpg" },
      { test: /\.png$/, loader: "url-loader?limit=10000&minetype=image/png" }
    ]
  },
  watch: true
}
