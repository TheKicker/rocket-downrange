<template>
  <div class="relativity container my-4">
    <Info
      header="Relativity Space"
      description="A launch vehicle company based in Los Angeles, California, United States.  Relativity Space was founded in 2015 by CEO Tim Ellis and CTO Jordan Noone, and employs above 700 individuals. Their mission is to 3D print their primary launch vehicles (the Terran 1 and Terran R) for commercial orbital launch services."
      website="https://www.relativityspace.com/"
      twitter="https://twitter.com/relativityspace"
      instagram="https://www.instagram.com/relativityspace/"
      youtube="https://www.youtube.com/relativityspace"
    />

    <NextLaunch />

    <Quote
      message="I strongly believe that the team we’ve built has never been set up for better success than at this point in time, and we are nearly there with delivering on our foundational goal of building an entirely 3D printed rocket."
      author="Jordan Noone"
      significance="Co-Founder of Relativity Space"
    />

    <OrgNews 
      company="Relativity Space Special Event"
      year="2023"
      title="GOOD LUCK, HAVE FUN (MAIDEN FLIGHT)"
      srcType="image"
      source="https://pbs.twimg.com/media/Fj3lIrVWYAE4Zhs?format=jpg&name=4096x4096"
      description1="Documenting new history in the making at Launch Complex 16! With nearly every department across the company represented, teams at the Cape yesterday gathered to commemorate a momentous week as we step into final phases of testing for Terran 1’s #GLHF flight.  Currently targeting a launch date of January 30th at 7:00 pm, Relativity Space is excited to announce the maiden flight of it's Terran 1 Rocket. The event will take place at Launch Complex 16 in Cape Canaveral, Florida, USA."
      update="Jan 20, 2023"
      link1txt="Relativity Youtube"
      link1url="https://www.youtube.com/relativityspace"
      link2txt="Relativity Twitter"
      link2url="https://twitter.com/relativityspace/status/1602691738208010242?s=20&t=tsQSXww0AQRJyDB_xVctWQ"
    />

    <OrgNews 
      company="Relativity Space Special Event"
      year="2022"
      title="Significant expansion at Stennis Space Center"
      srcType="image"
      source="https://mms.businesswire.com/media/20221018005590/en/1605260/4/SK-2B-Final_Labeled.jpg?download=1"
      description1="The first company to 3D print rockets, and the first to build the largest metal 3D printer in the world just hit another milestone with the help of NASA.  Plans have been released to significantly expand one of the largest rocket engine test facilities in the United States through an agreement with NASA to support testing of its entirely 3D printed AEON R engines. Relativity will utilize over 150 additional acres within the Stennis Test Complex with testing infrastructure for its AEON R engines."
      update="Oct 18, 2022"
      link1txt="BusinessWire"
      link1url="https://www.businesswire.com/news/home/20221018005590/en/New-Agreement-with-NASA-Puts-Relativity-Space-on-Path-to-Operate-One-of-America%E2%80%99s-Largest-Rocket-Engine-Test-Facilities"
      link2txt="Google Earth"
      link2url="https://earth.google.com/web/search/Stennis+Space+Center/@30.3650465,-89.60912545,8.32654705a,10029.01986089d,35y,0h,45t,0r/data=Cn4aVBJOCiQweDg4OWRjNGMzYjQyMDY3YmY6MHg0NDNkNTY4OTg2NWIxNGUZYS-59qpcPkAhJH8w8FxmVsAqFFN0ZW5uaXMgU3BhY2UgQ2VudGVyGAIgASImCiQJydWBHC7DNUARydWBHC7DNcAZgiVLtY3hSUAhln2EaVYYSsAoAg"
    />

    <br />
    <hr />
    <div class="text-center">
      <a href="https://thespacedevs.com" target="_blank" rel="noopener">API Data brought to you by The Space Devs</a>
    </div> 
  </div>
</template>


<script>
// @ is an alias to /src
import Info from "@/components/Info-Template.vue";
import OrgNews from "@/components/Org-News.vue";
import NextLaunch from "@/components/relativity/Relativity-NextLaunch.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "Relativity",
  components: {
    Info,
    OrgNews,
    NextLaunch,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | Relativity Space",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Relativity Space was founded in 2015 by CEO Tim Ellis and CTO Jordan Noone, and employs above 700 individuals their primary launch vehicles are the Terran 1 and Terran R.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!  ",
      },
      {
        name: "keywords",
        content:
          "Relativity, Space, Terran 1, Terran R, AEON, Stargate, 3D printed, United States, Space Exploration, Rocket Downrange, Next Launch, Launch Schedule",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Relativity Space" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/relativity-space",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Relativity Space was founded in 2015 by CEO Tim Ellis and CTO Jordan Noone, and employs above 700 individuals their primary launch vehicles are the Terran 1 and Terran R.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/relativity-space",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Relativity Space",
      },
      {
        name: "twitter:description",
        content:
          "Relativity Space was founded in 2015 by CEO Tim Ellis and CTO Jordan Noone, and employs above 700 individuals their primary launch vehicles are the Terran 1 and Terran R.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Relativity Space" },
      {
        itemprop: "description",
        content:
          "Relativity Space was founded in 2015 by CEO Tim Ellis and CTO Jordan Noone, and employs above 700 individuals their primary launch vehicles are the Terran 1 and Terran R.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra!   ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

