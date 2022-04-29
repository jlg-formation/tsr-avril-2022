const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const config = {
  plugins: [new MiniCssExtractPlugin()],
  entry: "./src/main.ts",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};

if (process.env.NODE_ENV !== "production") {
  config.devtool = "source-map";
}

module.exports = config;
