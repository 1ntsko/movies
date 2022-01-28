// var css = require("./src/style.css");
var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  mode: "development", // production
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ["babel-loader", "style-loader", "css-loader"],
        test: /\.css$/i,
      },
    ],
  },
};
