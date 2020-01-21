const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "./app.js"
  },
  devServer: {
    port: 3000,
    contentBase: "./public"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      modules: __dirname + "/node_modules",
      jquery: "modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js",
      bootstrap: "modules/admin-lte/bootstrap/js/bootstrap.js"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin("app.css")
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  }
};
