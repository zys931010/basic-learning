<template>
  <nav>
    <router-link class="bg" active-class="active" to="/home">
      首页
    </router-link>
    |
    <router-link class="bg" to="/about">关于我的</router-link> |
    <router-link to="/user">个人中心</router-link> |
    <router-link to="/content">内容页</router-link> |
    <router-link to="/about" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate" role="link">
        About Us
      </button>
    </router-link>
    |
    <button @click="$router.go(-1)">返回</button>
    |
    <button
      :class="{ active: $route.path === '/user' }"
      @click="$router.push('/user')"
    >
      个人中心
    </button>
    | {{ $route.path }}
  </nav>
  <hr />
  <!-- vue2写法 -->
  <!-- <keep-alive>
    <router-view></router-view>
  </keep-alive> -->
  <!-- vue3 -->
  <router-view v-slot="{ Component }">
    <transition>
      <!-- include/exclude匹配的是组件里name的值 -->
      <keep-alive exclude="AboutView">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.active {
  color: red !important;
}
.bg {
  background-color: #ccc;
  text-decoration: none;
}
.one {
  background-color: lightblue;
  width: 25%;
  height: 200px;
  float: left;
}
.two {
  background-color: #888888;
  width: 50%;
  height: 200px;
  float: left;
}
.three {
  background-color: #efefef;
  width: 25%;
  height: 200px;
  float: right;
}
</style>
