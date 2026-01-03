<template>
  <div class="SpaceX-LatestLaunch my-4 mx-4" v-if="launch">
    <div class="card container">
      <div class="card-body">
        <h2 class="text-left">Latest Mission:</h2>
        <hr />
        <h1 class="text-center my-4">
          {{ launch.mission_name || "N/A" }}, Flight #{{ launch.flight_number || "N/A" }}
        </h1>

        <div class="row">
          <div class="col-md-4 col-sm-12 text-center">
            <img
              :src="launch.links?.patch?.large || 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'"
              class="mission-patch"
              :alt="launch.mission_name ? 'Latest mission patch for ' + launch.mission_name : 'No patch available'"
            />
          </div>

          <div class="col-md-8 col-sm-12 my-2">
            <h6 class="my-2 text-primary">
              <span class="text-secondary">Launch Date:</span>
              {{ launch.date_utc ? new Date(launch.date_utc).toLocaleString() : "N/A" }}
            </h6>

            <h6 class="my-2">
              <span class="text-secondary">Launch Site:</span>
              {{ launch.launch_site?.site_name_long || "N/A" }}
            </h6>

            <hr />
            <p class="my-2">{{ launch.details || "No details available." }}</p>
          </div>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center text-primary">
            <span class="text-secondary">Customer:</span>
            N/A
          </h6>
          <h6 class="col-6 text-center">
            <span class="text-secondary">Launch Vehicle:</span>
            {{ launch.rocket?.rocket_name || "N/A" }}
          </h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center">
            <span class="text-secondary">Payload:</span>
            {{ launch.rocket?.second_stage?.payloads?.[0]?.payload_type || "N/A" }}
          </h6>
          <h6 class="col-6 text-center">
            <span class="text-secondary">Orbit:</span>
            {{ launch.rocket?.second_stage?.payloads?.[0]?.orbit || "N/A" }},
            {{ launch.rocket?.second_stage?.payloads?.[0]?.orbit_params?.regime || "N/A" }}
          </h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center">
            <span class="text-secondary">Landing Intent:</span>
            {{ launch.rocket?.first_stage?.cores?.[0]?.landing_intent || "N/A" }}
            ({{ launch.rocket?.first_stage?.cores?.[0]?.landing_vehicle || "N/A" }})
          </h6>
          <h6 class="col-6 text-center">
            <span class="text-secondary">Launch Mass:</span>
            {{ launch.rocket?.second_stage?.payloads?.[0]?.payload_mass_lbs?.toFixed(2) || "N/A" }} lbs
          </h6>
        </div>

        <hr />
        <p class="text-center">
          <i>Last Update: {{ launch.last_date_update ? new Date(launch.last_date_update).toLocaleString() : "N/A" }}</i>
        </p>
      </div>
    </div>
  </div>

  <div v-else class="text-center my-4">Loading latest launch...</div>
</template>

<script>
import axios from "axios";

export default {
  name: "LatestLaunch",
  data() {
    return {
      results: null,
    };
  },
  computed: {
    launch() {
      return this.results || null;
    },
  },
  mounted() {
    axios
      .get("https://api.spacexdata.com/v3/launches/latest")
      .then((response) => {
        this.results = response.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
.mission-patch {
  height: 18rem;
  margin: auto;
}
p {
  text-size-adjust: 1.1rem;
}
</style>
