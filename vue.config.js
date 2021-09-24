const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://summer-vue.chengcheng.kooboo.site",
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://summer-vue.chengcheng.kooboo.site/",
        changeOrigin: true,
      },
      "/order": {
        target: "http://summer-vue.chengcheng.kooboo.site/",
        changeOrigin: true,
      },
      "/user": {
        target: "http://summer-vue.chengcheng.kooboo.site/",
        changeOrigin: true,
      },
      "/email": {
        target: "http://summer-vue.chengcheng.kooboo.site/",
        changeOrigin: true,
      },
    },
  },
};
