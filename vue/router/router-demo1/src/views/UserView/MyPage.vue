<template>
  <h1>这是文章模板</h1>
  文章ID{{ $route.params.id }}---{{ getPageId }}
</template>

<script>
export default {
  name: "MyPage",
  computed: {
    getPageId() {
      return this.$route.params.id;
    },
  },
  created() {
    console.log("Page---组件被创建");
  },
  unmounted() {
    console.log("Page---组件被销毁");
  },
};
</script>

<style></style>
