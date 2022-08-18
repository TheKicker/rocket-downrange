<template>
  <div class="Sierra container my-4">
    <Info
      header="Sierra Space"
      description="Founded in 1963, Sierra Space is an American, privately held aerospace and national security contractor specializing in aircraft modification and integration, space components and systems, and related technology products for cybersecurity and health.  They employ roughly 4000 across 33 locations in 19 US states, the UK, Germany, and Turkey."
      website="https://www.sierraspace.com/"
      twitter="https://twitter.com/SierraSpaceCo"
      instagram="https://www.instagram.com/sierraspaceco/"
      youtube="https://www.youtube.com/c/SierraSpace"
    />
    
    <Quote
      message="We are building the future space transportation system and amazing new destination habitats. We will enable humanity to live, work, explore, and vacation in Space! "
      author="Tom Vice"
      significance="CEO of Sierra Space"
    />

  <!-- Firefly Alpha first test section --> 
    <OrgNews 
      company="Sierra Space Special Event"
      year="2022"
      title="First 'Dream Chaser' begins to take shape"
      srcType="image"
      source="https://spacenews.com/wp-content/uploads/2022/04/dc-apr2022-1.jpg"
      description1="Construction begins on the first Dream Chaser in Colorado, as Sierra Space continues to pursue it's goal of making travel to space easier. These flights would transport people to a commercial space station like Orbital Reef, a project led by Blue Origin with Sierra Space as a key partner."
      description2="Though under a shroud of mystery, Sierra Space has stated potential for a set of national security missions as well.  Many in the space industry compare the Dream Chaser to the U.S. Space Force's X-37B spaceplane."
      update="Aug 18, 2022"
      link1txt="Sierra Space Website"
      link1url="https://www.sierraspace.com/"
      link2txt="Spacenews.com Article"
      link2url="https://spacenews.com/first-dream-chaser-vehicle-takes-shape/"
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
import OrgNews from "@/components/Org-News.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "Sierra",
  components: {
    Info,
    OrgNews,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | Sierra Space",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Founded in 1963, Sierra Space is an American, privately held aerospace and national security contractor specializing in aircraft modification and integration, space components and systems, and related technology products for cybersecurity and health. Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!",
      },
      {
        name: "keywords",
        content:
          "Sierra Space, Dream Chaser, United States, Space Exploration, Rocket Downrange, Next Launch, Launch Schedule",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Sierra Space" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/sierra-space",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Founded in 1963, Sierra Space is an American, privately held aerospace and national security contractor specializing in aircraft modification and integration, space components and systems, and related technology products for cybersecurity and health. Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/sierra-space",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Sierra Space",
      },
      {
        name: "twitter:description",
        content:
          "Founded in 1963, Sierra Space is an American, privately held aerospace and national security contractor specializing in aircraft modification and integration, space components and systems, and related technology products for cybersecurity and health. Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Sierra Space" },
      {
        itemprop: "description",
        content:
          "Founded in 1963, Sierra Space is an American, privately held aerospace and national security contractor specializing in aircraft modification and integration, space components and systems, and related technology products for cybersecurity and health. Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

