import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import '../node_modules/swiper/dist/css/swiper.css'
import {Toast} from 'mint-ui';
import {Swipe, SwipeItem} from 'mint-ui';
import {Popup} from 'mint-ui';

import '../node_modules/mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.component(Swipe.name, Swipe);
Vue.component(Popup.name, Popup);
Vue.component(Toast);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
//在全局配置请求headers的信息
axios.defaults.headers.common['cywlfw-data'] = 'wechat';
Vue.use(VueAxios, axios)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
