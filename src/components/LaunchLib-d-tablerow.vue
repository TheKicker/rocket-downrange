<template>
  <div class="card my-4">
    
    <h4 class="card-header text-center text-light" style="background: black;">
      {{ mission }}
    </h4>
    <div class="row">
      <div class="col col-md-6 my-3" id="image">
        <v-lazy-image :src="image" :alt="mission + ', ' + launchsp + ', ' + location" class='img-fluid rounded mx-auto d-block' style="height: 14rem; max-width: 20rem"/>
      </div>
      <div class=" col col-md-6 my-1">
        <p class="mx-2 my-2">
          <span id="header">Launch Date: </span><br>
          <span id="content">{{ utcTranslate(launchtime) }}</span>
        </p>
        <p class="mx-2 my-2">
          <span id="header">Launch Vehicle: </span><br>
          <span id="content">{{ rocket }}, </span><br>
          <span id="content">{{ launchsp }}</span>
        </p>
        <p class="mx-2 my-2">
          <span id="header">Location: </span><br>
          <span id="content">{{ pad }}, </span><br>
          <span id="content">{{ location }}</span>
        </p>
        <p class="mx-2 my-2">
          <span id="header">Overview: </span><br>
          <span id="content">{{ charCount(description, limit) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "tablerowD",
  components:{
    VLazyImage
  },
  data() {
    return {
      limit: 350,
    };
  },
  props: {
    mission: String,
    image: String,
    rocket: String,
    launchsp: String,
    launchtime: String,
    pad: String,
    location: String,
    description: String,
  },
  methods: {
    utcTranslate(results) {
      var local = new Date(results).toLocaleString();
      return local;
    },
    charCount(results, limit) {
      if (results.length > limit) {
        return results.slice(0, limit) + "...";
      } else {
        return results;
      }
    },
  },
};
</script>

<style scoped>
  #image{
    display: grid; 
    place-items: center;
    }
  #header{
    font-weight: bold;
    text-transform: uppercase;
  }
  #content{
    margin-left: 15px; 
  }
</style>

