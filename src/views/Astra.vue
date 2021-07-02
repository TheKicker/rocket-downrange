<template>
  <div class="astra container my-4">
    <Info
      header="Astra"
      description="A small launch vehicle company based in Alameda, California, United States.  Astra was founded in 2004 by Chris Kemp and Adam London, then incorporated in 2016. Currently they employ a small team of around 119 individuals with a primary launch vehicle named Rocket 3.0 "
      website="https://astra.com"
      twitter="https://twitter.com/Astra"
      instagram="https://instagram.com/astraspace"
    />
    <NextLaunch />
    <Quote
      message="Things don't become impossible, they just take a little bit more time. "
      author="Chris Kemp"
      significance="Co-Founder of Astra"
    />
    <AstraPublic />
    <AstraTest2 />

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
import NextLaunch from "@/components/astra/Astra-NextLaunch.vue";
import AstraPublic from "@/components/astra/Astra-Public.vue";
import AstraTest2 from "@/components/astra/Astra-Test-2.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "Astra",
  components: {
    Info,
    NextLaunch,
    AstraPublic,
    AstraTest2,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | Astra",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Astra is a private aerospace firm based in the United States, their primary launch vehicle is the Rocket 3.0.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },
      {
        name: "keywords",
        content:
          "Astra, Rocket 3, Alameda, California, United States, Space Exploration, Rocket Downrange, Next Launch, Launch Schedule",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Astra" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/Astra",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Astra is a private aerospace firm based in the United States, their primary launch vehicle is the Rocket 3.0.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/Astra",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Astra",
      },
      {
        name: "twitter:description",
        content:
          "Astra is a private aerospace firm based in the United States, their primary launch vehicle is the Rocket 3.0.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Astra" },
      {
        itemprop: "description",
        content:
          "Astra is a private aerospace firm based in the United States, their primary launch vehicle is the Rocket 3.0.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!   ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

