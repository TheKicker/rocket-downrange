<template>
  <div class="SpaceX container my-4">
    <SpaceXinfo />
    <NextLaunch />
    <LatestLaunch />
    <div class="card">
      <div class="card-header">Quote</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>Life cannot be just about solving one problem after another. There need to be things that inspire you, that make you glad to wake up and be a part of humanity.</p>
          <footer class="blockquote-footer">
            Elon Musk
            <cite title="Source Title">CEO of SpaceX</cite>
          </footer>
        </blockquote>
      </div>
    </div>
    <SpaceMan msg="Where is Starman? " />
    <br />
    <hr />
    <div class="text-center">
      <a
        href="https://github.com/r-spacex/SpaceX-API"
        target="_blank"
        rel="noopener"
      >Link to SpaceX API Repository</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SpaceXinfo from "@/components/SpaceX-info.vue";
import NextLaunch from "@/components/SpaceX-NextLaunch.vue";
import LatestLaunch from "@/components/SpaceX-LatestLaunch.vue";
import SpaceMan from "@/components/SpaceMan.vue";

export default {
  name: "SpaceX",
  components: {
    SpaceXinfo,
    NextLaunch,
    LatestLaunch,
    SpaceMan
  },
  metaInfo: {
    title: "Rocket Downrange | SpaceX",
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
      { property: "og:title", content: "Rocket Downrange | SpaceX" },
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
      { name: "twitter:title", content: "Rocket Downrange | SpaceX" },
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
      { itemprop: "name", content: "Rocket Downrange | SpaceX" },
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
