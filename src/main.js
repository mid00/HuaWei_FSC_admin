import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
//import VueClipboard from 'vue-clipboard2'
import 'element-ui/lib/theme-chalk/index.css'
import globalVariable from "./config/global";
import  fun from './common/function'

Vue.prototype.GLOBAL=globalVariable
Vue.use(fun)


Vue.config.productionTip = false;
Vue.use(ElementUI);


// 过滤器
// Vue.filter('cnValue',value=>{
// 	if(value==1){ return '启用'}
// 	else{ return '禁用'}
// })

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
