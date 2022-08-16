<template>
  <div>我是首页。。。</div>
</template>

<script>
export default {
  name: "HomeView",
  created() {
    // document.title = "首页";
    console.log("Home---组件被创建");
  },
  unmounted() {
    console.log("Home---组件被销毁");
  },
  activated() {
    console.log("Home******组件被激活");
  },
  deactivated() {
    console.log("Home******组件被停止");
  },
};
</script>

<style></style>
