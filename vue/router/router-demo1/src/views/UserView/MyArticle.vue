<template>
  <h1>名字:{{ $route.query.name }}</h1>
  <h1>年龄:{{ getAge }}</h1>
</template>

<script>
export default {
  computed: {
    getAge: {
      get() {
        return this.$route.query.age;
      },
    },
  },
};
</script>

<style></style>
