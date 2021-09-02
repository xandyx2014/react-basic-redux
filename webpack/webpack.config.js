const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const rulesForReactToJavascript = {
  test: /\.(js|jsx)$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};
const rulesForModuleStyle = {
  test: /\.module.scss$/,
  use: [
    "style-loader",
    { loader: "css-loader", options: { modules: true, importLoaders: 2 } },
    "sass-loader",
  ],
};
const rulesForStyles = {
  test: /\.scss$/,
  exclude: /\.module.(scss)$/,
  use: ["style-loader", { loader: "css-loader" }, "sass-loader"],
};

const rules = [rulesForReactToJavascript, rulesForModuleStyle, rulesForStyles];
module.exports = (env, args) => {
  const { mode } = args;
  const isProduction = mode === "production";
  return {
    // entry: './src/index.js'
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    module: {
      rules: rules,
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    devServer: {
      // contentBase: path.resolve(__dirname, 'build'), default,
      open: true, // para abrir el navegador
      //  overlay: true,
      client: {
        overlay: true,
      },
      compress: true,
      port: 3000,
    },
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".jsx", ".scss", ".tsx", ".ts"],
    },
  };
};
