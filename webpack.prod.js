const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[fullhash].js'
  },
  plugins: [
    new FaviconsWebpackPlugin({ logo: './src/assets/svg/logo.svg', publicPath: '/' })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
        common: {
          test: /[\\/]src[\\/]components[\\/]/,
          chunks: 'all',
          minSize: 0
        }
      }
    }
  }
})
