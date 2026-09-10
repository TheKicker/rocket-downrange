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

    <NextLaunch company="Sierra Space Corp" />
    
    <Quote
      message="We are building the future space transportation system and amazing new destination habitats. We will enable humanity to live, work, explore, and vacation in Space! "
      author="Tom Vice"
      significance="CEO of Sierra Space"
    />

    <!-- Orbital Reef partnership -->
    <OrgNews
      company="Sierra Space Special Event"
      year="2021"
      title="Orbital Reef - Sierra Space Partners with Blue Origin on Commercial Space Station"
      srcType="video"
      source="https://www.youtube.com/watch?v=SC3ooNXfcGE"
      description1="On December 2, 2021, Blue Origin and Sierra Space announced Orbital Reef — a commercial space station planned for low Earth orbit, developed in partnership with Boeing, Redwire Space, Genesis Engineering, and Arizona State University. Sierra Space is responsible for developing the LIFE (Large Integrated Flexible Environment) inflatable habitat modules that will form the backbone of the station's living and working space."
      description2="NASA selected Orbital Reef for a $160 million award under its Commercial Low Earth Orbit Destinations (CLD) program, recognizing it as a key candidate to succeed the International Space Station. Orbital Reef is designed to serve government agencies, private researchers, and eventually space tourists — a mixed-use business park in space — with Sierra Space's Dream Chaser providing crew and cargo transport."
      update="Dec 2, 2021"
      link1txt="Announcement Video"
      link1url="https://www.youtube.com/watch?v=SC3ooNXfcGE"
      link2txt="Orbital Reef Website"
      link2url="https://www.orbitalreef.com/"
      link3txt="NASA CLD Award"
      link3url="https://www.nasa.gov/news-release/nasa-selects-blue-origin-team-for-commercial-lunar-payload/"
    />

    <!-- LIFE habitat burst test -->
    <OrgNews
      company="Sierra Space Special Event"
      year="2023"
      title="LIFE Habitat Burst Test - Sierra Space Exceeds NASA Requirements"
      srcType="video"
      source="https://www.youtube.com/watch?v=_7NiBD3KqkQ"
      description1="In November 2023, Sierra Space successfully completed an ultimate burst pressure test of its LIFE (Large Integrated Flexible Environment) habitat module at NASA's Marshall Space Flight Center, exceeding NASA's safety factor requirements. The inflatable module withstood pressure levels well beyond its operating design limit before the test was concluded."
      description2="The LIFE module represents a new approach to space habitation: an inflatable structure that launches compactly and expands to provide significantly more usable volume than a rigid module. With three floors and roughly 300 cubic meters of pressurized space, a full-scale LIFE module is designed to serve as a primary living and research space aboard Orbital Reef and future deep space missions."
      update="Nov 2023"
      link1txt="Burst Test Video"
      link1url="https://www.youtube.com/watch?v=_7NiBD3KqkQ"
      link2txt="Sierra Space Article"
      link2url="https://www.sierraspace.com/newsroom/press-releases/sierra-space-completes-full-scale-life-habitat-ultimate-burst-pressure-test/"
      link3txt="Space.com Article"
      link3url="https://www.space.com/sierra-space-explosion-inflatable-life-habitat-space-station"
    />

    <OrgNews
      company="Sierra Space Special Event"
      year="2026"
      title="Dream Chaser has successfully completed acoustic testing"
      srcType="image"
      :source="sierraSpaceImage"
      description1="The spacecraft successfully withstood the intense vibrations produced from sound waves during a rocket launch as it prepares for its first flight to Low Earth Orbit (LEO)."
      description2="Acoustic testing at NASA’s SSPF utilized an array of 90 stacked speakers to simulate sound and airborne vibrations experienced during a rocket launch. The successful test validated the durability of Dream Chaser’s critical electronic systems and confirmed the structural integrity of the spacecraft."
      update="Apr 14, 2026"
      link1txt="Sierra Space Website"
      link1url="https://www.sierraspace.com/"
      link2txt="@SierraSpaceCo on X"
      link2url="https://x.com/SierraSpaceCo/status/2044139075406532799?s=20"
    />

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
import NextLaunch from "@/components/NextLaunch.vue";
import OrgNews from "@/components/Org-News.vue";
import Quote from "@/components/Quotes-Template.vue";

// Assets
import sierraSpaceImage from '@/assets/company/sierra-space-1.jpg'

export default {
  name: "Sierra",
  components: {
    Info,
    NextLaunch,
    OrgNews,
    Quote,
  },
  data() {
    return {
      sierraSpaceImage
    }
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

