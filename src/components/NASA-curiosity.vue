<template>
  <div class="Curiosity my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">Mars Curiosity Rover Picture of the Day:</h5>
        <hr />
        <h3 class="text-center my-4">Photo ID#{{this.results.photos[0].id}}</h3>
        <div class="row">
          <div class="mx-auto">
            <a :href="this.results.photos[0].img_src" target="_blank" rel="noopener">
              <img
                :src="secureURL"
                class="img-fluid"
                style="max-height: 75vh;"
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
                  class="btn btn-block btn-outline-primary text-secondary italic"
                >HD Link from NASA.gov</a>
              </strong>
            </div>
            <p
              class="my-2 text-primary"
            >This picture was taken on Earth date: {{new Date(this.results.photos[0].earth_date).toDateString()}}, or Sol {{this.results.photos[0].sol}} on Mars. Captured with the {{this.results.photos[0].camera.full_name}} ({{this.results.photos[0].camera.name}}) aboard the {{this.results.photos[0].rover.name}} rover. {{this.results.photos[0].rover.name}} was launched from Earth on {{new Date(this.results.photos[0].rover.launch_date).toDateString()}} and has been on Mars since {{new Date(this.results.photos[0].rover.landing_date).toDateString()}} and remains {{this.results.photos[0].rover.status}} to this day. All images and mission data compliments of NASA.</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>


<script>
const day = new Date().getDate() - 7;
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const secure = "";
const api_key = "PAdDVGUIS5Kjq97mf6JzKNKT7TohmSuSaLHAVImo";
window.axios = require("axios");

export default {
  name: "NASAcuriosity",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    var url =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" +
      year +
      "-" +
      month +
      "-" +
      day +
      "-" +
      "&api_key=" +
      api_key;
    console.log("NASA Curiosity - " + url);
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  },
  computed: {
    secureURL: function() {
      var baseURL = this.results.photos[0].img_src;
      if (baseURL.slice(0, 5) != "https") {
        var secure_url = baseURL.slice(0, 4) + "s" + baseURL.slice(4);
        // console.log("Curiousity Secure Pic - ", secure_url);
        return secure_url;
      } else {
        return baseURL;
      }
    }
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
