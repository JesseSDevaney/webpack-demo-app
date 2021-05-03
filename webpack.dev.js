const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "static/js/main.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "static/imgs/[name][ext]"
  },
});
