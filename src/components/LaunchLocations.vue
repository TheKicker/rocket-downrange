<template>
  <div class="text-center my-4">
    <h2>{{ content }}</h2>
    <div id="parent">
      <div class="child">
        <l-map class="l-map" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng"><l-popup>{{ content }}</l-popup></l-marker>
        </l-map>
      </div>
      <div class="child">
        <div class="mb-4">
          <h5><strong>Location:</strong></h5>
          <h4>- {{ region }}</h4>
        </div>
        <div class="mb-4">
          <h5><strong>Primary Operator:</strong></h5>
          <h4>- {{ operator }}</h4>
        </div>
        <div class="mb-4">
          <h5><strong>Launch Pads:</strong></h5>
          <h4>- {{ launch_pads }}</h4>
        </div>
        <div class="mb-4">
          <h5><strong>First Launch:</strong></h5>
          <h4>- {{ first_launch }}</h4>
        </div>
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
  height: 500px;
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