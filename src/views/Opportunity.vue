<template>
<div>
  <div class="cover container">
      <!-- Cover image size set by scoped CSS -->
  </div>
  <div class="mx-auto container">
    <div class="profile-head">
      <div class="bio">
        <img src="@/assets/rover/OPPY.png" class="profile-image" alt="Rocket Downrange Rover profile image for the MER-B 'Opportunity' Mars Rover">
        <div class="name">
          <h1 class="roverName">Opportunity</h1>
          <p class="roverLocation"><i class="fas fa-map-marker-alt mr-2"></i> Meridiani Planum, Mars</p>
        </div>
      </div>
      <div class="stats">
        <div class="stats-item">
          <p class="stats-status">COMPLETE</p>
          <p class="small">Status</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">5,352 (5,498)</p>
          <p class="small">SOLs (DAYs)</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">28.06 (45.16)</p>
          <p class="small">MILES (KM)</p>
        </div>
      </div>
    </div>
    <div class="profile-body">
      <div class="body-3d">
        <iframe src="https://mars.nasa.gov/gltf_embed/24883" width="100%" height="100%" frameborder="0" />
      </div>
      <div class="body-bio">
        <h2>ABOUT THE ROVER</h2>
        <hr>
        <div class="foobar">
          <p class="foo">Biography:</p>
          <p class="bar">Nicknamed "Oppy", the MER-B or MER-1 rover Opportunity was a robotic rover <router-link to="/Spirit">(and sibling to Spirit)</router-link> that was active on Mars from January 2004 to June 2018 when we lost contact with it.  The general consensus is that there was too much build up on its solar panels, causing a lack of power to the rover, mission was declared complete on February 13th of 2019.</p>
        </div>
        <div class="foobar">
          <p class="foo">Launch Date:</p>
          <p class="bar">July 8th, 2003</p>
        </div>
        <div class="foobar">
          <p class="foo">Landing Date:</p>
          <p class="bar">January 25th, 2004</p>
        </div>
        <div class="foobar">
          <p class="foo">Rover Cost:</p>
          <p class="bar">$400 million</p>
        </div>
        
      </div>
    </div>

    <Quote
      message="We've cleared two of the big hurdles, building both spacecraft [Spirit & Opportunity] and launching them... now we're coming up on a third, getting them safely onto the ground."
      author="Peter Theisinger"
      significance="Former Project Manager at JPL for the Mars Exploration Rover Project"
    />

    <div class="mt-4">
      <h2>Rover Photo Feed</h2>
      <p>Photos taken on Earth date {{results.photos[0].earth_date}}, come back tomorrow for a new set!</p>
    </div>
    <div class="profile-feed">
      <a v-for="(result, index) in results.photos" :key="index" :href="result.img_src" target="_blank" rel="noopener">
        <VLazyImage :src="result.img_src" :alt="'Photo id#' + result.id + ' taken by Opportunity Rover in the Meridiani Planum on Mars'" class="img" />
      </a>
    </div>
    <div class="py-3">
      <hr>
      <p class="text-center">
        For more information on this rover, or other missions, <a href="https://nasa.gov" target="_blank" rel="noopener">visit NASA's official website</a>
      </p>
    </div>
  </div>
</div>
</template>


<script>
// Oppy was operational for around 5100 sol days on Mars
// Picture of the day is taken from a cache of these images
const random_number = Math.floor(Math.random() * 5100);
var api_key = process.env.VUE_APP_APOD_KEY
window.axios = require("axios");

import Quote from "@/components/Quotes-Template.vue";
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "Opportunity",
  components:{
    Quote,
    VLazyImage
  },
  data() {
    return {
      results: {}
    };
  },
  mounted(){
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=" + random_number + "&api_key=" + api_key;
    console.log(url)
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  },
  metaInfo: {
    title: "Rocket Downrange | Opportunity Rover",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Nicknamed 'Oppy', the MER-B or MER-1 rover Opportunity was a robotic rover (and sibling to Spirit) that was active on Mars from January 2004 to June 2018 when we lost contact with it.  RIP Oppy!",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, NASA, JPL, Mars, Rovers, Opportunity",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Opportunity Rover" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/opportunity",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Nicknamed 'Oppy', the MER-B or MER-1 rover Opportunity was a robotic rover (and sibling to Spirit) that was active on Mars from January 2004 to June 2018 when we lost contact with it.  RIP Oppy!",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/opportunity",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Opportunity Rover",
      },
      {
        name: "twitter:description",
        content:
          "Nicknamed 'Oppy', the MER-B or MER-1 rover Opportunity was a robotic rover (and sibling to Spirit) that was active on Mars from January 2004 to June 2018 when we lost contact with it.  RIP Oppy!",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Opportunity Rover" },
      {
        itemprop: "description",
        content:
          "Nicknamed 'Oppy', the MER-B or MER-1 rover Opportunity was a robotic rover (and sibling to Spirit) that was active on Mars from January 2004 to June 2018 when we lost contact with it.  RIP Oppy!",
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
    ],
  },
};
</script>
<style scoped>
.cover {
    background-image: url("https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
}
.profile-head{
  display: flex;
  justify-content: space-between;
}
.profile-image{
  transform: translateY(-2.5rem);
  border: 5px white solid;
  border-radius: 45%;
}
.bio{
  display: flex;
  flex-direction: row;
}
.name{
  margin: auto 1rem;
}
.stats{
  display: flex;
  flex-direction: row;
}
.stats-item{
  text-align: center;
  margin: auto 1rem;
}
.stats-status{
  font-size: 18px;
  font-weight: bold;
}
.profile-body{
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
}
.body-bio{
  width: 55%;
  padding: 1rem;
}
.body-3d{
  height: 450px;
  width: 45%;
}
.foobar{
  margin: 2rem 0;
}
.foo{
  font-weight: 800;
  line-height: 0;
}
.bar{
  margin: 0 0 0 0.5rem;
  line-height: 16px;
}
.profile-feed{
  margin: 2rem auto;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.img{
  margin: auto;
  height: 250px;
  width: 250px;
  object-fit: cover;
}

@media only screen and (max-width: 900px){
  .cover {
    height: 200px;
  }
  .roverName{
    font-size: 18px;
  }
  .roverLocation{
    font-size: 12px;
  }
  .profile-head{
    flex-direction: column;
  }
  .profile-image{
    width: 120px;
  }
  .stats{
    justify-content: space-evenly;
  }
  .stats-item{
    margin: auto 0.5rem;
  }
  .stats-status{
    font-size: 12px;
  }
  .profile-body{
    flex-direction: column;
    margin: 1rem 0;
  }
  .body-bio{
    width: 100%;
    padding: 1rem;
  }
  .body-3d{
    display: block;
    margin: auto;
    width: 100%;
    height: 300px;
  }
  .profile-feed{
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .img{
    height: 300px;
    width: 300px;
  }
}
</style>
