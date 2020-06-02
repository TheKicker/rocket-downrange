import Vue from 'vue';
import App from './App.vue';
import Meta from 'vue-meta';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Meta);

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
