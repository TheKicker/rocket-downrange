<template>
  <div class="Firefly container my-4">
    <Info
      header="Firefly Aerospace"
      description="Firefly Aerospace is an American private aerospace firm based in Austin,
        Texas, that develops small and medium sized vehicles to launch payloads
        to low earth orbit. They were founded in January of 2014 and employ
        around 300 individuals between the United States and Ukraine. Their
        primary launch vehicle, Alpha, is capable of lifting one metric ton with
        more vehicles in research and development."
      website="https://firefly.com/"
      twitter="https://twitter.com/Firefly_Space"
      instagram="https://www.instagram.com/fireflyaerospace/"
      youtube="https://www.youtube.com/channel/UC31UF9oKANw77yxBLxN852A"
    />
    <NextLaunch />
    
    <Quote
      message="We're really excited and confident about our upcoming launch (December 2020), all great companies start with a great team - and we have an amazing one with plenty of experience. This ain't our first rodeo."
      author="Tom Markusic"
      significance="CEO of Firefly Aerospace"
    />

  <!-- Firefly Alpha first test section --> 
    <OrgNews 
      company="Firefly Special Event"
      year="2021"
      title="First Alpha rocket comes up short"
      srcType="video"
      source="https://www.youtube.com/embed/-HfHAazNM3Q"
      description1="Firefly's Alpha rocket launched on the company's first ever orbital test flight on September 2nd, lifting off from Vandenberg Space Force Base in California at 9:59pm EDT. Everything was looking great for the first 2 minutes and 25 seconds until the rocket rapidly disassembled itself in spectacular fashion high up in the California sky."
      description2="While not successful, congratulations to everyone at Firefly Aerospace for an incredible first attempt and we look forward to the next one! "
      update="Sep 3, 2021"
      link1txt="Mission Overview"
      link1url="https://astra.com/blog/rocket-3-2-ready-to-launch/"
      link2txt="Space.com Article"
      link2url="https://www.space.com/firefly-aerospace-first-alpha-rocket-launch-failure"
    />

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
import NextLaunch from "@/components/firefly/Firefly-NextLaunch.vue";
import OrgNews from "@/components/Org-News.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "Firefly",
  components: {
    Info,
    NextLaunch,
    OrgNews,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | Firefly Aerospace",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Firefly Aerospace is a private aerospace firm based in the United States, their primary launch vehicle is the Alpha.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },
      {
        name: "keywords",
        content:
          "Firefly Aerospace, Alpha Rocket, United States, Space Exploration, Rocket Downrange, Next Launch, Launch Schedule",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Firefly Aerospace" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/Firefly-aerospace",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Firefly Aerospace is a private aerospace firm based in the United States, their primary launch vehicle is the Alpha.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/Firefly-aerospace",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Firefly Aerospace",
      },
      {
        name: "twitter:description",
        content:
          "Firefly Aerospace is a private aerospace firm based in the United States, their primary launch vehicle is the Alpha.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Firefly Aerospace" },
      {
        itemprop: "description",
        content:
          "Firefly Aerospace is a private aerospace firm based in the United States, their primary launch vehicle is the Alpha.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

