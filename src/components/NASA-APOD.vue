<template>
  <div class="APOD my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">NASA Astronomy Picture of the Day:</h5>
        <hr />
        <div v-if="(results.url).includes('youtube')">
          <h3 class="text-center my-4">{{results.title}} (Youtube Link)</h3>
        </div>
        <div v-else>
          <h3 class="text-center my-4">{{results.title}}</h3>
        </div>
        <div class="row">
          <div class="mx-auto">
            <div v-if="(results.url).includes('youtube')" class="text-danger">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <a :href="results.url" target="_blank" rel="noopener">
                  <img
                    src="../assets/NASA-tv.png"
                    class="img-fluid"
                    alt="The NASA Astronomy Picture of the Day is a Youtube video today. Click the link to view on Youtube!"
                  />
                </a>
              </div>
            </div>
            <div v-else class="text-success">
              <a :href="results.hdurl" target="_blank" rel="noopener">
                <img
                  :src="results.url"
                  class="img-fluid"
                  style="max-height: 75vh;"
                  alt="The NASA Astronomy Picture of the Day! "
                />
              </a>
            </div>
          </div>
        </div>
        <div class="row container mx-auto">
          <div class="my-4">
            <div class="mx-auto my-2">
              <strong>
                <div v-if="(results.url).includes('youtube')" class="text-danger">
                  <a
                    :href="results.url"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-block btn-outline-primary text-secondary italic"
                  >Watch on Youtube</a>
                </div>
                <div v-else class="text-success">
                  <a
                    :href="results.hdurl"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-block btn-outline-primary text-secondary italic"
                  >HD Link from NASA.gov</a>
                </div>
              </strong>
            </div>
            <p class="my-2 text-primary">{{results.explanation}}</p>
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
var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var day = new Date().getDate();
const api_key = "PAdDVGUIS5Kjq97mf6JzKNKT7TohmSuSaLHAVImo";
var url =
  `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=` +
  api_key;

console.log("NASA APOD - " + url);
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
