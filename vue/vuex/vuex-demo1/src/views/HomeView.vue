<template>
  <h1>这是Home页面</h1>
  <p>{{ count }}</p>
  <p>计算属性: {{ getPow }}</p>
  <button @click="count++">++</button>
  <button @click="count--">--</button>
  <hr />

  <h1>这是Home页面使用vuex全局管理</h1>
  <p>{{ $store.state.num }}</p>
  <p>vuex值的平方: {{ getVuexPow }}</p>
  <p>使用getters属性: {{ $store.getters.getVxNumPow }}</p>
  <button @click="$store.state.num++">++</button>
  <button @click="$store.state.num--">--</button>
  <hr />

  <h1>使用vuex全局mutations管理state状态</h1>
  <p>{{ $store.state.tnum }}</p>
  <button @click="add()">++</button>
  <button @click="sub()">--</button>
  <hr />

  <h1>使用vuex全局mutations管理state状态，带一个参数</h1>
  <p>{{ $store.state.tnum }}</p>
  <button @click="add1()">++</button>
  <button @click="sub1()">--</button>
  <hr />

  <h1>使用vuex全局mutations管理state状态，带多个参数</h1>
  <p>{{ $store.state.tnum }}</p>
  <button @click="add2()">++</button>
  <button @click="sub2()">--</button>
  <hr />

  <HelloWorld :count="count" />
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    getPow() {
      return Math.pow(this.count, 2);
    },
    getVuexPow() {
      return Math.pow(this.$store.state.num, 2);
    },
  },
  methods: {
    // 测试mutations管理state状态
    add() {
      this.$store.commit("add");
    },
    sub() {
      this.$store.commit("sub");
    },
    // mutations携带一个参数
    add1() {
      const num = 3;
      this.$store.commit("add1", num);
    },
    sub1() {
      const num = 3;
      this.$store.commit("sub1", num);
    },
    // mutations携带多个参数
    add2() {
      const obj = {
        num: 3,
        count: 4,
      };
      this.$store.commit("add2", obj);
    },
    sub2() {
      const num = 3;
      this.$store.commit("sub2", { num: 3, count: 4 });
    },
  },
};
</script>
