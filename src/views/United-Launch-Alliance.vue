<template>
  <div class="ULA container my-4">
    <ULAInfo />
    <ULAN5 />

    <div class="card">
      <div class="card-header">Quote</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>
            Every rocket launch is a leap towards humankind’s destiny and an act
            of defiance against the tyranny of gravity.
          </p>
          <footer class="blockquote-footer">
            Tory Bruno
            <cite title="Source Title">CSO of United Launch Alliance</cite>
          </footer>
        </blockquote>
      </div>
    </div>

    <NASAperseverance />
  </div>
</template>


<script>
// @ is an alias to /src
import ULAInfo from "@/components/ULAInfo.vue";
import ULAN5 from "@/components/ULANext5.vue";
import NASAperseverance from "@/components/NASA-perseverance.vue";

export default {
  name: "United Launch Alliance",
  components: {
    ULAInfo,
    ULAN5,
    NASAperseverance
  },
  metaInfo: {
    title: "Rocket Downrange | United Launch Alliance",
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
      {
        property: "og:title",
        content: "Rocket Downrange | United Launch Alliance"
      },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/united-launch-alliance"
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
        content: "https://www.rocketdownrange.com/united-launch-alliance"
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | United Launch Alliance"
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
      {
        itemprop: "name",
        content: "Rocket Downrange | United Launch Alliance"
      },
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

