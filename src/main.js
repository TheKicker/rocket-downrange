import Vue from 'vue';
import App from './App.vue';
import Meta from 'vue-meta';
import VueScrollTo from 'vue-scrollto';
import router from './router';
import { Icon }  from 'leaflet'
import "leaflet/dist/leaflet.css";

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


Vue.config.productionTip = false;

// Module for SEO purposes
Vue.use(Meta);

// Module for add to calendar functionality
// https://www.npmjs.com/package/add-to-calendar-button

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
