<template>
  <div class="card">
    <h3 class="h4 text-uppercase card-header text-center text-light" style="background: black;">
      {{ mission }}
    </h3>
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
    <div class="d-flex flex-row my-4 justify-content-around py-1">
          <router-link v-if="launchsp.includes('Astra')" to="/astra" class="btn btn-primary mx-3" :aria-label="launchsp + ' page on Rocket Downrange.com'">Company Info</router-link>
          <router-link v-if="launchsp.includes('Astrobotic')" to="/astrobotic" class="btn btn-primary mx-3" :aria-label="launchsp + ' page on Rocket Downrange.com'">Company Info</router-link>
          <router-link v-if="launchsp.includes('Blue Origin')" to="/blue-origin" class="btn btn-primary mx-3" :aria-label="launchsp + ' page on Rocket Downrange.com'">Company Info</router-link>
          <router-link v-if="launchsp.includes('Firefly')" to="/firefly-aerospace" class="btn btn-primary mx-3" :aria-label="launchsp + ' page on Rocket Downrange.com'">Company Info</router-link>
          <router-link v-if="launchsp.includes('Relativity Space')" to="/relativity-space" class="btn btn-primary mx-3" :aria-label="launchsp + ' page on Rocket Downrange.com'">Company Info</router-link>
          <router-link v-if="launchsp.includes('Rocket Lab')" to="/rocket-lab" class="btn btn-primary mx-3" :aria-label="launchsp + ' page on Rocket Downrange.com'">Company Info</router-link>
          <router-link v-if="launchsp.includes('SpaceX')" to="/spacex" class="btn btn-primary mx-3" :aria-label="launchsp + ' page on Rocket Downrange.com'">Company Info</router-link>
          <router-link v-if="launchsp.includes('Sierra Space')" to="/sierra-space" class="btn btn-primary mx-3" :aria-label="launchsp + ' page on Rocket Downrange.com'">Company Info</router-link>
          <router-link v-if="launchsp.includes('ULA')" to="/united-launch-alliance" class="btn btn-primary mx-3" :aria-label="launchsp + ' page on Rocket Downrange.com'">Company Info</router-link>
          <router-link v-if="launchsp.includes('Virgin')" to="/virgin-galactic" class="btn btn-primary mx-3" :aria-label="launchsp + ' page on Rocket Downrange.com'">Company Info</router-link>
          <router-link v-if="location.includes('Baikonur')" to="/locations" class="btn btn-primary mx-3" :aria-label="location + ' on Rocket Downrange.com'">Location Info</router-link>
          <router-link v-if="location.includes('Corn Ranch')" to="/locations" class="btn btn-primary mx-3" :aria-label="location + ' on Rocket Downrange.com'">Location Info</router-link>
          <router-link v-if="location.includes('Cape Canaveral')" to="/locations" class="btn btn-primary mx-3" :aria-label="location + ' on Rocket Downrange.com'">Location Info</router-link>
          <router-link v-if="location.includes('Kennedy Space Center')" to="/locations" class="btn btn-primary mx-3" :aria-label="location + ' on Rocket Downrange.com'">Location Info</router-link>
          <router-link v-if="location.includes('Vandenberg')" to="/locations" class="btn btn-primary mx-3" :aria-label="location + ' on Rocket Downrange.com'">Location Info</router-link>
          <router-link v-if="location.includes('Tanegashima')" to="/locations" class="btn btn-primary mx-3" :aria-label="location + ' on Rocket Downrange.com'">Location Info</router-link>
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
    color: black;
  }
  .btn{
    max-height: 47px; 
  }
</style>

