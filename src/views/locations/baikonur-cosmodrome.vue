<template>
  <div class="container">
    <div class="cover"></div>
    <div class="profile-head">
      <div class="bio">
        <img src="https://rocketdownrange.com/app-icon.png" class="profile-image" alt="Rocket Downrange Rover profile image for the 'Curiosity' Mars Rover">
        <div class="name">
          <h1 class="h2">Baikonur Cosmodrome</h1>
          <p><i class="fas fa-map-marker-alt mr-2"></i> Kazakh Steppe, Kazakhstan</p>
        </div>
      </div>
      <div class="stats">
        <div class="stats-item">
          <p class="stats-status">Oct 4, 1957</p>
          <p class="small">FIRST LAUNCH</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">ROSCOSMOS</p>
          <p class="small">PRIMARY OPERATIR</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">71</p>
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
          <p class="bar">Baikonur Cosmodrome, located in the desert steppes of Kazakhstan, is the world's oldest and largest space launch facility and has been the launch site for numerous historic space missions, including the first human spaceflight by Yuri Gagarin. With its unparalleled history and infrastructure, Baikonur Cosmodrome remains a vital component of the global space industry and a symbol of humanity's quest for exploration and discovery.</p>
        </div>
        <figure>
          <figcaption>Quick Facts:</figcaption>
          <ul>
            <li>It covers an area of approximately 6,717 square kilometers (2,600 square miles) and is situated near the city of Baikonur.</li>
            <li>It was originally constructed by the Soviet Union in the late 1950s and became the launch site for the iconic space missions, including Yuri Gagarin's historic flight, which made him the first human to orbit the Earth on April 12, 1961.</li>
            <li>Despite being located in Kazakhstan, Baikonur Cosmodrome is not part of the Kazakh Space Agency. Instead, it is operated under a lease agreement between Russia and Kazakhstan.</li>
          </ul>
        </figure>
      </div>
    </div>
    <!-- <img :src="images.collection.items[0].links[0].href"/> -->
    <div class="profile-feed mb-4">
        <img v-for="X in 24" :key="X" :src="images.collection.items[X].links[0].href" class="img" />
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  name: "Baikonur",
  components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup
    },
  data() {
    return {
        location: "Baikonur Cosmodrome",
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 11,
        center: [45.965, 63.305],
        markerLatLng: [45.965, 63.305],
        images: []
    };
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      const image_url = `https://images-api.nasa.gov/search?q=baikonur%20cosmodrome&page=1`;
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
  }
};
</script>

<style scoped>
figcaption{
    font-weight: 800;
    font-size: 16px;
}
.cover {
    background-image: url("https://images-assets.nasa.gov/image/NHQ201903140002/NHQ201903140002~thumb.jpg");
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
