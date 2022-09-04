import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '37817892983-vgjh09grv5g5ebb3q4dej9hm9rp64v7m.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
Vue.use(BootstrapVue);
// Icons
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
