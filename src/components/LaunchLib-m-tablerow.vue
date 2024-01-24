<template>
  <div class="card">    
    <h3 class="h4 text-uppercase card-header text-light" style="background: black;">
      {{ mission }}
    </h3>
    <div class="py-3">
      <v-lazy-image :src="image" :alt="mission + ', ' + launchsp + ', ' + location" class='img-fluid rounded mx-auto d-block' style="height: 10rem; max-width: 16rem"/>
    </div>
    <div>
      <p class="mx-2 my-3">
        <span id="header">Launch Date: </span><br>
        <span id="content">{{ utcTranslate(launchtime) }}</span>
      </p>
      <p class="mx-2 my-3">
        <span id="header">Launch Vehicle: </span><br>
        <span id="content">{{ rocket }}, </span><br>
        <span id="content">{{ launchsp }}</span>
      </p>
      <p class="mx-2 my-3">
        <span id="header">Location: </span><br>
        <span id="content">{{ pad }}, </span><br>
        <span id="content">{{ location }}</span>
      </p>
      <p class="mx-2 my-3">
        <span id="header">Overview: </span><br>
        <span id="content">{{ charCount(description, limit) }}</span>
      </p>
    </div>
  </div>
</template>


<script>
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "tablerowM",
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
    addHours(l, d, h)
    {
      var startTime = new Date(d);
      var endTime = new Date(d)
      endTime = endTime.setHours(endTime.getHours() + h)
      console.log(`Mission: ${l} \n Original Date: ${startTime} \n New Date: ${new Date(endTime)}`)

      return endTime;
    }
  },
};
</script>

<style scoped>
.heading{ color: black;}
#image{
    display: grid; 
    place-items: center;
    }
  #header{
    font-weight: bold;
    text-transform: uppercase;
  }
  #content{
    margin-left: 8px; 
  }
</style>

