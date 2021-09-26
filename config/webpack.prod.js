const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.js");

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      chunks: "initial"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      title: "生产环境",
    })
  ]
});
