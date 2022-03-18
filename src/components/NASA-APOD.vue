<template>
  <div id="APOD" class="APOD container">
    <div>
      <div class="py-md-6 my-md-3">
        <h5 class="text-left text-secondary">
          NASA Astronomy Picture of the Day:
        </h5>
        <hr>
        <div v-if="results.media_type == 'video'">
          <h3 class="text-center my-3">{{ results.title }} (Video)</h3>
        </div>
        <div v-else>
          <h3 class="text-center my-3">{{ results.title }}</h3>
        </div>
        <div class="d-flex flex-lg-row flex-column">
          <div class="row half">
            <div v-if="results.media_type == 'video'" class="embed-responsive embed-responsive-16by9">              
                <iframe class="embed-responsive-item" :src="results.url" frameborder="0" allowfullscreen :title="company + ' - ' + title"></iframe>
            </div>
            <div v-else>
                <a :href="results.hdurl" target="_blank" rel="noopener">
                  <img :src="results.url" class="img-fluid" :alt="(results.title) +  ' - The NASA Astronomy Picture of the Day'"/>
                </a>
            </div>
          </div>
          <div class="row half">
              <p class="text-primary">{{ results.explanation }}</p>
              <p class="text-muted">Last updated at {{ new Date(results.date).toLocaleString() }}, come back tomorrow for a new picture of the day!</p>
              <br>
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