const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const config = {
  mode: 'development',

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

  plugins: [new ErrorOverlayPlugin()],
};

module.exports = () => {
  return merge(baseConfig, config);
};
