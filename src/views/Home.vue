<template>
  <div class="home">
    <Homepage />
    <NASAapod />
    <NASAinsight />
    <NASAcuriosity />
    <NASAopportunity />
    <ExternalLinks />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "@/components/Homepage.vue";
import NASAapod from "@/components/NASA-APOD.vue";
import NASAinsight from "@/components/NASA-insight.vue";
import NASAcuriosity from "@/components/NASA-curiosity.vue";
import NASAopportunity from "@/components/NASA-opportunity.vue";
import ExternalLinks from "@/components/ExternalLinks.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Homepage,
    NASAapod,
    NASAinsight,
    NASAcuriosity,
    NASAopportunity,
    ExternalLinks,
    Contact
  },
  metaInfo: {
    title: "Rocket Downrange | Home",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Built with Vue.JS, Netlify and more! "
      },
      {
        name: "keywords",
        content:
          "NASA, SpaceX, Rocket Labs, Next Launch, Rocket, Downrange, Latest Launch, Launch Info, Space Industry"
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com"
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Built with Vue.JS, Netlify and more! "
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com"
      },
      { name: "twitter:title", content: "Rocket Downrange" },
      {
        name: "twitter:description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Built with Vue.JS, Netlify and more! "
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg"
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange" },
      {
        itemprop: "description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Built with Vue.JS, Netlify and more!"
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg"
      }
    ]
  }
};
</script>
