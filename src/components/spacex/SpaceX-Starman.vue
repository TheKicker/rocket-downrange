<template>
  <div class="Roadster my-4 mx-4" v-if="starman">
    <div class="card container-fluid">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">SpaceX Special Event (2018):</h5>
        <hr />
        <h3 id="roadster-name" class="text-center my-4">
          {{ starman.name || "Starman" }} / Falcon Heavy Demo
        </h3>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li v-for="(img, index) in starman.flickr_images || []" :key="index" :data-slide-to="index" :class="{active: index === 0}"></li>
          </ol>

          <div class="carousel-inner">
            <div
              v-for="(img, index) in starman.flickr_images || []"
              :key="index"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <img
                :src="img"
                class="d-block w-100"
                :alt="'Starman Image #' + (index + 1)"
              />
            </div>
          </div>

          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div class="text-dark p-4" v-if="starman">
          <div class="text-left">
            <h5 class="card-title">Date: {{ starman.launch_date_utc ? new Date(starman.launch_date_utc).toDateString() : "N/A" }}</h5>
            <p>{{ starman.details || "No details available." }}</p>
          </div>
          <hr />
          <div class="text-left px-4">
            <div class="row my-2">
              <div class="col">Launch Mass: {{ starman.launch_mass_lbs?.toFixed(2) || "N/A" }} lbs</div>
              <div class="col text-capitalize">Orbit Type: {{ starman.orbit_type || "N/A" }}</div>
            </div>
            <div class="row my-2">
              <div class="col">Apoapsis: {{ starman.apoapsis_au?.toFixed(3) || "N/A" }} au</div>
              <div class="col">Periapsis: {{ starman.periapsis_au?.toFixed(3) || "N/A" }} au</div>
            </div>
            <div class="row my-2">
              <div class="col">Semi Major Axis: {{ starman.semi_major_axis_au?.toFixed(2) || "N/A" }}</div>
              <div class="col">Eccentricity: {{ starman.eccentricity?.toFixed(4) || "N/A" }}</div>
            </div>
            <div class="row my-2">
              <div class="col">Inclination: {{ starman.inclination?.toFixed(4) || "N/A" }}º</div>
              <div class="col">Longitude: {{ starman.longitude?.toFixed(2) || "N/A" }}</div>
            </div>
            <div class="row my-2">
              <div class="col">Speed: {{ starman.speed_mph?.toFixed(2) || "N/A" }} MPH</div>
              <div class="col">Orbital Period: {{ starman.period_days?.toFixed(2) || "N/A" }} days</div>
            </div>
            <div class="row my-2">
              <div class="col">Earth Distance: {{ starman.earth_distance_mi?.toLocaleString() || "N/A" }} miles</div>
              <div class="col">Mars Distance: {{ starman.mars_distance_mi?.toLocaleString() || "N/A" }} miles</div>
            </div>
            <div class="row my-4 text-center">
              <div class="col">
                <a href="https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster" target="_blank" rel="noopener" class="btn btn-dark">Wikipedia Entry</a>
              </div>
              <div class="col">
                <a href="https://grokipedia.com/page/Falcon_Heavy_test_flight#falcon-heavy-test-flight" target="_blank" rel="noopener" class="btn btn-dark">Grokipedia Entry</a>
              </div>
              <div class="col">
                <a href="https://youtu.be/wbSwFU6tY1c" target="_blank" rel="noopener" class="btn btn-dark">Broadcast Replay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center my-4">Loading Starman data...</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Starman",
  data() {
    return {
      results: null,
    };
  },
  computed: {
    starman() {
      return this.results;
    },
  },
  mounted() {
    axios.get("https://api.spacexdata.com/v4/roadster")
      .then(response => { this.results = response.data; })
      .catch(err => console.error(err));
  },
};
</script>

<style scoped>
</style>
