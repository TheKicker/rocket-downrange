<template>
  <div class="container">
    <div class="cover"></div>
    <div class="profile-head">
      <div class="bio">
        <img src="https://rocketdownrange.com/app-icon.png" class="profile-image" alt="Rocket Downrange Rover profile image">
        <div class="name">
          <h1 class="h2">Wallops Island & Flight Facility</h1>
          <p><i class="fas fa-map-marker-alt mr-2"></i> Wallops Island, Virginia, USA</p>
        </div>
      </div>
      <div class="stats">
        <div class="stats-item">
          <p class="stats-status">Jul 4th, 1945</p>
          <p class="small">FIRST LAUNCH</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">NASA</p>
          <p class="small">PRIMARY OPERATOR</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">3</p>
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
          <p class="bar">Wallops Island and Flight Facility, located on the eastern shore of Virginia, is a NASA-run launch site that supports a wide range of scientific, commercial, and military missions, including the testing of new rocket systems and payloads. With its unique coastal location, cutting-edge technology, and experienced workforce, Wallops Island and Flight Facility is a vital hub for space innovation and exploration.</p>
        </div>
        <figure>
          <figcaption>Quick Facts:</figcaption>
          <ul>
            <li>During the Apollo program, Wallops Island was utilized for testing the Lunar Module (LM), which played a pivotal role in landing astronauts on the Moon. </li>
            <li>On February 15, 1961, Wallops Island became the site of a significant achievement when the Explorer 9 satellite was launched into orbit. It was the first successful satellite launch from the facility and played a crucial role in advancing space exploration.</li>
            <li>Wallops Island has hosted a range of scientific missions and resupply missions to the ISS, making it a significant center for space research and exploration.</li>
            
          </ul>
        </figure>
      </div>
    </div>

    <Quote
      message="From this location, we have launched more than 16,000 rockets, many of them being milestones in the development of space exploration. "
      author="David Pierce"
      significance="Former director of NASA's Wallops Flight Facility"
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
  name: "Wallops",
  components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        Quote
    },
  data() {
    return {
        location: "Wallops Island",
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 11,
        center: [37.93751126741556, -75.47042545896504],
        markerLatLng: [37.93751126741556, -75.47042545896504],
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
    title: "Rocket Downrange | Wallops Island",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Located on the eastern shore of Virginia, is a NASA-run launch site that supports a wide range of scientific, commercial, and military missions, including the testing of new rocket systems and payloads. With its unique coastal location, cutting-edge technology, and experienced workforce, Wallops Island and Flight Facility is a vital hub for space innovation and exploration. ",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, Wallops, Island, Virginia, NASA, Flight Facility, ISS, Washington DC",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Wallops Island" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/locations/wallops-island",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Located on the eastern shore of Virginia, is a NASA-run launch site that supports a wide range of scientific, commercial, and military missions, including the testing of new rocket systems and payloads. With its unique coastal location, cutting-edge technology, and experienced workforce, Wallops Island and Flight Facility is a vital hub for space innovation and exploration. ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/locations/wallops-island",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Wallops Island",
      },
      {
        name: "twitter:description",
        content:
          "Located on the eastern shore of Virginia, is a NASA-run launch site that supports a wide range of scientific, commercial, and military missions, including the testing of new rocket systems and payloads. With its unique coastal location, cutting-edge technology, and experienced workforce, Wallops Island and Flight Facility is a vital hub for space innovation and exploration. ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Wallops Island" },
      {
        itemprop: "description",
        content:
          "Located on the eastern shore of Virginia, is a NASA-run launch site that supports a wide range of scientific, commercial, and military missions, including the testing of new rocket systems and payloads. With its unique coastal location, cutting-edge technology, and experienced workforce, Wallops Island and Flight Facility is a vital hub for space innovation and exploration. ",
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
    background-image: url("https://images-assets.nasa.gov/image/LRC-1960-B701_P-07626/LRC-1960-B701_P-07626~thumb.jpg");
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
