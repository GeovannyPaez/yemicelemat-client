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
        clientsClaim: true, // Esta opción asegura que el nuevo service worker toma el control inmediato de todas las pestañas de la aplicación abiertas. De esta manera, cualquier actualización realizada en el service worker se aplicará inmediatamente a todas las pestañas abiertas de la aplicación.,
        skipWaiting: true ,//Esta opción asegura que el nuevo service worker se instala y se activa inmediatamente en lugar de esperar a que el usuario cierre la aplicación. Esto es importante para asegurarse de que la aplicación siempre se cargue con la versión más actualizada del service worker,
      runtimeCaching: [
        //caching of Google Fonts 
      {
        urlPattern:/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,//fonts of Google
        handler:'CacheFirst',
        method:"GET",
        options:{
          cacheName:'Google Fonst',
          expiration: {
            maxAgeSeconds: 30*24*60*60
          }
        }
      },
      {
        urlPattern:new RegExp('^https://.*\.(png|jpg|jpeg|gif|webp)$'),
        handler:'CacheFirst',
        options:{
          cacheName:'Images',
          expiration:{
            maxEntries:10,
            maxAgeSeconds: 30*24*60*60 //un mes
          }
        }
      },


      //caching  all reques https:
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
