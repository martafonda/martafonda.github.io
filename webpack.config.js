const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'bundle.js',
    publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoaders=1!postcss-loader',
        }),
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css'),
  ],
};
