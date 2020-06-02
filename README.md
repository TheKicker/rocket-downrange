# Rocket Downrange
[![Netlify Status](https://api.netlify.com/api/v1/badges/192c5a3a-340b-4e0c-ae7b-870e0f221ebc/deploy-status)](https://app.netlify.com/sites/trusting-goldwasser-e71a14/deploys)
<div align="center">
Rocket Downrange is a site I am developing to showcase the advancements of humanity in regards to the exploration of outer space.  While the core Vue.JS is my own writing (please be patient as I continue to learn), all data you see on the site is returned from various API's.  The first three API's I am using belong to SpaceX (USA), Rocket Lab (USA) and NASA (USA) and are provided for free or free with a registered key.  Thus, the site should continue to be a fun and dynamic way of keeping updated on the industry at large.

I hope the site serves you well and I am always open to critique/criticism, 

 -Cav

<hr>
All mission data belongs to corresponding company.  Most of the images are not mine, sourced from Adobe Creative Cloud and other free graphics sites
<br>
<li> Hosted on Netlify, built with Vue.js, Axios, Bootstrap 4 and more! </hr>

<hr>
</div>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<hr>
<div align="center">
<h2>Developer Notes:</h2>
</div>

Remove the url # issue - simple fix is to add mode:`history` to the Vue Router. 
```
// router/index.js

const router = new VueRouter({
	routes, mode: 'history'
});
```
</br>
<hr>
</br>

Added Vue-Meta for SEO enhancements/meta tags.  Purely experimental :) <a href="https://alligator.io/vuejs/vue-seo-tips/" target="_blank" rel="noopener">Vue Meta article </a>
```
npm install vue-meta
```
```
// main.js file

import Meta from 'vue-meta';

Vue.use(Meta);
```