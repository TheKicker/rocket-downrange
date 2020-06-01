<template>
  <div class="SpaceX-NextLaunch my-4">
    <div class="card">
      <div class="card-body">
        <h2 class="text-left">Next Mission:</h2>
        <hr />
        <h1 class="text-center my-4">{{results.mission_name}}, Flight #{{results.flight_number}}</h1>
        <div class="row">
          <div class="col-md-4 col-sm-12 text-center">
            <img :src="results.links.mission_patch" class="mission-patch" />
          </div>
          <div class="col-md-8 col-sm-12 my-2">
            <h6 class="my-2 text-primary">
              <span class="text-secondary">Launch Date:</span>
              {{(new Date(results.launch_date_utc).toLocaleString())}}
            </h6>
            <h6 class="my-2">
              <span class="text-secondary">Launch Site:</span>
              {{results.launch_site.site_name_long}}
            </h6>
            <hr />
            <p class="my-2">{{results.details}}</p>
          </div>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center text-primary">
            <span class="text-secondary">Customer:</span>
            {{results.rocket.second_stage.payloads[0].customers[0]}} ({{results.rocket.second_stage.payloads[0].nationality}})
          </h6>
          <h6 class="col-6 text-center">
            <span class="text-secondary">Launch Vehicle:</span>
            {{results.rocket.rocket_name}}
          </h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center">
            <span class="text-secondary">Payload:</span>
            {{results.rocket.second_stage.payloads[0].payload_type}}
          </h6>
          <h6 class="col-6 text-center">
            <span class="text-secondary">Orbit:</span>
            {{results.rocket.second_stage.payloads[0].orbit}}, {{results.rocket.second_stage.payloads[0].orbit_params.regime}}
          </h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center">
            <span class="text-secondary">Landing Intent:</span>
            {{results.rocket.first_stage.cores[0].landing_intent}} ({{results.rocket.first_stage.cores[0].landing_vehicle}})
          </h6>
          <h6 class="col-6 text-center">
            <span class="text-secondary">Launch Mass:</span>
            {{(results.rocket.second_stage.payloads[0].payload_mass_lbs).toFixed(2)}} lbs
          </h6>
        </div>
        <hr />
        <p class="text-center">
          <i>Last Update: {{(new Date(results.last_date_update).toLocaleString())}}</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
let url = "https://api.spacexdata.com/v3/launches/next";
window.axios = require("axios");

export default {
  name: "NextLaunch",
  props: {
    msg: String
  },
  data() {
    return {
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
.mission-patch {
  height: 18rem;
  margin: auto;
}
p {
  text-size-adjust: 1.1rem;
}
</style>
