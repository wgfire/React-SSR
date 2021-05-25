const path = require("path");
module.exports = {
  entry: path.join(__dirname, "src/client/AppServer.js"),
  target: 'node',
  mode:"production",
  output: {
    filename: "AppServer.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  plugins: [],
  devServer: {},
};
