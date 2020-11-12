<template>
  <div class="RocketLab container my-4">
    <Info
      header="Rocket Lab"
      description="Rocket Lab designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2006 by an engineer named Peter Beck and established headquarters in California in 2013. Currently, their prime launch vehicle is named Electron capable of launching nearly 500lbs to orbit."
    />
    <NextLaunch />
    <Quote
      message="We set out to really make space accessible and make space kind of the third domain where you can innovate and provide your services to everybody here on earth and Rocket Lab's Photon is really kind of the next logical step to doing that."
      author="Peter Beck"
      significance="CEO of Rocket Lab"
    />
    <RocketLabTest />
    <br />
    <hr />
    <div class="text-center">
      <a href="https://thespacedevs.com" target="_blank" rel="noopener"
        >API Data brought to you by The Space Devs</a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Info from "@/components/Info-Template.vue";
import NextLaunch from "@/components/rocketlab/RocketLab-NextLaunch.vue";
import RocketLabTest from "@/components/rocketlab/RocketLab-ItsATest.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "RocketLab",
  components: {
    Info,
    NextLaunch,
    RocketLabTest,
    Quote,
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
          "Rocket Labs is a private aerospace firm based in the United States, their primary launch vehicle is the Electron Rocket.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        name: "keywords",
        content:
          "NASA, Rocket Labs, Next Launch, Rocket Downrange, Latest Launch, Launch Info, Space Industry, Electron Rocket",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Rocket Lab" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/rocket-lab",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Rocket Labs is a private aerospace firm based in the United States, their primary launch vehicle is the Electron Rocket.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/rocket-lab",
      },
      { name: "twitter:title", content: "Rocket Downrange | Rocket Lab" },
      {
        name: "twitter:description",
        content:
          "Rocket Labs is a private aerospace firm based in the United States, their primary launch vehicle is the Electron Rocket.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Rocket Lab" },
      {
        itemprop: "description",
        content:
          "Rocket Labs is a private aerospace firm based in the United States, their primary launch vehicle is the Electron Rocket.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
