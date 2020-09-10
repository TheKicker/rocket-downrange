<template>
  <div class="Curiosity my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">Mars Curiosity Rover Picture of the Day:</h5>
        <hr />
        <h3 class="text-center my-4"></h3>
        <div class="row">
          <div class="mx-auto">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <h3 class="text-center my-4">Photo ID#{{Object.values(results.photos)[0].id}}</h3>
                  <img
                    class="d-block w-100"
                    :src="Object.values(results.photos)[0].img_src"
                    alt="First slide"
                    style="height: 75vh;"
                  />
                </div>
                <div class="carousel-item">
                  <h3 class="text-center my-4">Photo ID#{{Object.values(results.photos)[1].id}}</h3>
                  <img
                    class="d-block w-100"
                    :src="Object.values(results.photos)[1].img_src"
                    alt="Second slide"
                    style="height: 75vh;"
                  />
                </div>
                <div class="carousel-item">
                  <h3 class="text-center my-4">Photo ID#{{Object.values(results.photos)[2].id}}</h3>
                  <img
                    class="d-block w-100"
                    :src="Object.values(results.photos)[2].img_src"
                    alt="Third slide"
                    style="height: 75vh;"
                  />
                </div>
                <div class="carousel-item">
                  <h3 class="text-center my-4">Photo ID#{{Object.values(results.photos)[3].id}}</h3>
                  <img
                    class="d-block w-100"
                    :src="Object.values(results.photos)[3].img_src"
                    alt="Third slide"
                    style="height: 75vh;"
                  />
                </div>
                <div class="carousel-item">
                  <h3 class="text-center my-4">Photo ID#{{Object.values(results.photos)[4].id}}</h3>
                  <img
                    class="d-block w-100"
                    :src="Object.values(results.photos)[4].img_src"
                    alt="Third slide"
                    style="height: 75vh;"
                  />
                </div>
                <div class="carousel-item">
                  <h3 class="text-center my-4">Photo ID#{{Object.values(results.photos)[5].id}}</h3>
                  <img
                    class="d-block w-100"
                    :src="Object.values(results.photos)[5].img_src"
                    alt="Third slide"
                    style="height: 75vh;"
                  />
                </div>
                <div class="carousel-item">
                  <h3 class="text-center my-4">Photo ID#{{Object.values(results.photos)[6].id}}</h3>
                  <img
                    class="d-block w-100"
                    :src="Object.values(results.photos)[6].img_src"
                    alt="Third slide"
                    style="height: 75vh;"
                  />
                </div>
                <div class="carousel-item">
                  <h3 class="text-center my-4">Photo ID#{{Object.values(results.photos)[7].id}}</h3>
                  <img
                    class="d-block w-100"
                    :src="Object.values(results.photos)[7].img_src"
                    alt="Third slide"
                    style="height: 75vh;"
                  />
                </div>
                <div class="carousel-item">
                  <h3 class="text-center my-4">Photo ID#{{Object.values(results.photos)[8].id}}</h3>
                  <img
                    class="d-block w-100"
                    :src="Object.values(results.photos)[8].img_src"
                    alt="Third slide"
                    style="height: 75vh;"
                  />
                </div>
                <div class="carousel-item">
                  <h3 class="text-center my-4">Photo ID#{{Object.values(results.photos)[9].id}}</h3>
                  <img
                    class="d-block w-100"
                    :src="Object.values(results.photos)[9].img_src"
                    alt="Third slide"
                    style="height: 75vh;"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
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
                >HD Link from NASA.gov</a>
              </strong>
            </div>
            <p
              class="my-2 text-primary"
            >This set of pictures was taken on Earth date: {{new Date(Object.values(results.photos)[0].earth_date).toDateString()}}, or Sol {{Object.values(results.photos)[0].sol}} on Mars. Captured with the {{Object.values(results.photos)[0].camera.full_name}} ({{Object.values(results.photos)[0].camera.name}}) aboard the {{Object.values(results.photos)[0].rover.name}} rover. {{Object.values(results.photos)[0].rover.name}} was launched from Earth on {{new Date(Object.values(results.photos)[0].rover.launch_date).toDateString()}} and has been on Mars since {{new Date(Object.values(results.photos)[0].rover.landing_date).toDateString()}} and remains {{Object.values(results.photos)[0].rover.status}} to this day. All images and mission data compliments of NASA.</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>


<script>
var oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
const lastYear = oneWeekAgo.getFullYear();
const lastMonth = oneWeekAgo.getMonth() + 1;
const lastDay = oneWeekAgo.getDate();

const secure = "";
const api_key = "PAdDVGUIS5Kjq97mf6JzKNKT7TohmSuSaLHAVImo";
window.axios = require("axios");

export default {
  name: "NASAcuriosity",
  data() {
    return {
      results: {}
    };
  },
  mounted() {
    var url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${lastYear}-${lastMonth}-${lastDay}&api_key=${api_key}`;
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
