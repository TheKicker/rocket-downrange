<template>
  <div>
    <l-map style="height: 500px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"><l-popup>{{ content }}</l-popup></l-marker>
    </l-map>
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
        content: String
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