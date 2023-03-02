<template>
  <div class="card my-3">    
    <h3 class="h4 text-uppercase card-header text-light" style="background: black;">
      {{ mission }}
    </h3>
    <div>
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
    <add-to-calendar-button
      :name="mission + ' by ' + launchsp "
      :description="description + '. Visit RocketDownrange.com for more information on companies, rovers, launch providers, NASA Astronomy Picture of the Day, and more!'"
      :startDate="launchtime"
      :endTime="addHours(launchtime, 3)"
      :location="location"
      options="['Apple','Google','iCal','Microsoft365','Outlook.com','Yahoo']"
      trigger="click"
      inline
      listStyle="modal"
      iCalFileName="Reminder-Event">
    </add-to-calendar-button>
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

