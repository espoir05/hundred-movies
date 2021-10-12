const WebpackConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...WebpackConfig,

  mode: 'production',
};
