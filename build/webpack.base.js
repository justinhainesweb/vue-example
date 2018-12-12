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

const ASSET_PATH = process.env.ASSET_PATH || '/assets/';

module.exports = {
  entry: {
    app: ['./resources/js/app.js', './resources/css/app.css'],
  },

  output: {
    path: path.resolve('./assets/'),
    chunkFilename: "[name]_bundle.js",
    publicPath: ASSET_PATH,
    filename: "[name].js"
  },

  optimization: {
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](vue)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      }
    },
  },

  module: {
    rules: [
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader'
      },
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
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('resources'),
      '__STATIC__': path.resolve('static'),
    }
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
  ]
};
