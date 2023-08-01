<template>
  <div class="container">
    <div class="cover"></div>
    <div class="profile-head">
      <div class="bio">
        <img src="https://rocketdownrange.com/app-icon.png" class="profile-image" alt="Rocket Downrange Rover profile image">
        <div class="name">
          <h1 class="h2">Starbase</h1>
          <p><i class="fas fa-map-marker-alt mr-2"></i> Boca Chica, Texas, USA</p>
        </div>
      </div>
      <div class="stats">
        <div class="stats-item">
          <p class="stats-status">Jul 25th, 2019</p>
          <p class="small">FIRST LAUNCH</p>
        </div>
        <div class="stats-item">
          <p class="stats-status">SPACEX</p>
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
          <p class="bar">SpaceX Starbase, located in Boca Chica, Texas, is a cutting-edge rocket production and launch facility that plays a key role in SpaceX's ambitious plans to colonize Mars and make human life multi-planetary. With its innovative engineering and pioneering spirit, SpaceX Starbase is at the forefront of the commercial space race.</p>
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
      message="If something is important enough, you should try.  Even if the probable outcome is failure. "
      author="Elon Musk"
      significance="CEO of SpaceX"
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
  name: "Starbase",
  components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        Quote
    },
  data() {
    return {
        location: "Texas SpaceX",
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 11,
        center: [25.985752215917778, -97.18223317068392],
        markerLatLng: [25.985752215917778, -97.18223317068392],
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
    title: "Rocket Downrange | Starbase",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Located in Boca Chica, Texas, is a cutting-edge rocket production and launch facility that plays a key role in SpaceX's ambitious plans to colonize Mars and make human life multi-planetary. ",
      },
      {
        name: "keywords",
        content:
          "Rocket, Downrange, Starbase, SpaceX, Starship, Falcon, Falcon Heavy, Mars, Elon Musk, Boca Chica, Texas",
      },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "Rocket Downrange | Starbase" },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/locations/starbase",
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Located in Boca Chica, Texas, is a cutting-edge rocket production and launch facility that plays a key role in SpaceX's ambitious plans to colonize Mars and make human life multi-planetary. ",
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/locations/starbase",
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Starbase",
      },
      {
        name: "twitter:description",
        content:
          "Located in Boca Chica, Texas, is a cutting-edge rocket production and launch facility that plays a key role in SpaceX's ambitious plans to colonize Mars and make human life multi-planetary. ",
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg",
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Rocket Downrange | Starbase" },
      {
        itemprop: "description",
        content:
          "Located in Boca Chica, Texas, is a cutting-edge rocket production and launch facility that plays a key role in SpaceX's ambitious plans to colonize Mars and make human life multi-planetary. ",
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
    background-image: url("https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1315/ac8ffc8ac67cfc99a069184833593c8b.jpg");
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
