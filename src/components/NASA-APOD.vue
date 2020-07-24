<template>
  <div class="APOD my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">NASA Astronomy Picture of the Day:</h5>
        <hr />
        <h3 v-if="results.title === null" class="text-center my-4">{{results2.title}}</h3>
        <h3 v-else class="text-center my-4">{{results.title}}</h3>
        <div class="row">
          <div class="mx-auto">
            <a v-if="results.hdurl === null" :href="results2.hdurl" target="_blank" rel="noopener">
              <img
                :src="results2.url"
                class="img-fluid"
                style="max-height: 75vh;"
                alt="If this picture did not load - then an error occured, this media from NASA might be a Youtube video rather than picture. "
              />
            </a>
            <a v-else :href="results.hdurl" target="_blank" rel="noopener">
              <img
                :src="results.url"
                class="img-fluid"
                style="max-height: 75vh;"
                alt="If this picture did not load - then an error occured, this media from NASA might be a Youtube video rather than picture. "
              />
            </a>
          </div>
        </div>
        <div class="row container mx-auto">
          <div class="my-4">
            <div class="mx-auto my-2">
              <strong>
                <a
                  v-if="results.url === null"
                  :href="results2.hdurl"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-block btn-outline-primary text-secondary italic"
                >HD Link from NASA.gov</a>
                <a
                  v-else
                  :href="results.hdurl"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-block btn-outline-primary text-secondary italic"
                >HD Link from NASA.gov</a>
              </strong>
            </div>
            <p
              v-if="results.explanation === null"
              class="my-2 text-primary"
            >{{results2.explanation}}</p>
            <p v-else class="my-2 text-primary">{{results.explanation}}</p>
          </div>
        </div>
        <hr />
        <p class="text-center">
          <i
            v-if="results.date === null"
          >Last Updated at {{(new Date(results2.date).toLocaleString())}}, Check back tomorrow for a new picture of the day!</i>
          <i
            v-else
          >Last Updated at {{(new Date(results.date).toLocaleString())}}, Check back tomorrow for a new picture of the day!</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var day = new Date().getDate();
var day2 = new Date().getDate() - 1;
const api_key = "PAdDVGUIS5Kjq97mf6JzKNKT7TohmSuSaLHAVImo";
var url =
  `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=` +
  api_key;
var url2 =
  `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day2}&api_key=` +
  api_key;
console.log("NASA APOD 1 - " + url);
console.log("NASA APOD 2 - " + url2);
window.axios = require("axios");

export default {
  name: "NASAapod",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
    window.axios
      .get(url2)
      .then(response => {
        this.results2 = response.data;
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
