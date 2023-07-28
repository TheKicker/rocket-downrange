<template>
<div>
  <div class="cover container">
      <!-- Cover image size set by scoped CSS -->
  </div>
  <div class="mx-auto container">
    <div class="profile-head">
      <div class="bio">
        <img src="@/assets/rover/PERCY.png" class="profile-image" alt="Rocket Downrange Rover profile image for the 'Perseverance' Mars Rover">
        <div class="name">
          <h1 class="roverName">Perseverance</h1>
          <p class="roverLocation"><i class="fas fa-map-marker-alt mr-2"></i> Jezero Crater, Mars</p>
        </div>
      </div>
      <div class="stats">
        <div class="stats-item">
          <p class="stats-status">ACTIVE</p>
          <p class="small">Status</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">{{solsAlive}} ({{daysAlive}})</p>
          <p class="small">SOLs (DAYs)</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">7.80 (12.56)</p>
          <p class="small">MILES (KM)</p>
        </div>
      </div>
    </div>
    <div class="profile-body">
      <div class="body-3d">
        <iframe src="https://mars.nasa.gov/gltf_embed/25042" width="100%" height="100%" frameborder="0" />
      </div>
      <div class="body-bio">
        <h2>ABOUT THE ROVER</h2>
        <hr>
        <div class="foobar">
          <p class="foo">Biography:</p>
          <p class="bar">Nicknamed "Percy", this rover is similar to its predecessor, <router-link to="/curiosity">Curiosity</router-link> - however it adds a variety of awesome upgrades to test in the martian landscape like oxygen production and a detachable helicopter.  This biography will grow as Percy continues its mission to seek out evidence of microbial life and collecting rock/soil samples for return.</p>
        </div>
        <div class="foobar">
          <p class="foo">Launch Date:</p>
          <p class="bar">July 30th, 2020</p>
        </div>
        <div class="foobar">
          <p class="foo">Landing Date:</p>
          <p class="bar">February 18th, 2021</p>
        </div>
        <div class="foobar">
          <p class="foo">Rover Cost:</p>
          <p class="bar">$2.4 billion</p>
        </div>
        <div class="foobar text-center">
          <a href="https://twitter.com/NASAPersevere" target="_blank" rel="noopener"><i class="fab fa-twitter"></i> Follow Perseverance on Twitter</a>
        </div>
      </div>
    </div>

    <Quote
      message="We welcome more nations taking trips to mars and studying it, delivering and sharing its science with the world... that’s what science is all about, of course, it’s a very uniting kind of thing. For the first time ever, we’re going to fly a helicopter on another planet... in the future, it could transform how we do planetary science on other worlds."
      author="Jim Bridenstine"
      significance="Former head of NASA, under President Donald Trump"
    />

    <div class="mt-4">
      <h2>Rover Photo Feed</h2>
      <p>Photos taken on Earth date {{results.photos[0].earth_date}}, come back tomorrow for a new set!</p>
    </div>
    <div class="profile-feed">
      <a v-for="(result, index) in results.photos" :key="index" :href="result.img_src" target="_blank" rel="noopener">
        <VLazyImage :src="result.img_src" :alt="'Photo id#' + result.id + ' taken by Perseverance Rover in the Jezero Crater on Mars'" class="img" />
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
var oneDayAgo = new Date();
oneDayAgo.setDate(oneDayAgo.getDate() - 1);
var oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
const lastYear = oneWeekAgo.getFullYear();
const lastMonth = oneWeekAgo.getMonth() + 1;
const lastDay = oneWeekAgo.getDate();
var api_key = process.env.VUE_APP_APOD_KEY;
window.axios = require("axios");

import Quote from "@/components/Quotes-Template.vue";
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "Perseverance",
  components:{
    Quote,
    VLazyImage
  },
  data() {
    return {
      results: {},
      daysAlive: 0,
      solsAlive: 0,
    };
  },
  mounted(){
    const startDate  = '2021-02-18';
    const diffInMs   = new Date() - new Date(startDate);
    this.daysAlive = (diffInMs / (1000 * 60 * 60 * 24)).toFixed(0) -1;
    this.solsAlive = (diffInMs / (1000 * 60 * 60 * 24)* 0.97297297297).toFixed(0) -1;
    var url = `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=${lastYear}-${lastMonth}-${lastDay}&api_key=${api_key}`;
    console.log(url)
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  },
  metaInfo: {
    title: "Rocket Downrange | Perseverance Rover",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Nicknamed 'Percy', this rover is similar to its predecessor, Curiosity - however it adds a variety of awesome upgrades to test in the martian landscape like oxygen production and a detachable helicopter.",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, NASA, JPL, Mars, Rovers, Perseverance",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Perseverance Rover" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/perseverance",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Nicknamed 'Percy', this rover is similar to its predecessor, Curiosity - however it adds a variety of awesome upgrades to test in the martian landscape like oxygen production and a detachable helicopter.",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/perseverance",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Perseverance Rover",
      },
      {
        name: "twitter:description",
        content:
          "Nicknamed 'Percy', this rover is similar to its predecessor, Curiosity - however it adds a variety of awesome upgrades to test in the martian landscape like oxygen production and a detachable helicopter.",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Perseverance Rover" },
      {
        itemprop: "description",
        content:
          "Nicknamed 'Percy', this rover is similar to its predecessor, Curiosity - however it adds a variety of awesome upgrades to test in the martian landscape like oxygen production and a detachable helicopter.",
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
    background-image: url("https://www.nasa.gov/sites/default/files/thumbnails/image/pia2464-mastcam-zs_first_360-degree_panorama2.jpg");
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


