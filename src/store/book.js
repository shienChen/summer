const state = {
  price: 0,
  aduNum: 0,
  kidNum: 0,
  Totals: 0,
  Taxs: 0,
  Subtotal: 0,
};
state.Subtotal = sessionStorage.getItem("Subtotal");
state.aduNum = sessionStorage.getItem("aduNum");
state.kidNum = sessionStorage.getItem("kidNum");
state.Totals = sessionStorage.getItem("Totals");
state.Taxs = sessionStorage.getItem("Taxs");

const getters = {};
const mutations = {};
const actions = {};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
