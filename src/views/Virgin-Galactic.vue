<template>
  <div class="VirginGalactic container my-4">
    <VirginInfo />
    <NextLaunch />

    <div class="card">
      <div class="card-header">Quote</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>
            There are millions of people out there who would love to become
            astronauts, who'd love to go to space - they'd love to look back at
            this wonderful world from space. That will be the engine that will
            enable us then to develop spaceships to transport people around the
            world at tremendous speeds in an environmentally friendly way.
          </p>
          <footer class="blockquote-footer">
            Sir Richard Branson
            <cite title="Source Title"
              >Co-Founder of Virgin Group (Virgin Galactic & Orbit)</cite
            >
          </footer>
        </blockquote>
      </div>
    </div>

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
import VirginInfo from "@/components/VirginInfo.vue";
import NextLaunch from "@/components/Virgin-NextLaunch.vue";

export default {
  name: "VirginGalactic",
  components: {
    VirginInfo,
    NextLaunch
  },
  metaInfo: {
    title: "Rocket Downrange | Virgin Galactic",
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
      { property: "og:title", content: "Rocket Downrange | Virgin Galactic" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/virgin-galactic"
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
        content: "https://www.rocketdownrange.com/virgin-galactic"
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Virgin Galactic"
      },
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
      { itemprop: "name", content: "Rocket Downrange | Virgin Galactic" },
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

