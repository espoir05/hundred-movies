const WebpackConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...WebpackConfig,

  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    compress: true,
    port: 5000,
  },
  mode: 'development',
};
