var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackConfig = {
  entry: './src/index.tsx',
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      { from: './src/assets/img', to: './dist/img' },
      { from: './src/index.html', to: './dist/index.html' },
      { from: './node_modules/store/store.js', to: './dist/store.js' }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff',
        }
      },
      {
        test: /\.(ttf|eot|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        }
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]'
        }
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
  },
};

module.exports = webpackConfig;
