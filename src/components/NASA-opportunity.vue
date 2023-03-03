<template>
  <div class="Opportunity my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h2 class="h5 text-uppercase text-left text-secondary">
          Mars Opportunity Rover Picture of the Day:
        </h2>
        <hr />
        <h3 class="text-center my-4">
          Photo ID#{{ Object.values(results.photos)[0].id }}
        </h3>
        <div class="row">
          <div class="mx-auto">
            <a
              :href="Object.values(results.photos)[0].img_src"
              target="_blank"
              rel="noopener"
            >
              <img
                :src="secureURL"
                class="img-fluid"
                style="max-height: 75vh;"
                :alt='"Image from " + Object.values(results.photos)[0].rover.name + " on Mars, taken via " + Object.values(results.photos)[0].camera.full_name + " on " + new Date(Object.values(results.photos)[0].earth_date).toDateString()'
              />
            </a>
          </div>
        </div>
        <div class="row container mx-auto">
          <div class="my-4">
            <div class="mx-auto my-2">
              <strong>
                <a
                  :href="Object.values(results.photos)[0].img_src"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-block btn-outline-primary text-secondary italic"
                  >HD Link from NASA.gov</a
                >
              </strong>
            </div>
            <p class="my-2 text-primary">
              This picture was taken on Earth date:
              {{
                new Date(
                  Object.values(results.photos)[0].earth_date
                ).toDateString()
              }}, or Sol {{ Object.values(results.photos)[0].sol }} on Mars.
              Captured with the
              {{ Object.values(results.photos)[0].camera.full_name }} ({{
                Object.values(results.photos)[0].camera.name
              }}) aboard the
              {{ Object.values(results.photos)[0].rover.name }} rover.
              {{ Object.values(results.photos)[0].rover.name }} was launched
              from Earth on
              {{
                new Date(
                  Object.values(results.photos)[0].rover.launch_date
                ).toDateString()
              }}
              and has been on Mars since
              {{
                new Date(
                  Object.values(results.photos)[0].rover.landing_date
                ).toDateString()
              }}. Sadly, we lost communication with
              {{ Object.values(results.photos)[0].rover.name }} in June of 2018
              and mission was declared
              {{ Object.values(results.photos)[0].rover.status }} on February
              13th, 2019. All images and mission data compliments of NASA. RIP
              Oppy.
            </p>
          </div>
        </div>
        <div style="display: grid; place-items: center; margin: 2rem;">
          <router-link to="/opportunity" class="btn btn-primary" style="text-decoration: none;">Explore Opportunity</router-link>
        </div>
        <hr />
        <p class="text-center">
          <i
            ><a href="https://api.nasa.gov/" target="_blank" rel="noopener"
              >Data brought to you from Mars by NASA</a
            ></i
          >
        </p>
      </div>
    </div>
  </div>
</template>


<script>
// Oppy was operational for around 5100 sol days on Mars
// Picture of the day is taken from a cache of these images
const random_number = Math.floor(Math.random() * 5100);
var api_key = process.env.VUE_APP_APOD_KEY
window.axios = require("axios");

export default {
  name: "NASAopportunity",
  data() {
    return {
      results: {}
    };
  },
  mounted() {
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=" + random_number + "&api_key=" + api_key;

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
