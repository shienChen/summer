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
};
