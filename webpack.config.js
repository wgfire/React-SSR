const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let config = {
  entry: [
    "react-hot-loader/patch",
    path.join(__dirname, "src/client/app/index.js"),
  ],
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/client"),
    publicPath: process.env.NODE_ENV === "production" ? "/public/" : "",
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // "isomorphic-style-loader",
          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },

          "sass-loader",
        ],
      },
    ],
  },
  performance: {
    maxEntrypointSize: 10000000,
    maxAssetSize: 30000000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new htmlPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 30, //提取出的chunk的最小大小
      cacheGroups: {
        default: {
          name: "common",
          chunks: "initial",
          minChunks: 2, //模块被引用2次以上的才抽离
          priority: -20,
        },
        vendors: {
          //拆分第三方库（通过npm|yarn安装的库）
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          priority: -10,
        },
        react: {
          chunks: "all",
          name: `react`,
          test: /[\\/]node_modules[\\/]react-dom[\\/]/,
          priority: 0,
        },
      },
    },
  },
  devServer: {
    hot: true,
  },
};
console.log(config.output.publicPath, "XX");

module.exports = config;
