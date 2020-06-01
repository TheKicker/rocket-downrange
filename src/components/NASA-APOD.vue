<template>
  <div class="APOD my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h3 class="text-left text-secondary">NASA Astronomy Picture of the Day:</h3>
        <hr />
        <h1 class="text-center my-4">{{results.title}}</h1>
        <div class="row">
          <div class="mx-auto">
            <a
              :href="results.hdurl"
              target="_blank"
              rel="noopener"
              alt="Click me for the HD version of this photograph!"
            >
              <img :src="results.url" class="NASA-apod" />
            </a>
          </div>
        </div>
        <div class="row container mx-auto">
          <div class="my-2">
            <p class="my-2">{{results.explanation}}</p>
          </div>
        </div>
        <hr />
        <p class="text-center">
          <i>Last Updated at {{(new Date(results.date).toLocaleString())}}, Check back tomorrow for a new picture of the day!</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
let url =
  "https://api.nasa.gov/planetary/apod?api_key=PAdDVGUIS5Kjq97mf6JzKNKT7TohmSuSaLHAVImo";
window.axios = require("axios");

export default {
  name: "NASAapod",
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
</style>
