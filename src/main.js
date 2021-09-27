import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "@/style/index.scss";
import "./assets/iconfont/iconfont.js";

Vue.prototype.bus = new Vue();

Vue.config.productionTip = false;

Vue.filter("dateFormat", function (originVal) {
  const dt = new Date(originVal);

  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + "").padStart(2, "0");
  const d = (dt.getDate() + "").padStart(2, "0");

  // const hh = (dt.getHours() + "").padStart(2, "0");
  // const mm = (dt.getMinutes() + "").padStart(2, "0");
  // const ss = (dt.getSeconds() + "").padStart(2, "0");

  // return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  return `${y}-${m}-${d}`;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
