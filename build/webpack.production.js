const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const config = {
  mode: 'production',

  output: {
    chunkFilename: "[name]-[contenthash]_bundle.js",
    filename: "[name]-[contenthash].js"
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        test: /\.js(\?.*)?$/i,
        extractComments: /^\**!|@preserve|@license|@cc_on/i,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      })
    ]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'postcss-loader',
        ],
      }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
      chunkFilename: "[id]-[chunkhash].css"
    }),
    new PurgecssPlugin({
      whitelistPatterns: [/(enter-active|leave-active)$/],
      paths: glob.sync([
        path.join(__dirname, '../templates/**/*.html'),
        path.join(__dirname, '../resources/**/*.vue'),
        path.join(__dirname, '../resources/**/*.js')
      ]),
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["html", "js", "vue"]
        }
      ]
    }),
  ],
};

module.exports = () => {
  return merge(baseConfig, config);
};
