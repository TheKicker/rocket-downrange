# Rocket Downrange
[![Netlify Status](https://api.netlify.com/api/v1/badges/192c5a3a-340b-4e0c-ae7b-870e0f221ebc/deploy-status)](https://app.netlify.com/sites/trusting-goldwasser-e71a14/deploys)

Rocket Downrange is a side project site I am developing to showcase the advancements of humanity in regards to the exploration of outer space.  While the core Vue.JS is my own writing (please be patient as I continue to learn), all data you see on the site is returned from various API's.  The first three API's I am using belong to SpaceX (USA), Rocket Lab (USA) and NASA (USA) and are provided for free or free with a registered key.  Thus, the site should continue to be a fun and dynamic way of keeping updated on the industry at large.

Most of the images you see - especially those of planets are owned by NASA.  Other media may be directly from SpaceX, RocketLab, or other organizations featured on the site.  I claim no ownership of these and am only using these as assets of learning.  

I hope the site serves you well and I am always open to critique/criticism, 

 <a href="https://www.cavlemasters.com" target="_blank">- Cav Lemasters ( @TheKicker )</a>

<div align="left">
<hr>
All mission data belongs to corresponding company.  Site will remain open, free and a learning resource for all.  
</br>
</br>
Hosted on Netlify, built with Vue.js, Axios, Vue-Meta, Bootstrap 4 and more! 
</hr>

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

Added Vue-Meta for SEO enhancements/meta tags.  Purely experimental :) <a href="https://alligator.io/vuejs/vue-seo-tips/" target="_blank" rel="noopener">Vue Meta article </a>
```
npm install vue-meta
```
```
// main.js file

import Meta from 'vue-meta';

Vue.use(Meta);

```

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

Had an issue where the site was displaying an unsecure connection.  Mistakenly thought this was a bad SSL Certificate but realized it was due to the API response.  Specifically the Opportunity and Curiousity API's would supply an unsecure link for the images. Fixed the issue by adding a computed property to check if https is enabled, if not add an s to the url.

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
<div align="center">
<h2>Known Issues (Work in Progress):</h2>
</div>
<hr>

Having an issue on the 'Home' page of the site where an error in the console is logged for both Oppy and Curiousity API's.

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

</br>
