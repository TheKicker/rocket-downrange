<template>
  <div class="SpaceX-NextLaunch my-4">
    <div class="card">
      <div class="card-body">
        <h2 class="text-left">Latest Mission:</h2>
        <hr />
        <h1 class="text-center my-4">{{results.mission_name}}, Flight #{{results.flight_number}}</h1>
        <div class="row">
          <div class="col-md-4 col-sm-12 text-center">
            <img :src="results.links.mission_patch.original" class="mission-patch" />
          </div>
          <div class="col-md-8 col-sm-12 my-2">
            <h6 class="my-2">Launch Date: {{(new Date(results.launch_date_utc).toLocaleString())}}</h6>
            <h6 class="my-2">Launch Site: {{results.launch_site.name_long}}</h6>
            <hr />
            <p class="my-2">{{results.details}}</p>
          </div>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center">Customer: {{results.rocket.payloads[0].customer_name}}</h6>
          <h6 class="col-6 text-center">Launch Vehicle: {{results.rocket.name}}</h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center">Payloads: {{(results.rocket.payloads).length}}</h6>
          <h6 class="col-6 text-center">Orbit: {{results.rocket.payloads[0].orbit}}</h6>
        </div>

        <hr />
        <p class="text-center">
          <!-- <i>Last Update:</i> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
let url = "https://rocketlab-api.now.sh/v1/launches/latest";
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
