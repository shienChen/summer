import Vue from "vue";
import Vuex from "vuex";

import bookOptions from "./book.js";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  // modules: {},
  modules: {
    bookAbout: bookOptions,
  },
});
