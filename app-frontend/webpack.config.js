const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader',
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {
      "module": "new-module",
      "only-module$": "new-module",
      "module": path.resolve(__dirname, "app/third/module.js"),
    },
  },
  performance: {
    hints: "warning",
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: "source-map",
  context: __dirname,
  target: "web",
  stats: "errors-only",
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebPackPlugin()
  ]
}