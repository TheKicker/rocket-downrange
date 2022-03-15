<template>
  <div class="SolarSystem">
    <div class="bg-black">
      <SolarSystemTemplate />
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import SolarSystemTemplate from "@/components/solar-system/Solar-System.vue";

export default {
  name: "SolarSystem",
  components: {
    SolarSystemTemplate
  },
  metaInfo: {
    title: "Rocket Downrange | The Solar System",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Explore the Solar System in this interactive page from Rocket Downrange.  Using images from various NASA missions to the great beyond, data from decades of research and smooth scroll - it's a unique experience to visit all of the objects in our local neighborhood!  "
      },
      {
        name: "keywords",
        content:
          "Space, Exploration, Rocket Downrange, Solar System, Sun, Mercury, Venus, Earth, Mars, Jupiter, Uranus, Neptune, Saturn, Pluto, learn"
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | The Solar System" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/solar-system"
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Explore the Solar System in this interactive page from Rocket Downrange.  Using images from various NASA missions to the great beyond, data from decades of research and smooth scroll - it's a unique experience to visit all of the objects in our local neighborhood!  "
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/solar-system"
      },
      { name: "twitter:title", content: "Rocket Downrange | The Solar System" },
      {
        name: "twitter:description",
        content:
          "Explore the Solar System in this interactive page from Rocket Downrange.  Using images from various NASA missions to the great beyond, data from decades of research and smooth scroll - it's a unique experience to visit all of the objects in our local neighborhood!  "
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg"
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | The Solar System" },
      {
        itemprop: "description",
        content:
          "Explore the Solar System in this interactive page from Rocket Downrange.  Using images from various NASA missions to the great beyond, data from decades of research and smooth scroll - it's a unique experience to visit all of the objects in our local neighborhood!  "
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg"
      }
    ]
  }
};
</script>

<style scoped>
.bg-black {
  background: black;
}
</style>
