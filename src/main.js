import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueScrollTo from 'vue-scrollto';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import VLazyImage from "v-lazy-image";

// Fix Leaflet marker icons (same as before)
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Create the Vue 3 app
const app = createApp(App);

// Disable production tip
app.config.productionTip = false;

// Use Vue Router
app.use(router);

// Use VueScrollTo with options
app.use(VueScrollTo, {
  container: 'body',
  duration: 1500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

app.use(VLazyImage, {
  preLoad: 1.3,
  attempt: 1,
});

// Mount the app
app.mount('#app');