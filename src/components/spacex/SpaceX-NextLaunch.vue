<template>
  <div class="SpaceX-NextLaunch mx-4 my-4" v-if="launch">
    <div class="card container">
      <div class="card-body">
        <h2 class="text-left">Next Mission:</h2>
        <hr />
        <h1 class="text-center my-4">
          {{ launch.mission?.name || "Mission name to be decided" }}
        </h1>

        <div class="row mx-1">
          <div class="col-md-5 col-sm-12 text-center">
            <img
              :src="launch.image || 'https://icon-library.com/images/placeholder-image-icon/placeholder-image-icon-21.jpg'"
              class="img-fluid"
              style="max-height: 45vh;"
              :alt="launch.mission?.name ? 'SpaceX next mission: ' + launch.mission.name : 'No image available'"
            />
          </div>

          <div class="col-md-6 col-sm-12 my-2 mx-1">
            <h6 class="text-secondary">
              <span class="text-primary">Launch Date:</span><br />
              <span class="mx-4">{{ launch.net ? new Date(launch.net).toLocaleString() : "N/A" }}</span>
            </h6>

            <h6 class="text-secondary my-3">
              <span class="text-primary">Launch Site:</span><br />
              <span class="mx-4">{{ launch.pad?.name || "N/A" }}</span><br />
              <span class="mx-4">{{ launch.pad?.location?.name || "N/A" }}</span>
            </h6>

            <hr />
            <p class="text-primary my-2">
              {{ launch.mission?.description || "This mission might be classified or we do not have any data to show here yet. Check back for an update closer to launch time!" }}
            </p>
          </div>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Mission Type:</span> {{ launch.mission?.type || "Classified/Unknown" }}
          </h6>
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Launch Vehicle:</span> {{ launch.rocket?.configuration?.full_name || "TBD" }}
          </h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Mission Status:</span> {{ launch.status?.name || "N/A" }}
            (probability of {{ launch.probability != null ? launch.probability + '%' : '> 1%' }})
          </h6>
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Target:</span>
            {{ launch.mission?.orbit?.name || "To be decided" }} ({{ launch.mission?.orbit?.abbrev || "TBD" }})
          </h6>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center my-4">Loading next mission...</div>
</template>

<script>
import axios from "axios";

export default {
  name: "NextLaunch",
  data() {
    return {
      results: null,
    };
  },
  computed: {
    launch() {
      return this.results?.results?.[0] || null;
    },
  },
  mounted() {
    axios
      .get(
        "https://ll.thespacedevs.com/2.0.0/launch/upcoming/?format=json&rocket__configuration__manufacturer__name__icontains=SpaceX&limit=1"
      )
      .then((response) => {
        this.results = response.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>
