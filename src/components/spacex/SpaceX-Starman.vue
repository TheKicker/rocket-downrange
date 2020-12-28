<template>
  <div class="Roadster my-4 mx-4">
    <div class="card container-fluid">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">SpaceX Special Event (2018):</h5>
        <hr />
        <h3 id="roadster-name" class="text-center my-4">{{results.name}} / Falcon Heavy Demo</h3>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                :src="results.flickr_images[0]"
                class="d-block w-100"
                alt="SpaceX's Starman inside his cherry red Tesla Roadster - in front of a gorgeous shot of the Earth."
              />
            </div>
            <div class="carousel-item">
              <img
                :src="results.flickr_images[1]"
                class="d-block w-100"
                alt="SpaceX's Starman inside his cherry red Tesla Roadster - Perspective from just behind Starman looking towards the Earth featuring a Dont Panic hud on the car."
              />
            </div>
            <div class="carousel-item">
              <img
                :src="results.flickr_images[2]"
                class="d-block w-100"
                alt="SpaceX's Starman inside his cherry red Tesla Roadster - Perspective of the hood of the car looking back on Starman and Earth."
              />
            </div>
            <div class="carousel-item">
              <img
                :src="results.flickr_images[3]"
                class="d-block w-100"
                alt="SpaceX's Starman inside his cherry red Tesla Roadster - Perspective of the hood of the car looking back on Starman and Earth."
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
        <div class="text-dark p-4">
          <div class="text-left">
            <h5 class="card-title">Date: {{(new Date(results.launch_date_utc)).toDateString()}}</h5>
            <p>{{results.details}}</p>
          </div>
          <hr />
          <div class="text-left px-4">
            <div class="row my-2">
              <div class="col">
                Launch Mass:
                {{(results.launch_mass_lbs).toFixed(2)}} lbs
              </div>
              <div class="col text-capitalize">Orbit Type: {{results.orbit_type}}</div>
            </div>
            <div class="row my-2">
              <div class="col">Apoapsis: {{(results.apoapsis_au).toFixed(3)}} au</div>
              <div class="col">Periapsis: {{(results.periapsis_au).toFixed(3)}} au</div>
            </div>
            <div class="row my-2">
              <div class="col">Semi Major Axis: {{(results.semi_major_axis_au).toFixed(2)}}</div>
              <div class="col">Eccentricity: {{(results.eccentricity).toFixed(4)}}</div>
            </div>
            <div class="row my-2">
              <div class="col">Inclination: {{(results.inclination).toFixed(4)}}º</div>
              <div class="col">Longitude: {{(results.longitude).toFixed(2)}}</div>
            </div>
            <div class="row my-2">
              <div class="col">Speed: {{(results.speed_mph).toFixed(2)}} MPH</div>
              <div class="col">Orbital Period: {{(results.period_days).toFixed(2)}} days</div>
            </div>
            <div class="row my-2">
              <div
                class="col"
              >Earth Distance: {{(results.earth_distance_mi).toLocaleString()}} miles</div>
              <div class="col">Mars Distance: {{(results.mars_distance_mi).toLocaleString()}} miles</div>
            </div>
            <div class="row my-4 text-center">
              <div class="col">
                <a
                  href="https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-dark"
                >Wikipedia Entry</a>
              </div>
              <div class="col">
                <a
                  href="https://youtu.be/wbSwFU6tY1c"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-dark"
                >Broadcast Replay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var url = "https://api.spacexdata.com/v4/roadster";
window.axios = require("axios");

export default {
  name: "Starman",
  props: {
    msg: String
  },
  data() {
    return {
      newData: "Here is an example message. ",
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
