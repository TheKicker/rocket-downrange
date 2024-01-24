<template>
  <div id="APOD" class="APOD py-3 my-4">
        <p class="h5 text-uppercase text-left text-secondary">
          NASA APOD:
        </p>
        <hr>
        <div v-if="results.media_type == 'video'">
          <h2 class="h3 text-uppercase text-center my-3">{{ results.title }} (Video)</h2>
        </div>
        <div v-else>
          <h2 class="h3 text-uppercase text-center my-3">{{ results.title }}</h2>
        </div>
        <div class="d-flex flex-lg-row flex-column">
          <div class="row half" style="display: block; margin: 0 auto;">
            <div v-if="results.media_type == 'video'" class="embed-responsive embed-responsive-16by9">              
                <iframe class="embed-responsive-item" :src="results.url" frameborder="0" allowfullscreen :title="company + ' - ' + title"></iframe>
            </div>
            <div v-else>
                <a :href="results.hdurl" target="_blank" rel="noopener">
                  <img :src="results.url" class="img-fluid" style="margin: auto;" :alt="(results.title) +  ' - The NASA Astronomy Picture of the Day'"/>
                </a>
            </div>
          </div>
          <div class="row half" style="display: block; margin: 0 auto;">
              <p class="text-primary">{{ results.explanation }}</p>
              <div class="d-block text-center w-100">
                <div v-if="results.media_type == 'video'">
                  <a
                    :href="results.url"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-block btn-outline-primary"
                    >Watch on Youtube</a
                  >
                </div>
                <div v-else>
                  <a
                    :href="results.hdurl"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-block btn-outline-primary"
                    >HD Link from NASA.gov</a>
                </div>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var day = new Date().getDate();
var api_key = process.env.VUE_APP_APOD_KEY
var url =`https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=`+api_key;

window.axios = require("axios");

export default {
  name: "NASAapod",
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
        // console.log(url)
      })
      .catch(error => console.log(error));
  }
};
</script>
<style scoped>

.half{
  width: 50%;
  padding: 1rem 1.5rem;
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 650px) {
  .half{
    width: 100%;
    padding: 0.5rem 0;
  }
}

</style>