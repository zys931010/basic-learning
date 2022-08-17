<template>
  <div>
    <h1>vuex模块modules的使用</h1>
    <!--  modules的使用user里的state -->
    <p>user的state: {{ $store.state.user.name }}</p>
    <!--  modules的使用user里的getters -->
    <p>user的getters: {{ $store.getters.getFullName }}</p>
    <button @click="cname()">改名</button>
    <!--  modules的使用user里的actions-->
    <button @click="acname()">user里的actions</button>
    <p>主的vuex: {{ $store.state.testName }}</p>

    <br /><br />
    <hr />
    <h1>about页面使用vuex状态管理</h1>
    <p>{{ $store.state.num }}</p>
    <hr />
    <h1>getters属性的使用</h1>
    <h2>得到getVxNumPow值: {{ $store.getters.getVxNumPow }}</h2>
    <h2>得到过滤filterGoods商品列表：{{ $store.getters.filterGoods }}</h2>
    <h2>得到过滤后filterTotal列表总价：{{ $store.getters.filterTotal }}</h2>
    <h2>动态过滤商品列表：{{ $store.getters.dFilterGoods(60) }}</h2>
    <hr />
    <h1>actions属性的使用</h1>
    <h2>调用actions方法后得到的值: {{ $store.state.num }}</h2>
    <button @click="afunc1()">actions1调用</button>
    <h2>TNUM: {{ $store.state.tnum }}</h2>
    <h2>Total: {{ $store.getters.filterTotal }}</h2>
    <button @click="afunc2()">actions2调用</button>
    <h2>调用actions方法后得到的值: {{ $store.state.tnum }}</h2>
    <button @click="afunc3()">actions3调用</button>
  </div>
</template>
<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const afunc1 = () => {
      store.dispatch("fun1");
    };
    const afunc2 = () => {
      store.dispatch("fun2");
    };
    const afunc3 = () => {
      store.dispatch("fun3", { num: 60, name: "张三" });
    };
    return {
      afunc1,
      afunc2,
      afunc3,
      // modules的使用user里的mutations
      cname: () => {
        store.commit("setName", { name: "李斯", age: 67 });
      },
      acname: () => {
        store.dispatch("sum", { name: "王五", age: 89 });
      },
    };
  },
};
</script>
