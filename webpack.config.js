var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackConfig = {
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
      { from: './src/index.html', to: './dist/index.html' },
      { from: './node_modules/store/store.js', to: './dist/scripts/store.js' }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      // {
      //   test: /\.styl$/,
      //   include: [
      //     path.resolve(__dirname, 'stylus')
      //   ],
      //   loaders: ['style', 'css', 'stylus']
      // },
    ]
  },
  watch: true
}

module.exports = webpackConfig;
