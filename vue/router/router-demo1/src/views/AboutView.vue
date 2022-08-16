<template>
  <div>
    关于我的页面。。。
    <button @click="add()">到达个人中心页面</button>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  methods: {
    add() {
      this.$router.push("/user");
    },
  },
  created() {
    // document.title = "关于我的";
    console.log("About---组件被创建");
  },
  unmounted() {
    console.log("About---组件被销毁");
  },
  activated() {
    console.log("About******组件被激活");
  },
  deactivated() {
    console.log("About******组件被停止");
  },
};
</script>

<style></style>
