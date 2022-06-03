<template>
  <div class="SpaceX container my-4">
    <Info
      header="SpaceX"
      description="SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets. Based in Hawthorne, California, the company employs over 7000 who design, operate and relaunch 3 seperate vehicles."
      website="https://www.spacex.com/"
      twitter="https://twitter.com/SpaceX"
      instagram="https://www.instagram.com/spacex/"
      youtube="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA"
    />

    <LaunchLocations x="25.985752215917778" y="-97.18223317068392" z="12.5" content="Boca Chica Starbase" hidden/>
    
    <NextLaunch />

    <LatestLaunch hidden/>
    <Quote
      message="Life cannot be just about solving one problem after another. There need to be things that inspire you, that make you glad to wake up and be a part of humanity."
      author="Elon Musk"
      significance="CEO of SpaceX"
    />

    <!-- New Starship Animation --> 
      <OrgNews 
        company="SpaceX Special Event"
        year="2022"
        title="New Starship animation released"
        srcType="video"
        source="https://www.youtube.com/embed/-Oox2w5sMcA"
        description1="Just a few days before Valentine's Day, and SpaceX is doing everything they can to steal our hearts! A new animation video has been released that illustrates the company's dedication to catch the Super Heavy booster with a massive tower and it's 'chopstick' arms. "
        update="Feb 14, 2021"
        link1txt="SpaceX Starship"
        link1url="https://www.spacex.com/vehicles/starship/"
        link2txt="Space.com Article"
        link2url="https://www.space.com/spacex-starship-launch-tron-blade-runner"
        link3txt="Futurism article"
        link3url="https://futurism.com/the-byte/gorgeous-new-animation-shows-starship-going-orbital"
      />

    <!-- Inspiration4 section --> 
    <OrgNews 
      company="SpaceX Special Event"
      year="2021"
      title="Inspiration4"
      srcType="video"
      source="https://www.youtube-nocookie.com/embed/3pv01sSq44w"
      description1="On Wednesday, September 15 at 8:02 p.m. EDT, 00:02 UTC on September 16, SpaceX’s Falcon 9 successfully launched the Inspiration4 mission – the world’s first all-civilian human spaceflight to orbit – from historic Launch Complex 39A at NASA’s Kennedy Space Center in Florida. "
      description2="After three days orbiting Earth, Dragon and the Inspiration4 crew safely splashed down off the coast of Florida at 7:06 p.m. EDT on Saturday, September 18, 2021, completing their first multi-day low Earth orbit mission. "
      update="Sep 20, 2021"
      link1txt="Livestream Replay"
      link1url="https://www.youtube.com/watch?v=3pv01sSq44w"
      link2txt="Space.com Article"
      link2url="https://www.space.com/spacex-launches-inspiration4-civilian-orbital-mission"
    />

    <!-- SN8 Starship first test section --> 
    <OrgNews 
      company="SpaceX Special Event"
      year="2020"
      title="SN8 - First Starship Launch"
      srcType="video"
      source="https://www.youtube-nocookie.com/embed/ap-BkkrRg-o"
      description1="On December 9th, 2020, the SpaceX team made the first attempt of a high-altitude suborbital flight test of Starship serial number 8 (SN8) from the launch site in Cameron County, Texas. This suborbital flight was designed to test a number of objectives, from how the vehicle’s three Raptor engines perform to the overall aerodynamic entry capabilities of the vehicle (including its body flaps) to how the vehicle manages propellant transition. SN8 also attempted a landing flip maneuver, which is a first for a vehicle of this size - unfortunately, the vehicle appears to have lost an engine and experienced rapid-unplanned-disassembly on touch down."
      description2="Skip to 1:47:06 in the above video if you would only like to see the launch. It is important to note, with a test such as this, success is not measured by completion of specific objectives but rather how much SpaceX can learn. Flight data (even crash data) will inform and improve the probability of success in the future as SpaceX rapidly advances development of Starship. From Rocket Downrage, congratulations SpaceX Team! Truly history in the making! "
      update="Dec 10, 2020"
      link1txt="Livestream Replay"
      link1url="https://www.youtube.com/watch?v=ap-BkkrRg-o"
      link2txt="Starship Overview"
      link2url="https://www.spacex.com/vehicles/starship/"
    />

    <!-- Crew Dragon first use --> 
    <OrgNews 
      company="SpaceX Special Event"
      year="2020"
      title="NASA & SPACEX - CREW DRAGON DEMO-2 MISSION"
      srcType="image"
      source="https://rocketdownrange.com/organizations/crew-demo-2.png"
      description1='A mission that was a longtime in the making, Crew Demo-2 was a manned test flight of the Crew Dragon spacecraft developed by SpaceX. The launch occured on May 30th of 2020, the astronauts spent 2 months in low earth orbit at the International Space Station and then returned to Earth on August 2nd of 2020. This event marks the first time since the final Space Shuttle mission (STS-135) in 2011 that American astronauts were launched on American rockets from American soil. The mission was manned by Commander Douglas Hurley and Joint-Operations Commander Robert Behnken and lasted 63 days - 9 hours and 8 minutes.'
      update="Aug 3, 2020"
      link1txt="Part 1 - Launch to ISS"
      link1url="https://www.youtube.com/watch?v=xY96v0OIcK4"
      link2txt="Part 2 - Return Home"
      link2url="https://www.youtube.com/watch?v=sl2jo1bSxl8"
    />

    <Starman msg="Where is Starman? " />
    <br />
    <hr />
    <div class="text-center">
      <a
        href="https://github.com/r-spacex/SpaceX-API"
        target="_blank"
        rel="noopener"
        >Link to SpaceX API Repository</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Info from "@/components/Info-Template.vue";
import OrgNews from "@/components/Org-News.vue";
import LaunchLocations from "@/components/LaunchLocations.vue";
import NextLaunch from "@/components/spacex/SpaceX-NextLaunch.vue";
import LatestLaunch from "@/components/spacex/SpaceX-LatestLaunch.vue";
import Starman from "@/components/spacex/SpaceX-Starman.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "SpaceX",
  components: {
    Info,
    OrgNews,
    LaunchLocations,
    NextLaunch,
    LatestLaunch,
    Starman,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | SpaceX",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        name: "keywords",
        content:
          "NASA, SpaceX, Elon Musk, Next Launch, Falcon 9, Falcon Heavy, Dragon, Rocket Downrange, Latest Launch, Launch Info, Space Industry",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | SpaceX" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/spacex",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/spacex",
      },
      { name: "twitter:title", content: "Rocket Downrange | SpaceX" },
      {
        name: "twitter:description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | SpaceX" },
      {
        itemprop: "description",
        content:
          "Space Exploration Technologies Corp (SpaceX) is a private aerospace firm based in the United States, their primary launch vehicles include the Falcon 9, Falcon Heavy and Dragon variants.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
