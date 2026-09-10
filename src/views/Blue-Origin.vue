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

    <NextLaunch company="Blue Origin" />

    <Quote
      message="Our motto at Blue Origin is 'Gradatim Ferociter' or 'Step by Step, Ferociously.'"
      author="Jeff Bezos"
      significance="Founder of Blue Origin and Amazon"
    />

    <!-- New Glenn maiden flight -->
    <OrgNews
      company="Blue Origin Special Event"
      year="2025"
      title="New Glenn NG-1 - Maiden Flight of Blue Origin's Orbital Rocket"
      srcType="video"
      source="https://www.youtube.com/watch?v=GmzzvtOoyDs"
      description1="On January 16, 2025, Blue Origin launched New Glenn for the first time from Launch Complex 36 at Cape Canaveral Space Force Station. The 320-foot two-stage rocket successfully delivered its BE-4-powered first stage through max-q and achieved orbit, marking Blue Origin's long-awaited entry into the orbital launch market."
      description2="The BE-4 first stage attempted a landing on the drone ship Jacklyn but did not survive. Blue Origin and mission teams celebrated the orbital insertion as a major success after years of development. New Glenn is designed to compete with SpaceX's Falcon 9 and carry payloads including national security satellites and commercial missions."
      update="Jan 16, 2025"
      link1txt="Livestream Replay"
      link1url="https://www.youtube.com/watch?v=GmzzvtOoyDs"
      link2txt="Blue Origin Article"
      link2url="https://www.blueorigin.com/news/new-glenn-reaches-orbit-on-inaugural-flight"
      link3txt="Space.com Article"
      link3url="https://www.space.com/space-exploration/launches-spacecraft/jeff-bezos-blue-origin-launches-massive-new-glenn-rocket-into-orbit-on-1st-flight-video"
    />

    <!-- NS-23 In-flight abort -->
    <OrgNews
      company="Blue Origin Special Event"
      year="2022"
      title="NS-23 - New Shepard In-Flight Abort System Activates"
      srcType="video"
      source="https://www.youtube.com/watch?v=SqAVWvOT-1c"
      description1="On September 12, 2022, during the cargo-only NS-23 mission, New Shepard's crew capsule abort system activated at approximately 1 minute 4 seconds into flight — the first in-flight abort in the program's history. The capsule safely separated from the booster and parachuted to a safe landing in the Texas desert."
      description2="The booster was destroyed in the anomaly. Because no crew was aboard, no personnel were harmed. The event demonstrated that the escape system designed to protect future astronauts functions as intended under real conditions. New Shepard returned to flight in May 2023 after an FAA investigation was completed."
      update="Sep 12, 2022"
      link1txt="Abort Sequence Video"
      link1url="https://www.youtube.com/watch?v=SqAVWvOT-1c"
      link3txt="Space.com Article"
      link3url="https://www.space.com/blue-origin-ns-23-mission-launch-preview"
    />

    <!-- Blue Origin second commercial launch -->
    <OrgNews
      company="Blue Origin Special Event"
      year="2021"
      title="Four More Commercial Astronauts Return from Space"
      srcType="image"
      source="https://www.blueorigin.com/_next/image?url=https%3A%2F%2Fd1o72l87sylvqg.cloudfront.net%2Fblue-origin%2Fblue-origin-ns18-training-crew-portrait-october-10-2021.jpg&w=1920&q=75"
      description1="Blue Origin successfully completed New Shepard’s second human flight today with four private citizens onboard. The crew included Dr. Chris Boshuizen, Glen de Vries, Audrey Powers, and William Shatner, as well as thousands of postcards from Blue Origin’s foundation, Club for the Future.  All officially became astronauts when they passed the Karman Line, the internationally recognized boundary of space. "
      update="Oct 13, 2021"
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
      update="Jul 20, 2021"
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
import NextLaunch from "@/components/NextLaunch.vue";
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

