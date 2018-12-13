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
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
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
