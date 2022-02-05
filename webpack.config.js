var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.ts"),
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
        test: /\.ts/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};
