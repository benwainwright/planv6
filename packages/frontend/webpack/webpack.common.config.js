const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist/assets/"),
    publicPath: "/assets"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    symlinks: false
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
