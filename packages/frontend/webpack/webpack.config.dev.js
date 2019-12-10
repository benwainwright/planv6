const merge = require("webpack-merge");
const webpack = require("webpack");

const devConfig = {
  mode: "development",

  devtool: "source-map",

  plugins: [new webpack.NoEmitOnErrorsPlugin()],

  entry: ["./src/client/index.tsx"],

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'

      {
        enforce: "pre",
        test: /.js$/,
        loader: require.resolve("source-map-loader")
      }
    ]
  }
};

module.exports = merge(require("./webpack.common.config"), devConfig);
