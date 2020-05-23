<template>
  <div class="Roadster">
    <div class="row">
      <div class="col-sm-12 mx-auto text-center bg-secondary mt-5 p-5 rounded">
        <h1 id="roadster-name">{{results.name}}</h1>
        <hr />
        <div class="container-fluid bg-light text-dark p-4">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-8 py-3 text-left">
                <div class="container text-dark">
                  <h4>Flight Data</h4>
                  <br />
                  <p>{{results.details}}</p>
                  <hr />

                  <div class="row my-2">
                    <div class="col">
                      <strong>Launch:</strong>
                      <div
                        id="roadster-launch"
                        class="mx-3"
                      >{{(new Date(results.launch_date_utc)).toDateString()}}</div>
                    </div>
                    <div class="col">
                      <strong>Payload Mass:</strong>
                      <div id="roadster-mass" class="mx-3">{{results.launch_mass_lbs}} lbs</div>
                    </div>
                  </div>

                  <div class="row my-4">
                    <div class="col">
                      <strong>Orbit:</strong>
                      <div id="roadster-orbit" class="mx-3">{{results.orbit_type}}</div>
                    </div>
                    <div class="col">
                      <strong>Speed:</strong>
                      <div id="roadster-speed" class="mx-3">{{(results.speed_mph).toFixed(2)}} MPH</div>
                    </div>
                  </div>

                  <div class="row my-4">
                    <div class="col">
                      <strong>Apoapsis:</strong>
                      <div
                        id="roadster-apoapsis"
                        class="mx-3"
                      >{{(results.apoapsis_au).toFixed(3)}} au</div>
                    </div>
                    <div class="col">
                      <strong>Periapsis:</strong>
                      <div
                        id="roadster-periapsis"
                        class="mx-3"
                      >{{(results.periapsis_au).toFixed(3)}} au</div>
                    </div>
                  </div>

                  <div class="row my-4">
                    <div class="col">
                      <strong>Inclination:</strong>
                      <div
                        id="roadster-inclination"
                        class="mx-3"
                      >{{(results.inclination).toFixed(3)}} deg</div>
                    </div>
                    <div class="col">
                      <strong>Semi-Major Axis:</strong>
                      <div
                        id="roadster-semi-major-axis"
                        class="mx-3"
                      >{{(results.semi_major_axis_au).toFixed(3)}} au</div>
                    </div>
                  </div>
                  <div class="row my-4">
                    <div class="col">
                      <strong>Orbital Period:</strong>
                      <div id="roadster-period" class="mx-3">{{(results.period_days)}} days</div>
                    </div>
                    <div class="col">
                      <strong>Eccentricity:</strong>
                      <div
                        id="roadster-eccentricity"
                        class="mx-3"
                      >{{(results.eccentricity).toFixed(2)}}</div>
                    </div>
                  </div>
                  <div class="row my-4">
                    <div class="col">
                      <strong>Mars Distance:</strong>
                      <div
                        id="roadster-mars"
                        class="mx-3"
                      >{{(results.mars_distance_mi).toLocaleString()}} miles</div>
                    </div>
                    <div class="col">
                      <strong>Earth Distance:</strong>
                      <div
                        id="roadster-earth"
                        class="mx-3"
                      >{{(results.earth_distance_mi).toLocaleString()}} miles</div>
                    </div>
                  </div>

                  <div class="row my-4">
                    <div class="col">
                      <div id="roadster-wiki"></div>
                    </div>
                    <div class="col">
                      <div id="roadster-youtube"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let url = "https://api.spacexdata.com/v3/roadster";
window.axios = require("axios");

export default {
  name: "SpaceMan",
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
