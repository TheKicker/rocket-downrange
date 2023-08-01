<template>
  <div class="container">
    <div class="cover"></div>
    <div class="profile-head">
      <div class="bio">
        <img src="https://rocketdownrange.com/app-icon.png" class="profile-image" alt="Rocket Downrange Rover profile image">
        <div class="name">
          <h1 class="h2">Kennedy Space Center</h1>
          <p><i class="fas fa-map-marker-alt mr-2"></i> Cape Canaveral, Florida, USA</p>
        </div>
      </div>
      <div class="stats">
        <div class="stats-item">
          <p class="stats-status">Nov 9th, 1967</p>
          <p class="small">FIRST LAUNCH</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">NASA</p>
          <p class="small">PRIMARY OPERATOR</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">4</p>
          <p class="small">LAUNCH PADS</p>
        </div>
      </div>
    </div>
    <div class="profile-body pb-4">
      <div class="body-map">
        <l-map class="l-map" :zoom="zoom" :center="center" :options="{attributionControl: false}">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-control-attribution position="topright" prefix="A custom prefix"></l-control-attribution>
          <l-marker :lat-lng="markerLatLng"><l-popup>{{ content }}</l-popup></l-marker>
        </l-map>
        <p class="text-right"><a target="_blank" href="https://leafletjs.com/" rel="noopener">Leaflet.js</a> | &copy; <a target="_blank" href="http://osm.org/copyright" rel="noopener">OpenStreetMap</a></p>
      </div>
      <div class="body-bio">
        <h2>ABOUT THE LAUNCH SITE</h2>
        <hr>
        <div class="foobar">
          <p class="foo">Description:</p>
          <p class="bar">Kennedy Space Center, located on the east coast of Florida, is NASA's primary launch facility and a hub for human spaceflight, scientific research, and space exploration. With its rich history, state-of-the-art facilities, and proximity to Cape Canaveral Air Force Station, Kennedy Space Center is a world-renowned center for space innovation and discovery.</p>
        </div>
        <figure>
          <figcaption>Quick Facts:</figcaption>
          <ul>
            <li>NASA's Kennedy Space Center in Cape Canaveral, Florida, is a historic launch site renowned for its crucial role in crewed space missions like Apollo moon landings and Space Shuttle launches.</li>
            <li>The center houses multiple launch complexes, including LC-39A, which has been utilized by private companies like SpaceX for commercial launches.</li>
            <li>Serving as a gateway to space, the Kennedy Space Center continues to play a vital role in space exploration, supporting missions like the Artemis program's development of the Space Launch System and providing a visitor complex for public engagement with space history and future endeavors.</li>
            
          </ul>
        </figure>
      </div>
    </div>

    <Quote
      message="We welcome more nations taking trips to mars and studying it, delivering and sharing its science with the world... that’s what science is all about, of course, it’s a very uniting kind of thing. For the first time ever, we’re going to fly a helicopter on another planet... in the future, it could transform how we do planetary science on other worlds."
      author="Jim Bridenstine"
      significance="Former head of NASA, under President Donald Trump"
    />
    
    <!-- <img :src="images.collection.items[0].links[0].href"/> -->
    <div class="profile-feed mb-4">
        <img v-for="X in 32" :key="X" :src="images.collection.items[X].links[0].href" class="img" :alt="images.collection.items[X].data[0].title"/>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import Quote from "@/components/Quotes-Template.vue";

export default {
  name: "Kennedy Space Center",
  components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        Quote
    },
  data() {
    return {
        location: "Kennedy Space Center VAB",
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 11,
        center: [28.524, -80.650],
        markerLatLng: [28.524, -80.650],
        images: []
    };
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      let computeString = this.location.replace(/ /g, '%20');
      const image_url = `https://images-api.nasa.gov/search?q=${computeString}&page=1`;
      console.log(image_url)
      try {
        const response = await fetch(image_url);
        const data = await response.json();
        
        return this.images = data
      }
      catch {
        console.log("Error", error)
      }
    }
  },
  metaInfo: {
    title: "Rocket Downrange | Kennedy Space Center",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "With its rich history, state-of-the-art facilities, and proximity to Cape Canaveral Air Force Station, Kennedy Space Center is a world-renowned center for space innovation and discovery. ",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, NASA, Cap Canaveral, Air Force Station, Space Force, KSC, Kennedy Space Center, Florida",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Kennedy Space Center" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/locations/kennedy-space-center",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "With its rich history, state-of-the-art facilities, and proximity to Cape Canaveral Air Force Station, Kennedy Space Center is a world-renowned center for space innovation and discovery. ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/locations/kennedy-space-center",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Kennedy Space Center",
      },
      {
        name: "twitter:description",
        content:
          "With its rich history, state-of-the-art facilities, and proximity to Cape Canaveral Air Force Station, Kennedy Space Center is a world-renowned center for space innovation and discovery. ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Kennedy Space Center" },
      {
        itemprop: "description",
        content:
          "With its rich history, state-of-the-art facilities, and proximity to Cape Canaveral Air Force Station, Kennedy Space Center is a world-renowned center for space innovation and discovery. ",
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
figcaption{
    font-weight: 800;
    font-size: 16px;
}
.cover {
    background-image: url("https://images-assets.nasa.gov/image/KSC-20201027-PH-JBS02_0051/KSC-20201027-PH-JBS02_0051~thumb.jpg");
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
  border-radius: 25%;
  height: 150px;
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
.body-map{
  height: 450px;
  width: 45%;
}
.l-map{
  height: 500px;
}
.foobar{
  margin: 2rem 0;
}
.foo{
  font-weight: 800;
  line-height: 0;
  font-size: 16px;
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
  .body-map{
    display: block;
    margin: auto;
    width: 100%;
    height: 300px;
  }
  .l-map{
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
