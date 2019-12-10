const merge = require("webpack-merge");

const prodConfig = {
  mode: "production",

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
      }
    ]
  }
};

module.exports = merge(require("./webpack.common.config"), prodConfig);
