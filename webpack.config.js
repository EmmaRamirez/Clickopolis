var webpack = require('webpack');

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
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.styl$/, loaders: ['style', 'css', 'stylus']},
    ]
  },
  watch: true
}
