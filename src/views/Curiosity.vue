<template>
  <div class="mx-auto container">
    <div class="cover">
      <!-- Cover image size set by scoped CSS -->
    </div>
    <div class="profile-head">
      <div class="bio">
        <img src="@/assets/rover/CURI.png" class="profile-image">
        <div class="name">
          <h1>Curiosity</h1>
          <p><i class="fas fa-map-marker-alt mr-2"></i> Gale Crater, Mars</p>
        </div>
      </div>
      <div class="stats">
        <div class="stats-item">
          <p class="stats-status">ACTIVE</p>
          <p class="small">Status</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">5,352 (5,498)</p>
          <p class="small">SOLs (DAYs)</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">17.49 (28.15)</p>
          <p class="small">MILES (KM)</p>
        </div>
      </div>
    </div>
    <div class="profile-body">
      <div class="body-3d">
        <iframe src="https://mars.nasa.gov/gltf_embed/24584" width="100%" height="450px" frameborder="0" />
      </div>
      <div class="body-bio">
        <h2>ABOUT</h2>
        <hr>
        <div class="foobar">
          <p class="foo">Biography:</p>
          <p class="bar">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi amet deleniti incidunt voluptatum omnis numquam aspernatur, consequuntur atque recusandae laboriosam aperiam nobis debitis? Rem aperiam quas ab nam deserunt expedita ut amet. Nobis rem voluptatem, quae doloremque fugit, sint similique deserunt veritatis ab nemo vero, laudantium illo suscipit sequi sed blanditiis.</p>
        </div>
        <div class="foobar">
          <p class="foo">Launch Date:</p>
          <p class="bar">01/01/2000</p>
        </div>
        <div class="foobar">
          <p class="foo">Launch Date:</p>
          <p class="bar">01/01/2000</p>
        </div>
        <div class="foobar">
          <p class="foo">Launch Date:</p>
          <p class="bar">01/01/2000</p>
        </div>
      </div>
    </div>
    <div class="profile-feed">
      <a href="#">
        <img src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="img">
      </a>
      <a href="#">
        <img src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="img">
      </a>
      <a href="#">
        <img src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="img">
      </a>
      <a href="#">
        <img src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="img">
      </a>
      <a href="#">
        <img src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="img">
      </a>
      <a href="#">
        <img src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="img">
      </a>
      <a href="#">
        <img src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="img">
      </a>
    </div>
    <div class="py-3">
      <hr>
      <p class="text-center">
        For more information on this rover, or other missions, <a href="https://nasa.gov" target="_blank" rel="noopener">visit NASA's official website</a>
      </p>
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
var api_key = process.env.VUE_APP_APOD_KEY
window.axios = require("axios");

export default {
  name: "Curiosity",
  data() {
    return {
      results: {}
    };
  },
  mounted(){
    var url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${lastYear}-${lastMonth}-${lastDay}&api_key=${api_key}`;
    console.log(url)
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  },
  metaInfo: {
    title: "Rocket Downrange | Curiosity Rover",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool  - NASA's Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on! ",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, NASA, APOD, Astronomy, Picture, Day, Historical, Lookup, Tool, Space, Images, Video, GIF",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Curiosity Rover" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/APOD",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool  - NASA's Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on! ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/APOD",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Curiosity Rover",
      },
      {
        name: "twitter:description",
        content:
          "Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool  - NASA's Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on! ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Curiosity Rover" },
      {
        itemprop: "description",
        content:
          "Missed an Astronomy Picture of the Day? Use the Rocket Downrange Historical APOD Lookup Tool  - NASA's Astronomy Picture of the Day has been around since 1995 so you have plenty to catch up on! ",
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
    height: 300px;
}
.profile-head{
  display: flex;
  justify-content: space-between;
}
.profile-image{
  transform: translateY(-2rem);
  outline: 5px solid white;
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
</style>

