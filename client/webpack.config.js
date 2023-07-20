const Dotenv = require("dotenv-webpack");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

const extensions = [".js", ".jsx"];

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js", // Specify the output filename for the bundle
    publicPath: "/", // The public path where the bundled assets will be served from
  },
  resolve: { extensions },
  devServer: {
    devServer: {
      contentBase: path.resolve(__dirname, "public"), // Set the location of your public assets (index.html and other static files)
      historyApiFallback: true, // Enable this to support React Router's nested routes (redirect to index.html for any unknown routes)
      client: {
        overlay: false, // Hide overlay errors on the browser screen
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-react", { runtime: "automatic" }]],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new EslintWebpackPlugin({ extensions }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new Dotenv(),
  ],
  stats: "minimal",
};
