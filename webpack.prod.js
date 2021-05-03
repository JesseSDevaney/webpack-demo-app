const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "static/js/main.[contenthash].js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "static/imgs/[name].[hash][ext]"
  },
  plugins: [new CleanWebpackPlugin()]
});
