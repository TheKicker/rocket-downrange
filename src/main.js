import Vue from 'vue';
import App from './App.vue';
import Meta from 'vue-meta';
import VueScrollTo from 'vue-scrollto';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Meta);

// You can also pass in the default options
Vue.use(VueScrollTo, {
	container: "body",
	duration: 1500,
	easing: "ease",
	offset: 0,
	force: true,
	cancelable: true,
	onStart: false,
	onDone: false,
	onCancel: false,
	x: false,
	y: true
})

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
