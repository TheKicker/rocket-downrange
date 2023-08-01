<template>
  <div class="text-center my-4">
    <h2>{{ content }}</h2>
    <div id="parent">
      <div class="child">
        <l-map class="l-map" :zoom="zoom" :center="center" :options="{attributionControl: false}">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-control-attribution position="topright" prefix="A custom prefix"></l-control-attribution>
          <l-marker :lat-lng="markerLatLng"><l-popup>{{ content }}</l-popup></l-marker>
        </l-map>
        <p class="text-right"><a target="_blank" href="https://leafletjs.com/" rel="noopener">Leaflet.js</a> | &copy; <a target="_blank" href="http://osm.org/copyright" rel="noopener">OpenStreetMap</a></p>
      </div>
      <div class="child">
        <div class="mb-4">
          <p class="h5 text-uppercase text-secondary"><strong>Description:</strong></p>
          <p class="h4">- {{ description }} </p>
        </div>
        <div class="mb-4">
          <p class="h5 text-uppercase text-secondary"><strong>Location:</strong></p>
          <p class="h4">- {{ region }}</p>
        </div>
        <div class="mb-4">
          <p class="h5 text-uppercase text-secondary"><strong>Primary Operator:</strong></p>
          <p class="h4">- {{ operator }}</p>
        </div>
        <div class="mb-4">
          <p class="h5 text-uppercase text-secondary"><strong>Launch Pads:</strong></p>
          <p class="h4">- {{ launch_pads }}</p>
        </div>
        <div class="mb-4">
          <p class="h5 text-uppercase text-secondary"><strong>First Launch:</strong></p>
          <p class="h4">- {{ first_launch }}</p>
        </div>
        <!-- <div class="mb-4">
          <p class="h5 text-uppercase text-secondary"><strong>X / Y:</strong></p>
          <p class="h4">[{{ x }}, {{ y }}]</p>
        </div> -->
      </div>
    </div>
    <hr class="my-4">
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
    name: "LaunchLocations",
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup
    },
    props:{
        x: String,
        y: String,
        z: String,
        content: String,
        operator: String,
        region: String,
        launch_pads: String,
        first_launch: String,
        description: String
    },
    data() {
        return {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: this.z,
        center: [this.x, this.y],
        markerLatLng: [this.x, this.y],
        };
    },
    };
</script>
<style scoped>
.l-map{
  height: 550px;
}

#parent{
  display: flex;
  flex-direction: row;
}
.child{
  width: 50%;
  text-align: left;
  padding: 1rem;
}

@media only screen and (max-width: 999px) {
  .l-map{
    height: 300px;
  }
  #parent{
  display: flex;
  flex-direction: column;
  }
  .child{
    width: 100%;
    text-align: left;
  }
}
</style>