<template>
  <div class="home">
    <Homepage />
    <NASAapod />
    <SPACEXstarshipSN9 hidden />
    <NASAperseverance />
    <LLNextLaunch />
    <SNAPI />
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
import NASAperseverance from "@/components/NASA-perseverance.vue";
import NASAapod from "@/components/NASA-APOD.vue";
import LLNextLaunch from "@/components/LaunchLib-Next.vue";
import NASAinsight from "@/components/NASA-insight.vue";
import NASAcuriosity from "@/components/NASA-curiosity.vue";
import NASAopportunity from "@/components/NASA-opportunity.vue";
import SPACEXstarshipSN9 from "@/components/spacex/SpaceX-Starship-SN9.vue";
import ExternalLinks from "@/components/ExternalLinks.vue";
import Contact from "@/components/Contact.vue";
import SNAPI from "@/components/LaunchLib-SpaceNews.vue";

export default {
  name: "Home",
  components: {
    Homepage,
    SPACEXstarshipSN9,
    NASAperseverance,
    NASAapod,
    LLNextLaunch,
    NASAinsight,
    NASAcuriosity,
    NASAopportunity,
    ExternalLinks,
    Contact,
    SNAPI,
  },
  metaInfo: {
    title: "Rocket Downrange",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "A dynamically generated site made possible through various NASA APIs, TheSpaceDevs APIs and others.  Featuring rocket launch schedule, astronomy picture of the day, company information, rover pictures, and more! Made on Earth by Cavan Lemasters, coffee and Vue! ",
      },
      {
        name: "keywords",
        content:
          "NASA, SpaceX, Rocket Labs, Next Launch, Rocket, Downrange, Latest Launch, Opportunity, Curiousity, Insight, Perserverance, Rovers, Mars, APOD, Cav, Lemasters, Cavan Lemasters",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "A dynamically generated site made possible through various NASA APIs, TheSpaceDevs APIs and others.  Featuring rocket launch schedule, astronomy picture of the day, company information, rover pictures, and more! Made on Earth by Cavan Lemasters, coffee and Vue! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com",
      },
      { name: "twitter:title", content: "Rocket Downrange" },
      {
        name: "twitter:description",
        content:
          "A dynamically generated site made possible through various NASA APIs, TheSpaceDevs APIs and others.  Featuring rocket launch schedule, astronomy picture of the day, company information, rover pictures, and more! Made on Earth by Cavan Lemasters, coffee and Vue! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange" },
      {
        itemprop: "description",
        content:
          "A dynamically generated site made possible through various NASA APIs, TheSpaceDevs APIs and others.  Featuring rocket launch schedule, astronomy picture of the day, company information, rover pictures, and more! Made on Earth by Cavan Lemasters, coffee and Vue! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
