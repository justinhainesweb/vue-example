const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

let pathsToClean = [
  'assets',
];

// the clean options to use
let cleanOptions = {
  root: path.resolve(__dirname, '..'),
  exclude: ['shared.js'],
  verbose: true,
  dry: false
};

module.exports = {
  entry: {
    app: ['./resources/js/app.js', './resources/css/app.css'],
  },

  output: {
    path: path.resolve('./assets/'),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'vue-loader',
        }
      },
    ]
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
  ]
};
