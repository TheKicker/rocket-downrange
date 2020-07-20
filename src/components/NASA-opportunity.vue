<template>
  <div class="APOD my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h3
          class="text-left text-secondary"
        >Mars {{this.results.photos[0].rover.name}} Rover Picture of the Day:</h3>
        <hr />
        <h1 class="text-center my-4">Photo ID#{{this.results.photos[0].id}}</h1>
        <div class="row">
          <div class="mx-auto">
            <a :href="this.results.photos[0].img_src" target="_blank" rel="noopener">
              <img
                :src="this.results.photos[0].img_src"
                class="img-fluid"
                alt="An error occured, this media from NASA might be a Youtube video rather than picture. "
              />
            </a>
          </div>
        </div>
        <div class="row container mx-auto">
          <div class="my-4">
            <div class="mx-auto my-2">
              <strong>
                <a
                  :href="this.results.photos[0].img_src"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-block btn-light text-primary italic"
                >Link from NASA.gov</a>
              </strong>
            </div>
            <p
              class="my-2 text-primary"
            >This picture was taken on Earth date: {{new Date(this.results.photos[0].earth_date).toDateString()}}, or Sol {{this.results.photos[0].sol}} on Mars. Captured with the {{this.results.photos[0].camera.full_name}} ({{this.results.photos[0].camera.name}}) aboard the {{this.results.photos[0].rover.name}} rover. {{this.results.photos[0].rover.name}} was launched from Earth on {{new Date(this.results.photos[0].rover.launch_date).toDateString()}} and has been on Mars since {{new Date(this.results.photos[0].rover.landing_date).toDateString()}}. Sadly, we lost communication with {{this.results.photos[0].rover.name}} in June of 2018 and mission was declared {{this.results.photos[0].rover.status}} on February 13th, 2019. All images and mission data compliments of NASA. RIP Oppy.</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>


<script>
// const day = new Date().getDate() - 7;
// const month = new Date().getMonth() + 1;
// const year = new Date().getFullYear();
const random_number = Math.floor(Math.random() * 5100);
const api_key = "PAdDVGUIS5Kjq97mf6JzKNKT7TohmSuSaLHAVImo";
window.axios = require("axios");

export default {
  name: "NASAopportunity",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    var url =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=" +
      random_number +
      "&api_key=" +
      api_key;
    console.log("NASA Oppy sol-" + random_number + " : " + url);

    window.axios.get(url).then(response => {
      this.results = response.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mission-patch {
  height: 18rem;
  margin: auto;
}
p {
  text-size-adjust: 1.1rem;
}
</style>
