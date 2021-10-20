<template>
  <div class="blueorigin container my-4">
    <Info
      header="Blue Origin"
      description="A launch vehicle company based in Kent, Washington, United States.  Blue Origin was founded in 2000 by Jeff Bezos, the founder and executive chairman of Amazon. Currently they employ a team of 3,500 and aim to make space more accessible via the New Shepard rocket. "
      website="https://www.blueorigin.com/"
      twitter="https://twitter.com/blueorigin"
      instagram="https://www.instagram.com/blueorigin/"
      youtube="https://www.youtube.com/user/blueoriginchannel"
    />
    <NextLaunch />
    <Quote
      message="Our motto at Blue Origin is 'Gradatim Ferociter' or 'Step by Step, Ferociously.'"
      author="Jeff Bezos"
      significance="Founder of Blue Origin and Amazon"
    />

    <!-- Blue Origin second commercial launch --> 
    <OrgNews 
      company="Blue Origin Special Event"
      year="2021"
      title="Four More Commercial Astronauts Return from Space"
      srcType="image"
      source="https://www.blueorigin.com/assets/blue-origin-ns18-training-crew-portrait-october-10-2021.jpg"
      description1="Blue Origin successfully completed New Shepard’s second human flight today with four private citizens onboard. The crew included Dr. Chris Boshuizen, Glen de Vries, Audrey Powers, and William Shatner, as well as thousands of postcards from Blue Origin’s foundation, Club for the Future.  All officially became astronauts when they passed the Karman Line, the internationally recognized boundary of space. "
      update="Oct 20, 2021"
      link1txt="Blue Origin Article"
      link1url="https://www.blueorigin.com/news/new-shepard-ns-18-mission-updates"
      link2txt="Space.com Article"
      link2url="https://www.space.com/william-shatner-blue-origin-flight-moved-tears-reaction"
      link3txt="Stream Replay"
      link3url="https://www.youtube.com/watch?v=uEhdlIor-do"
    />

    <!-- Blue Origin first commercial launch --> 
    <OrgNews 
      company="Blue Origin Special Event"
      year="2021"
      title="Four Commercial Astronauts Return from Space"
      srcType="image"
      source="https://rocketdownrange.com/organizations/blue-origin-commercial.jpg"
      description1="Blue Origin successfully completed New Shepard’s first human flight today with four private citizens onboard. The crew included Jeff Bezos, Mark Bezos, Wally Funk and Oliver Daemen, who all officially became astronauts when they passed the Karman Line, the internationally recognized boundary of space. "
      update="Jul 21, 2021"
      link1txt="Blue Origin Article"
      link1url="https://www.blueorigin.com/news/first-human-flight-updates"
      link2txt="Space.com Article"
      link2url="https://www.space.com/jeff-bezos-blue-origin-first-astronaut-launch"
      link3txt="CNBC Article"
      link3url="https://www.cnbc.com/2021/07/20/jeff-bezos-reaches-space-on-blue-origins-first-crewed-launch.html"
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
import NextLaunch from "@/components/blue-origin/Blue-Origin-NextLaunch.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "BlueOrigin",
  components: {
    Info,
    OrgNews,
    NextLaunch,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | Blue Origin",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          " A launch vehicle company based in Kent, Washington, United States - Blue Origin was founded in 2000 by Jeff Bezos. Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },
      {
        name: "keywords",
        content:
          "Blue Origin, New Shepard, Kent, Washington, Jeff Bezos, New Glenn, Amazon, United States, Space Exploration, Rocket Downrange, Next Launch, Launch Schedule",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Blue Origin" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/blue-origin",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          " A launch vehicle company based in Kent, Washington, United States - Blue Origin was founded in 2000 by Jeff Bezos. Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/blue-origin",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Blue Origin",
      },
      {
        name: "twitter:description",
        content:
          " A launch vehicle company based in Kent, Washington, United States - Blue Origin was founded in 2000 by Jeff Bezos. Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Blue Origin" },
      {
        itemprop: "description",
        content:
          " A launch vehicle company based in Kent, Washington, United States - Blue Origin was founded in 2000 by Jeff Bezos. Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

