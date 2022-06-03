<template>
  <div class="locations container">
      <Info
        header="Launch & Landing Locations"
        description= "Our pale blue dot is home to several spaceport launch and landing pads.  This page is dedicated to showcasing some of the finest rocket launch sites from around the world, keep your eyes to the sky for a rocket downrange! "
      />
      <LaunchLocations 
        x="45.965" 
        y="63.305" 
        z="11" 
        content="Baikonur Cosmodrome"
        operator="Roscosmos"
        region="Kazakh Steppe, Kazakhstan"
        launch_pads="71 (most inactive or destroyed)"
        first_launch="4th of October, 1957"
      />
      <LaunchLocations 
        x="31.423333" 
        y="-104.758889" 
        z="12.5" 
        content="Corn Ranch"
        operator="Blue Origin"
        region="Van Horn, Texas [USA]"
        launch_pads="1 active"
        first_launch="13th of November, 2006"
      />
      <LaunchLocations 
        x="28.524167" 
        y="-80.650833" 
        z="11" 
        content="Kennedy Space Center"
        operator="NASA & US Space Force"
        region="Cape Canaveral, Florida [USA]"
        launch_pads="2 active, 1 leased, 1 inactive"
        first_launch="9th of November, 1967"
      />
      <LaunchLocations 
        x="-39.2615" 
        y="177.864876" 
        z="12.5" 
        content="Launch Complex 1"
        operator="Rocket Lab"
        region="Ahuriri Point [NZ]"
        launch_pads="2 active"
        first_launch="25th of May, 2017"
      />
      <LaunchLocations 
        x="57.435833" 
        y="-152.337778" 
        z="12.5" 
        content="Pacific Spaceport Complex"
        operator="Astra"
        region="Kodiak Island, Alaska [USA]"
        launch_pads="2 active"
        first_launch="6th of November, 1998"
      />
      <LaunchLocations 
        x="25.985752215917778" 
        y="-97.18223317068392" 
        z="12.5" 
        content="Starbase"
        operator="SpaceX"
        region="Boca Chica, Texas [USA]"
        launch_pads="3 active"
        first_launch="25th of July, 2019"
      />
      <LaunchLocations 
        x="34.732778" 
        y="-120.568056" 
        z="12.5" 
        content="Vandenberg Space Force Base"
        operator="NASA / US Space Force"
        region="Santa Barbara County, California [USA]"
        launch_pads="7 active, 4 inactive"
        first_launch="16th of December, 1958"
      />
    <about />
  </div>
</template>


<script>
// @ is an alias to /src
import about from "@/components/About-template.vue";
import Error404 from "@/components/Error.vue";
import LaunchLocations from "@/components/LaunchLocations.vue";
import Info from "@/components/Info-Template.vue";

export default {
  name: "Locations",
  components: {
    about,
    Error404,
    LaunchLocations,
    Info
  },
  metaInfo: {
    title: "Rocket Downrange | Locations",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Our pale blue dot is home to several spaceport launch and landing pads.  This page is dedicated to showcasing some of the finest rocket launch sites from around the world, keep your eyes to the sky for a rocket downrange!",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, Baikonur Cosmodrome, Kennedy Space Center, Corn Ranch, Launch Complex 1, Starbase, United States of America, Space Force, USA, launch pads, landing pads, rocket launch, locations",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Locations" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/locations",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Our pale blue dot is home to several spaceport launch and landing pads.  This page is dedicated to showcasing some of the finest rocket launch sites from around the world, keep your eyes to the sky for a rocket downrange! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/locations",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Locations",
      },
      {
        name: "twitter:description",
        content:
          "Our pale blue dot is home to several spaceport launch and landing pads.  This page is dedicated to showcasing some of the finest rocket launch sites from around the world, keep your eyes to the sky for a rocket downrange! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Locations" },
      {
        itemprop: "description",
        content:
          "Our pale blue dot is home to several spaceport launch and landing pads.  This page is dedicated to showcasing some of the finest rocket launch sites from around the world, keep your eyes to the sky for a rocket downrange! ",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
