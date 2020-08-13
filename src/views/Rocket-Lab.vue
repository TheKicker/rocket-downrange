<template>
  <div class="RocketLab container my-4">
    <div class="m-4">
      <!-- <h3 class="text-red">NOTE: I am using a fan-made API that is not updated by the company.</h3> -->
    </div>
    <RocketLabinfo />
    <NextLaunch />
    <div class="card">
      <div class="card-header">Quote</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>We set out to really make space accessible and make space kind of the third domain where you can innovate and provide your services to everybody here on earth and Rocket Lab's Photon is really kind of the next logical step to doing that.</p>
          <footer class="blockquote-footer">
            Peter Beck
            <cite title="Source Title">CEO of Rocket Lab</cite>
          </footer>
        </blockquote>
      </div>
    </div>
    <RocketLabTest />
    <br />
    <hr />
    <div class="text-center">
      <a
        href="https://github.com/barrosfilipe/Rocket-Lab-API"
        target="_blank"
        rel="noopener"
      >Link to Rocket Lab API Repository</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RocketLabinfo from "@/components/RocketLabinfo.vue";
import NextLaunch from "@/components/RocketLab-NextLaunch.vue";
import RocketLabTest from "@/components/RocketLab-ItsATest.vue";

export default {
  name: "RocketLab",
  components: {
    RocketLabinfo,
    NextLaunch,
    RocketLabTest
  },
  data() {
    return {};
  },
  metaInfo: {
    title: "Rocket Downrange | Rocket Lab",
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
      { property: "og:title", content: "Rocket Downrange | Rocket Lab" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/rocket-lab"
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
        content: "https://www.rocketdownrange.com/rocket-lab"
      },
      { name: "twitter:title", content: "Rocket Downrange | Rocket Lab" },
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
      { itemprop: "name", content: "Rocket Downrange | Rocket Lab" },
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
