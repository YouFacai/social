import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
// import io from './util/weapp.socket.io.js';
import store from './store/index';
Vue.use(uView);

Vue.config.productionTip = false
// Vue.prototype.socket = io('http://192.168.43.30:8082')
// Vue.prototype.socket = io('http://localhost:8082')
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
