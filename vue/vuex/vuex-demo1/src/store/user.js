const user = {
  // 启用命名空间
  namespaced: true,

  state: () => ({
    name: "张三",
    sname: "555",
    count: 9,
  }),
  getters: {
    // `state` 局部状态
    // `getters` 局部状态
    // `rootState` 全局状态state
    // `rootGetters` 全局状态getters,命名空间被启用后
    getFullName(state) {
      return state.name + state.sname;
    },
    // 这里的 `getters` 对象是模块的局部状态
    func2(state, getters, rootState) {
      console.log(rootState);
      return getters.getFullName;
    },
  },
  mutations: {
    // 这里的 `state` 对象是模块的局部状态
    setName(state, obj) {
      state.name = obj.name;
    },
  },
  actions: {
    // state局部状态, commit局部状态,dipatch局部状态,rootGetters, rootState全局状态
    // 在这个模块中， dispatch 和 commit 也被局部化了
    // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
    // dispatch('someOtherAction', null, { root: true })
    // commit('someMutation', null, { root: true })
    // root: true, // 全局注册方法
    sum(context, obj) {
      console.log(context);
      const { state, commit, rootState } = context;
      if ((state.count + rootState.count) % 2 === 1) {
        commit("setName", obj);
      }
    },
  },
};

export default user;
