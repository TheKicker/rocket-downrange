# Rocket Downrange 🚀
[![Netlify Status](https://api.netlify.com/api/v1/badges/192c5a3a-340b-4e0c-ae7b-870e0f221ebc/deploy-status)](https://app.netlify.com/sites/trusting-goldwasser-e71a14/deploys)

Rocket Downrange is a side project site I am working on to showcase the advancements of humanity in regards to the exploration of outer space.  While the core Vue.JS is my own writing (please be patient as I continue to learn), all data you see on the site is returned from various API's.  A vast majority of the site is fully dynamic and changes daily, based on data from other sources.  Thus, the site should continue to be a fun  and interesting way of keeping updated on the industry at large.

Most of the data and images you see - especially those of planets are taken/owned by NASA.  Other media may be directly from Unsplash, Adobe Creative Cloud, SpaceX, RocketLab, or other organizations and API's featured on the site.  <strong>I claim no ownership of these items and am only using them as assets of learning.</strong>  If you see something that needs proper attribution or I can shout out something amazing of yours - please send me a message! I love cheering on others in the industry! 

I hope the site serves you well and I am always open to thoughts and opinions, 

 <a href="https://www.cavlemasters.com/contact" target="_blank">- Cav Lemasters ( @TheKicker ) </a>

<div align="center">
<h3>Support the project and <a href="https://www.buymeacoffee.com/cavlemasters">Buy Me a Coffee ☕️</a></h3>
</br>
</div>

<div align="left">
<hr>
All mission data belongs to corresponding company or the API I am receiving it from.  Rocket Downrange will remain free to access and an open learning resource for the curious! 
</br>
</br>
Hosted on Netlify, built with Vue.js, Axios, Vue-Meta, Bootstrap 4 and more! Note, this site also uses Google Analytics, AdSense, SEMRUSH as I strive to master those platforms as well. 
</hr>
<hr>
</div>

<br>

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<br>
<hr>
<div align="center">
<h2>Developer Notes:</h2>
</div>
<hr>

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

Added <strong>Vue-Meta</strong> for SEO enhancements/meta tags.  Purely experimental :) <a href="https://alligator.io/vuejs/vue-seo-tips/" target="_blank" rel="noopener">Vue Meta article </a>
```
npm install vue-meta
```
```
// main.js file

import Meta from 'vue-meta';

Vue.use(Meta);

```

So far, extremely happy with this.  Super easy to implement, super easy to use, works perfectly thus far. 

</br>
<hr>
</br>

URLs were not working properly. So for example, rocketdownrange.com/spacex was returning a 404. Solved this by adding netlify.toml file and slight alteration to routes. 
```
// netlify.toml

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false

```

</br>
<hr>
</br>

Had an issue where the site was displaying an unsecure connection.  Mistakenly thought this was a bad SSL Certificate but realized it was due to the API response data.  Specifically the Opportunity and Curiousity API's would supply an unsecure link for the images. Fixed the issue by adding a computed property to check if https is enabled, if not add an s to the supplied url.

```
// src/components/Opportunity.vue & Curiousity.vue

computed:{
  secureURL: function(){
    var baseURL = this.results.photos[0].img_src;
      if (baseURL.slice(0, 5) != "https") {
        var secure_url = baseURL.slice(0, 4) + "s" + baseURL.slice(4);
        return secure_url;
      } else {
        return baseURL;
      }
  }
}

// then call secureURL within the image tag

<img :src="secureURL" class="image-fluid"/>

```

</br>
<hr>
</br>


Added a form to the index page of the site for comments/suggestions, etc. Had an issue where the form wasnt working - per <a href="https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/" target="_blank">this article</a> it's related to the default way Vue renders client side but the Netlify post processing bots expect HTML on site deploy.  Any <code> netlify </code> form attribute tags included in a Vue app would only be inserted into the DOM client-side, rather than in the HTML and thereby runs the risk of being totally overlooked by the build bots.

In the process of solving this by adding a static form for the Netlify build bots. Form does work - honestly no idea what I did but I think the issue was related to my honey-pot.  Rewrote that section and it became functional.  

```
// public/index.html

 <!-- A little help for the Netlify post-processing bots -->
  <form method="POST" name="Contact" netlify-honeypot="bot-field" data-netlify="true" hidden>
    <input type="text" id="name" name="name" required />
    <input type="text" id="subject" name="subject" required />
    <textarea name="message" id="message" required></textarea>
    <p class="ohnohoney">Are you happy:<input type="hidden" name="bot-field" value="Contact" /></p>
    <button type="submit" name="submit">submit</button>
  </form>

```

```
// @/src/components/Contact/vue

<form>
  Line 13-93
</form>
```

</br>
<hr>
</br>

Added <strong>vue-scrollto</strong> for UI Enhancement, testing on the solar system page.  Purely experimental :) <a href="https://vue-scrollto.netlify.app/docs/" target="_blank" rel="noopener">vue-scrollto documentation</a>
```
npm install --save vue-scrollto
```
```
// main.js file

import VueScrollTo from 'vue-scrollto';

// Instruct Vue to use these parameters
// Default duration was 500, set to 1500 at launch

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

```

So far, super happy with how easy it was to implement and how well it works.  Going to continue testing. 

<hr>
<br>
<strong>Unsecure images from NASA API</strong> - Had an issue on the 'Home' page of the site where an error in the console is logged for both Oppy and Curiousity API's.

I think I have tracked this down to how I am calling bits of information out of the endpoints for the JSON response.  The browser does not like the [0] added to return the first photo/details from the array.  I cannot however remove the zero because then the entire component vanishes. 

</br> For example, when I call <i> this.results.photos[0].img_src </i>

```
> Type Error: Cannot read property '0' of undefined
      at (file-1.js:1)
      at (file-2.js:1)
      at (file-3.js:1)
      at (file-4.js:1)
      at (file-5.js:1)

```

Solving this issue with conditional (ternary) operator when I receive the API data as such, check if this paragraph returns a null or undefined endpoint, if it does return a placeholder, else return the endpoint.

```
  <p>{{ this.results.paragraph != null || undefined ? this.results.paragraph : placeholder.paragraph }}</p>

```
</br>

</br>
<hr>
</br>

<strong> Installed Depcheck to remove unused dependencies </strong> - Using this article as a reference (<a href="https://dev.to/manitej/remove-unused-npm-modules-in-less-than-30-seconds-4g8k">link</a>) wanted to slim down my package.json using <a href="https://www.npmjs.com/package/depcheck">depcheck.</a>

```
npx depcheck

# generates a list of unused dependencies

npm uninstall <package>
```

</br>
<hr>
</br>

<strong> Installed Vue2-datepicker to begin work on a component where you can look up historical APODs. </strong> - Using this page as a reference (<a href="https://www.npmjs.com/package/vue2-datepicker">link</a>)</a>

```
npm install vue2-datepicker 

# generates a calendar date picker

<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

  export default {
    components: { DatePicker },
    data() {
      return {
        time1: null,
        time2: null,
        time3: null,
      };
    },
  };
</script>

<template>
  <div>
    <date-picker v-model="time1" valueType="format"></date-picker>
    <date-picker v-model="time2" type="datetime"></date-picker>
    <date-picker v-model="time3" range></date-picker>
  </div>
</template>
```


</br>
<hr>
</br>

<strong> Installed v-lazy-image to lazy load images </strong> - Using this page as a reference (<a href="https://vuedose.tips/lazy-loading-images-with-v-lazy-image">link</a>). Here is the official page on NPM (<a href="https://www.npmjs.com/package/v-lazy-image">link</a>)

```
npm install v-lazy-image 

import VLazyImage from "v-lazy-image/v2";

export default {
  components: {
    VLazyImage
  }
};

<template>
  <v-lazy-image src="http://lorempixel.com/400/200/" />
</template>

```

</br>
<hr>
</br>

<strong> Added Finnhub for company stock information </strong> - Using this page as a reference (<a href="https://finnhub.io/docs/api/quote">link</a>), you must get an API key (for free) from the site before using the API. Here is the official Finnhub website (<a href="https://finnhub.io/">link</a>) to sign up for an account. 

```
import Stock from "@/components/Stock-Price.vue";

components: { Stock }

<template>

  <Stock 
      ORG="Rocket Downrange" 
      TICKER="RKDR" 
      LINK="https://www.nasdaq.com/market-activity/stocks/rkdr" 
      FINN="https://widget.finnhub.io/widgets/stocks/chart?symbol=RKDR&amp;watermarkColor=%231db954&amp;backgroundColor=%23222222&amp;textColor=white"
  
  />

</template>

```

</br>
<hr>
</br>

<strong> Added Leaflet JS for Launch Location Maps </strong> - Using this page as a reference (<a href="https://vue2-leaflet.netlify.app/examples/feature-group.html">link</a>). Here is the official Vue2-Leaflet github (<a href="https://github.com/vue-leaflet/Vue2Leaflet">link</a>).

Main.js

```
npm i leaflet
npm i vue2-leaflet

import { Icon }  from 'leaflet'
import "leaflet/dist/leaflet.css";

// this part resolves an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

```

Actual template

```
 <template>
  <div>
    <l-map style="height: 500px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"><l-popup>{{ content }}</l-popup></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
    name: "LaunchLocations",
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup
    },
    props:{
        x: String,
        y: String,
        z: String,
        content: String
    },
    data() {
        return {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: this.z,
        center: [this.x, this.y],
        markerLatLng: [this.x, this.y],
        };
    },
    };
</script>


```


</br>
<hr>
<div align="center">
<h2>Known Issues (Work in Progress):</h2>
</div>
<hr>
<br>
Hey! No known issues to show! :) If you found something, send me a message on the site!