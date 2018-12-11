const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

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
};

module.exports = () => {
  return merge(baseConfig, config);
};
