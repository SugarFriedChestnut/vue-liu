import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { //首页
      path: "/",
      name: "home",
      component: Home,
      meta: {
        hide: true
      }
    },
    { //分类
      path: "/Classification",
      name: "Classification",
      component: () =>
        import( "./views/Classification.vue"),
      meta: {
        hide: true
      }
    },
    { //购物车
      path: "/ShoppingCart",
      name: "ShoppingCart",
      component: () =>
          import( "./views/ShoppingCart.vue"),
      meta: {
        hide: true
      }
    },
    { //我的
      path: "/Mine",
      name: "Mine",
      component: () =>
          import( "./views/Mine.vue"),
      meta: {
        hide: true
      }
    },
    { //商品详情
      path: "/productDetails",
      name: "productDetails",
      component: () =>
          import( "./views/productDetails.vue"),
      meta: {
        hide: false
      }
    },
    { //登录
      path: "/logInRegister",
      name: "logInRegister",
      component: () =>
          import( "./views/logInRegister.vue"),
      meta: {
        hide: false
      }
    },
    { //注册
      path: "/Registered",
      name: "Registered",
      component: () =>
          import( "./views/Registered.vue"),
      meta: {
        hide: false
      }
    }
  ]
});
export default router