<template>
  <div class="ULA container my-4">
    <Info
      header="United Launch Alliance"
      description="United Launch Alliance is an American spacecraft launch service provider that manufactures and operates a number of vehicles that are capable of sending vehicles to LEO and beyond. Formed in 2006, ULA is a joint venture between Lockheed Martin Space and Boeing Defense, Space and Security. Headquartered in Centennial, Colorado, United States."
      website="https://www.ulalaunch.com/"
      twitter="https://twitter.com/ULAlaunch"
      instagram="https://www.instagram.com/ulalaunch/"
      youtube="https://www.youtube.com/user/UnitedLaunchAlliance"
    />
    <ULAInfo />
    <NextLaunch />
    <Quote
      message="Every rocket launch is a leap towards humankind’s destiny and an act of defiance against the tyranny of gravity."
      author="Tory Bruno"
      significance="CSO of United Launch Alliance"
    />
    <NASAperseverance />

    <!-- Parker Solar Probe --> 
    <OrgNews 
      company="ULA Special Event"
      year="2018"
      title="THE PARKER SOLAR PROBE - DELTA IV HEAVY"
      srcType="image"
      source="https://i.dailymail.co.uk/1s/2019/04/04/15/11860212-0-image-a-7_1554387593099.jpg"
      description1="NASA’s Parker Solar Probe will be the first-ever mission to 'touch' the Sun. The spacecraft, about the size of a small car, will travel directly into the Sun's atmosphere about 4 million miles from the surface. Parker Solar Probe launched aboard a Delta IV-Heavy rocket from Cape Canaveral, Aug. 12, 2018 at 3:31 a.m. Eastern time."
      description2='“The unique requirements of this mission made the Delta IV Heavy the perfect launch vehicle to deliver Parker Solar Probe into orbit with the highest precision,” said Gary Wentz, ULA vice president of Government and Commercial Programs. “Congratulations to our team and mission partners, we are proud to launch this exceptional spacecraft that will provide invaluable scientific information benefiting all of humankind.”'
      update="Nov 30, 2020"
      link1txt="ULA Mission Overview"
      link1url="https://www.ulalaunch.com/missions/missions-details/2018/08/12/united-launch-alliance-successfully-launches-nasa-s-parker-solar-probe-spacecraft"
      link2txt="PNASA Launch Stream"
      link2url="https://www.youtube.com/watch?v=AlyuSwRSVHU"
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
import NextLaunch from "@/components/ula/ULA-NextLaunch.vue";
import OrgNews from "@/components/Org-News.vue";
import NASAperseverance from "@/components/NASA-perseverance.vue";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "United Launch Alliance",
  components: {
    Info,
    NextLaunch,
    OrgNews,
    NASAperseverance,
    Quote,
  },
  metaInfo: {
    title: "Rocket Downrange | United Launch Alliance",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "United Launch Alliance (ULA) is a private aerospace firm based in the United States, their primary launch vehicles include the Atlas V, Vulcan Centaur and Delta IV.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        name: "keywords",
        content:
          "NASA, Space, United Launch Alliance, ULA, Boeing Aerospace, Lockheed Martin, Atlas V, Vulcan Centaur, Delta IV, Launch Schedule, Flight Data",
      },
      // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: "Rocket Downrange | United Launch Alliance",
      },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/united-launch-alliance",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "United Launch Alliance (ULA) is a private aerospace firm based in the United States, their primary launch vehicles include the Atlas V, Vulcan Centaur and Delta IV.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/united-launch-alliance",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | United Launch Alliance",
      },
      {
        name: "twitter:description",
        content:
          "United Launch Alliance (ULA) is a private aerospace firm based in the United States, their primary launch vehicles include the Atlas V, Vulcan Centaur and Delta IV.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      {
        itemprop: "name",
        content: "Rocket Downrange | United Launch Alliance",
      },
      {
        itemprop: "description",
        content:
          "United Launch Alliance (ULA) is a private aerospace firm based in the United States, their primary launch vehicles include the Atlas V, Vulcan Centaur and Delta IV.  Rocket Downrange features upcoming launch data, basic company information and more. Site built using Vue.JS and various public API's, ad astra! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>

