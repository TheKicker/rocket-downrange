<template>
  <div class="card my-4">    
    <h5 class="card-header bg-dark text-light">
      {{ mission }}
    </h5>
    <div class="my-3">
      <img :src="image" :alt="mission + ', ' + launchsp + ', ' + location" class='img-fluid rounded mx-auto d-block' style="max-height: 10rem;"/>
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
export default {
  name: "tablerowM",
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

