import { createStore } from "vuex";
import user from "./user";

export default createStore({
  state: {
    num: 0,
    tnum: 0,
    goodsList: [
      { name: "西游", price: 30 },
      { name: "水浒", price: 40 },
      { name: "红楼", price: 50 },
      { name: "三国", price: 60 },
      { name: "山海经", price: 70 },
    ],
    testName: "hhhh",
    count: 0,
  },
  getters: {
    // 第一个参数就是state
    getVxNumPow(state) {
      return Math.pow(state.num, 2);
    },
    // 第二个参数就是getters
    filterGoods(state) {
      return state.goodsList.filter((item) => item.price > 40);
    },
    filterTotal(state, getters) {
      return getters.filterGoods.reduce((pre, item) => pre + item.price, 0);
    },
    // 函数式添加参数
    dFilterGoods: (state) => (param) => {
      return state.goodsList.filter((item) => item.price > param);
    },
  },
  mutations: {
    // 第一个参数就是state
    // 测试改变state状态
    add(state) {
      state.tnum++;
    },
    sub(state) {
      state.tnum--;
    },
    // 带一个参数
    add1(state, num) {
      state.tnum += num;
    },
    sub1(state, num) {
      state.tnum -= num;
    },
    // 带多个参数
    add2(state, obj) {
      state.tnum += obj.num + obj.count;
    },
    sub2(state, obj) {
      state.tnum -= obj.num + obj.count;
    },

    // 测试不同模块之间起相同名，会同时执行
    setName(state, obj) {
      state.testName = obj.name;
    },
  },
  actions: {
    // context 对象等价于 { commit, state, getters }
    fun1(context) {
      setTimeout(() => {
        context.state.num = 999;
      }, 3000);
    },
    fun2({ commit, getters }) {
      setTimeout(() => {
        commit("add1", 6);
        getters("filterTotal");
      }, 3000);
    },
    // 参数尽量以对象形式传
    fun3({ commit }, obj) {
      setTimeout(() => {
        console.log(obj);
        commit("add1", obj.num);
      }, 3000);
    },
  },
  // 重点
  modules: {
    user,
  },
});
