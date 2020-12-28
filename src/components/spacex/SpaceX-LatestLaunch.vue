<template>
  <div class="SpaceX-LatestLaunch my-4 mx-4">
    <div class="card container">
      <div class="card-body">
        <h2 class="text-left">Latest Mission:</h2>
        <hr />
        <h1
          class="text-center my-4"
        >{{valueCheckText(this.results.name)}}, Flight #{{valueCheckText(this.results.flight_number)}}</h1>
        <div class="row">
          <div class="col-md-4 col-sm-12 text-center">
            <img
              v-if="this.results.links.patch == null || undefined"
              src="https://www.freeiconspng.com/uploads/no-image-icon-6.png"
              class="mission-patch"
              alt="SpaceX Latest Launch Mission Patch"
            />
            <img v-else :src="this.results.links.patch.large" class="mission-patch" />
          </div>
          <div class="col-md-8 col-sm-12 my-2">
            <h6 class="my-2 text-primary">
              <span class="text-secondary">Launch Date:</span>
              {{valueCheckText(new Date(this.results.date_utc).toLocaleString())}}
            </h6>
            <h6 class="my-2">
              <span class="text-secondary">Launch Site:</span>
              TBD
            </h6>
            <hr />
            <p class="my-2">{{valueCheckText(this.results.details)}}</p>
          </div>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center text-primary">
            <span class="text-secondary">Customer:</span>
            TBD
          </h6>
          <h6 class="col-6 text-center">
            <span class="text-secondary">Launch Vehicle:</span>
            {{valueCheckText(this.results.rocket.rocket_name)}}
          </h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center">
            <span class="text-secondary">Payload:</span>
            {{valueCheckText(this.results.rocket.second_stage.payloads[0].payload_type)}}
          </h6>
          <h6 class="col-6 text-center">
            <span class="text-secondary">Orbit:</span>
            {{valueCheckText(this.results.rocket.second_stage.payloads[0].orbit)}}, {{valueCheckText(this.results.rocket.second_stage.payloads[0].orbit_params.regime)}}
          </h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center">
            <span class="text-secondary">Landing Intent:</span>
            {{valueCheckText(this.results.rocket.first_stage.cores[0].landing_intent)}} ({{valueCheckText(this.results.rocket.first_stage.cores[0].landing_vehicle)}})
          </h6>
          <h6
            v-if="this.results.rocket.second_stage.payloads[0].payload_mass_lbs === null"
            class="col-6 text-center"
          >
            <span class="text-secondary">Launch Mass:</span>
            N/A
          </h6>
          <h6 v-else class="col-6 text-center">
            <span class="text-secondary">Launch Mass:</span>
            {{valueCheckText((this.results.rocket.second_stage.payloads[0].payload_mass_lbs).toFixed(2))}} lbs
          </h6>
        </div>
        <hr />
        <p class="text-center">
          <i>Last Update: {{valueCheckText(new Date(this.results.last_date_update).toLocaleString())}}</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var url = "https://api.spacexdata.com/v3/launches/latest";
window.axios = require("axios");
export default {
  name: "LatestLaunch",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  },
  methods: {
    valueCheckText: function(apiResults) {
      if (apiResults === null) {
        return (apiResults = " N/A ");
      } else {
        return apiResults;
      }
    },
    valueCheckImage: function(apiResults) {
      if (apiResults === null) {
        return (apiResults =
          "https://www.freeiconspng.com/uploads/no-image-icon-6.png");
      } else {
        return apiResults;
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
