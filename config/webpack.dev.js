const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const baseWebpackConfig = require("./webpack.base");

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devServer: {
    hot: true,
    port: 8888,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      title: "开发环境",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
