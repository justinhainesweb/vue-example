const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/assets/';

const config = {
  mode: 'development',

  entry: {
    main: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
    ],

  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'postcss-loader'
        ]
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
  ],

  devServer: {
    inline: true,
    publicPath: ASSET_PATH,
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    headers: {'Access-Control-Allow-Origin': '*'},
    proxy: {
      '/': 'http://localhost:8007'
    }
  },
};

module.exports = () => {
  return merge(baseConfig, config);
};
