import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueFbCustomerChat from "vue-fb-customer-chat";

Vue.use(VueFbCustomerChat, {
  page_id: "527689331030224", //  change 'null' to your Facebook Page ID,
  theme_color: "#333333", // theme color in HEX
  locale: "en_US", // default 'en_US'
});
Vue.use(BootstrapVue);
// Icons
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
