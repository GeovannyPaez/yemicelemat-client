const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotevn = require("dotenv-webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new miniCssExtractPlugin({
      filename: "[name].css",
    }),
    new Dotevn(),
    new WebpackPwaManifest({
      name: "Multicervicios Yemicelmat",
      short_name: "Yemicelemat",
      description:
        "Multiservicios Yemicelemat, es una aplicación que te ayudara a pagar cualquier tipo de factura en internet, ademas puedes hacer recargas a todos los operadores disponibles, consignaciones a cualquier banco de Colombia, entre muchas cosas mas.",
      icons: [
        {
          src: path.resolve("./src/assets/icon-ym.png"),
          sizes: "512x512",
          type: "image/png",
        },
      ],
      start_url: "/",
      scope: "/",
      display: "standalone",
      theme_color: "#e8cfc1",
      background_color: "#fff9f5",
      related_applications: [],
      prefer_related_applications: false,
    }),
    new WorkboxWebpackPlugin.GenerateSW({
        mode:'production',
        clientsClaim: true,
        skipWaiting: true,
      runtimeCaching: [
        
        {
          urlPattern: /^https?.*/, //regg url to cached
          handler: "NetworkFirst", //stretegies,
          method:'GET',
          options: {
            cacheName: "peticiones", //name of cache
          },
        },
      ],
    }),
   
  ],
  optimization: {
    minimize: true,
  },
};
