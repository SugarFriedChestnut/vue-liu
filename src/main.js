import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./http";
import moment from "dayjs";
import axios from "axios";
import Vant from "vant";
import "vant/lib/index.css";
import "lib-flexible/flexible.js";
import "lib-flexible";
import lazy from "vue-lazyload"

Vue.prototype.$moment = moment;
Vue.prototype.$axios = http;

Vue.use(lazy);
Vue.use(Vant);

Vue.config.productionTip = false;

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.interceptors.response.use(
  response => {
    return response.data
  }, error => {
    return Promise.reject(error)
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
