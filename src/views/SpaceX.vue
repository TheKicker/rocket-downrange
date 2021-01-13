<template>
  <div class="SpaceX container my-4">
    <Info
      header="SpaceX"
      description="SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets. Based in Hawthorne, California, the company employs over 7000 who design, operate and relaunch 3 seperate vehicles."
      website="https://www.spacex.com/"
      twitter="https://twitter.com/SpaceX"
      instagram="https://www.instagram.com/spacex/"
      youtube="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA"
    />
    <NextLaunch />
    <LatestLaunch hidden/>
    <Quote
      message="Life cannot be just about solving one problem after another. There need to be things that inspire you, that make you glad to wake up and be a part of humanity."
      author="Elon Musk"
      significance="CEO of SpaceX"
    />
    <SPACEXstarshipSN9 />
    <SPACEXstarshipSN8 />
    <SPACEXcrewdemo2 />
    <Starman msg="Where is Starman? " />
    <br />
    <hr />
    <div class="text-center">
      <a
        href="https://github.com/r-spacex/SpaceX-API"
        target="_blank"
        rel="noopener"
        >Link to SpaceX API Repository</a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Info from "@/components/Info-Template.vue";
import NextLaunch from "@/components/spacex/SpaceX-NextLaunch.vue";
import LatestLaunch from "@/components/spacex/SpaceX-LatestLaunch.vue";
import SPACEXcrewdemo2 from "@/components/spacex/SpaceX-CrewDemo2.vue";
import SPACEXstarshipSN8 from "@/components/spacex/SpaceX-Starship-SN8.vue";
import SPACEXstarshipSN9 from "@/components/spacex/SpaceX-Starship-SN9.vue";
import Starman from "@/components/spacex/SpaceX-Starman.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "SpaceX",
  components: {
    Info,
    NextLaunch,
    LatestLaunch,
    SPACEXcrewdemo2,
    SPACEXstarshipSN8,
    SPACEXstarshipSN9,
    Starman,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | SpaceX",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        name: "keywords",
        content:
          "NASA, SpaceX, Elon Musk, Next Launch, Falcon 9, Falcon Heavy, Dragon, Rocket Downrange, Latest Launch, Launch Info, Space Industry",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | SpaceX" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/spacex",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/spacex",
      },
      { name: "twitter:title", content: "Rocket Downrange | SpaceX" },
      {
        name: "twitter:description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | SpaceX" },
      {
        itemprop: "description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
