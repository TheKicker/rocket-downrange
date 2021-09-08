<template>
  <div id="APOD" class="APOD my-4 mx-lg-4 mx-md-0">
    <div class="card">
      <div class="card-body p-3 py-md-6 my-md-3">
        <h5 class="text-left text-secondary">
          NASA Astronomy Picture of the Day:
        </h5>
        <hr />
        <div v-if="results.media_type == 'video'">
          <h3 class="text-center my-4">{{ results.title }} (Video)</h3>
        </div>
        <div v-else>
          <h3 class="text-center my-4">{{ results.title }}</h3>
        </div>
        <div class="row">
            <div v-if="results.media_type == 'video'" class="embed-responsive embed-responsive-16by9 mx-auto">              
                <iframe class="embed-responsive-item" :src="results.url" frameborder="0" allowfullscreen></iframe>
            </div>
            <div v-else class="mx-auto">
              <a :href="results.hdurl" target="_blank" rel="noopener">
                <img
                  :src="results.url"
                  class="img-fluid"
                  style="max-height: 70vh;"
                  :alt="(results.title) +  ' - The NASA Astronomy Picture of the Day'"
                />
              </a>
            </div>
        </div>
        <div class="row container mx-auto">
          <div class="my-4">
            <div class="mx-auto my-2">
              <strong>
                <div v-if="results.media_type == 'video'" class="text-danger">
                  <a
                    :href="results.url"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-block btn-outline-primary text-secondary italic"
                    >Watch on Youtube</a
                  >
                </div>
                <div v-else class="text-success">
                  <a
                    :href="results.hdurl"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-block btn-outline-primary text-secondary italic"
                    >HD Link from NASA.gov</a
                  >
                </div>
              </strong>
            </div>
            <p class="my-2 text-primary">{{ results.explanation }}</p>
          </div>
        </div>
        <div class="row container mx-auto d-block text-center">
          <Social />
        </div>
        <hr />
        <p class="text-center">
          <i>
            Last Updated at {{ new Date(results.date).toLocaleString() }}, come back tomorrow for a new picture of the day!
          </i>
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
var url =`https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=`+api_key;

window.axios = require("axios");

import Social from "@/components/SocialSharing.vue";

export default {
  name: "NASAapod",
  data() {
    return {
      results: []
    };
  },
  components: {
    Social
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