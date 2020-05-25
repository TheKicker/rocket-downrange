<template>
  <div class="SpaceX-NextLaunch">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title text-center">{{results.mission_name}}</h1>
        <img class="mission-patch" :src="results.links.mission_patch" />
        <h4
          class="card-subtitle mb-2 text-muted"
        >Flight #{{results.flight_number}}, Launch: {{(new Date(results.launch_date_utc)).toDateString()}}</h4>
        <p class="card-text">{{results.details}}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
let url = "https://api.spacexdata.com/v3/launches/next";
window.axios = require("axios");

export default {
  name: "NextLaunch",
  props: {
    msg: String
  },
  data() {
    return {
      results: []
    };
  },
  mounted() {
    window.axios.get(url).then(response => {
      this.results = response.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mission-patch {
  height: 25rem;
  margin: auto;
}
p {
  text-size-adjust: 1.1rem;
}
</style>
