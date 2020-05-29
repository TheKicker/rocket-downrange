# Rocket Downrange
[![Netlify Status](https://api.netlify.com/api/v1/badges/192c5a3a-340b-4e0c-ae7b-870e0f221ebc/deploy-status)](https://app.netlify.com/sites/trusting-goldwasser-e71a14/deploys)

Hosted on Netlify, built with Vue.js

Using Axios, Bootstrap 4 and more! 

All mission data belongs to corresponding company.  Images are not mine. Just a fan site. 


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


### Dev Notes:

Remove the url # issue - simple fix is to add mode:`history` to the Vue Router. 
```
const router = new VueRouter({
	routes, mode: 'history'
});
```
