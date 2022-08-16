<template>
  <div>个人中心页面。。。</div>
  <br />
  <nav class="menu">
    <ul>
      <li>
        <router-link class="link-style" to="/user/order">
          我的订单
        </router-link>
      </li>
      <li>
        <router-link class="link-style" to="/user/setting">
          我的设置
        </router-link>
      </li>
      <li>
        <router-link class="link-style" to="/user/page/1"> 文章一 </router-link>
      </li>
    </ul>
    <!-- 动态路由 -->
    <ul>
      <li v-for="item in artices" :key="item.id">
        <router-link class="link-style" :to="'/user/page/' + item.id">
          {{ item.title }}
        </router-link>
      </li>
      <!-- 普通传值 -->
      <li>
        <router-link class="link-style" to="/user/article?name=三国&age=290">
          文本页面1
        </router-link>
      </li>
      <li style="display: flex; flex-direction: column">
        <router-link
          class="link-style"
          :to="{ path: '/user/article', query: { name: '水浒', age: 400 } }"
        >
          文本页面2
        </router-link>
        <router-link
          class="link-style"
          :to="{ path: '/user/article', query: articleItem }"
        >
          文本页面3
        </router-link>
        <button
          @click="$router.push({ path: '/user/article', query: articleItem })"
        >
          文本页面4
        </button>
      </li>
    </ul>
  </nav>
  <section class="content">
    <router-view></router-view>
  </section>
</template>

<script scope>
export default {
  name: "UserView",
  data() {
    return {
      artices: [
        { id: 10, title: "文章十" },
        { id: 11, title: "文章十一" },
        { id: 12, title: "文章十二" },
        { id: 13, title: "文章十三" },
        { id: 14, title: "文章十四" },
      ],
      articleItem: { name: "西游", age: 500 },
      path: "/user",
    };
  },
  created() {
    // document.title = "个人中心";
    console.log("User---组件被创建");
  },
  unmounted() {
    console.log("User---组件被销毁");
  },
  activated() {
    console.log("User******组件被激活");
    this.$router.push(this.path);
  },
  deactivated() {
    console.log("User******组件被停止");
  },
  beforeRouteLeave(to, from) {
    this.path = from.fullPath;
  },
};
</script>

<style>
.menu {
  width: 25%;
  height: 400px;
  background-color: #888;
  float: left;
  padding: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 10px 0;
  padding: 0;
}
.link-style {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

.link-style.router-link-exact-active {
  color: red;
}

.content {
  width: 70%;
  height: 400px;
  background-color: #ccc;
  float: right;
}
</style>
