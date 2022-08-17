<template>
  <div class="hello">
    <h3>这是home页面的子组件helloworld</h3>
    {{ count }}
    <hr />
    <h3>在子组件helloworld使用vuex全局管理</h3>
    <p>{{ $store.state.num }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    count: Number,
  },
};
</script>

<style scoped lang="less"></style>
