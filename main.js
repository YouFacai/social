import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from './store/index';
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$store = store

const app = new Vue({
    ...App
})
app.$mount()
