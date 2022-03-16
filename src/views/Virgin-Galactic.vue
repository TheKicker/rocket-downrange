<template>
  <div class="VirginGalactic container my-4">
    <Info
      header="Virgin Galactic/Orbit"
      description="Virgin Galactic is a British spaceflight company within the Virgin Group - a multinational venture capital conglomerate founded by Sir Richard Branson and Nik Powell. Galactic is developing launch vehicles capable of suborbital spaceflights aimed at the tourism industry with a sister company referred to as Virgin Orbit focusing on the commercial. Virgin Galactic/Orbit employ nearly 1000 individuals - Galactic is headquartered in Las Cruces, New Mexico, and Orbit is headquartered in Long Beach, California."
      website="https://www.virgingalactic.com/"
      twitter="https://twitter.com/virgingalactic"
      instagram="https://www.instagram.com/virgingalactic/"
      youtube="https://www.youtube.com/channel/UClcvOr7LV8tlJwJvkNMmnKg"
      stock="https://www.nasdaq.com/market-activity/stocks/spce"
    />
    <NextLaunch />
    <Quote
      message="There are millions of people out there who would love to become astronauts, who'd love to go to space - they'd love to look back at this wonderful world from space. That will be the engine that will enable us then to develop spaceships to transport people around the world at tremendous speeds in an environmentally friendly way."
      author="Sir Richard Branson"
      significance="Co-Founder of Virgin Group (Virgin Galactic & Orbit)"
    />

    <Stock
      START="October 28th, 2019" 
      ORG="Virgin Galactic" 
      TICKER="SPCE" 
      LINK="https://www.nasdaq.com/market-activity/stocks/spce" 
      FINN="https://widget.finnhub.io/widgets/stocks/chart?symbol=spce&amp;watermarkColor=%231db954&amp;backgroundColor=%23222222&amp;textColor=white" 
    />

    <OrgNews 
      company="Virgin Galactic"
      year="2021"
      title="Richard Branson goes to space on VSS Unity"
      srcType="video"
      source="https://www.youtube.com/embed/G9MfbCjICH0"
      description="Early in the morning of July 11th, Sir Richard Branson and five other crew mates briefly touched space for the first crewed flight of Virgin Galactic's SpaceShipTwo spaceplane.  At 8:40am local time, the crew of Virgin Galactic's VSS Unity took off from Spaceport America's facility in New Mexico. The crew contained two pilots and four crew members who experienced roughly four and a half minutes of weightlessness.  "
      update="July 13, 2021"
      link1url="https://www.youtube.com/watch?v=GKG2IicSlSY"
      link1txt="Stream Replay"
      link2url="https://www.space.com/virgin-galactic-unity-22-branson-flight-success"
      link2txt="Space.com Article"
      link3url="https://www.cnbc.com/2021/07/11/richard-branson-reaches-space-on-virgin-galactic-flight.html"
      link3txt="CNBC Article"
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
import NextLaunch from "@/components/virgin/Virgin-NextLaunch.vue";
import Quote from "@/components/Quotes-Template.vue";
import OrgNews from "@/components/Org-News.vue";
import Stock from "@/components/Stock-Price.vue";

export default {
  name: "VirginGalactic",
  components: {
    Info,
    NextLaunch,
    Quote,
    OrgNews,
    Stock
  },
  metaInfo: {
    title: "Rocket Downrange | Virgin Galactic",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Virgin Galactic & Orbit (Virgin Group) is a private aerospace firm based in the United States, their primary launch vehicles include the WhiteKnightTwo, SpaceShipTwo and others in development.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        name: "keywords",
        content:
          "NASA, Space, Virgin, Galactic, Orbit, Richard Branson, SpaceShipTwo, WhiteKnightTwo, Rocket Downrange, Launch Schedule, Data",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Virgin Galactic" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/virgin-galactic",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Virgin Galactic & Orbit (Virgin Group) is a private aerospace firm based in the United States, their primary launch vehicles include the WhiteKnightTwo, SpaceShipTwo and others in development.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/virgin-galactic",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Virgin Galactic",
      },
      {
        name: "twitter:description",
        content:
          "Virgin Galactic & Orbit (Virgin Group) is a private aerospace firm based in the United States, their primary launch vehicles include the WhiteKnightTwo, SpaceShipTwo and others in development.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Virgin Galactic" },
      {
        itemprop: "description",
        content:
          "Virgin Galactic & Orbit (Virgin Group) is a private aerospace firm based in the United States, their primary launch vehicles include the WhiteKnightTwo, SpaceShipTwo and others in development.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

