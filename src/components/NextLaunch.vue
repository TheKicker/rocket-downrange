<template>
  <div class="NextLaunch my-4 mx-4">
    <!-- Loading -->
    <div v-if="loading" class="text-center my-5 py-4">
      <p>Loading next {{ companyName }} mission...</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="alert alert-warning text-center my-4">
      <p>Unable to load launch information right now.<br>Please check back later.</p>
    </div>

    <!-- No launches -->
    <div v-else-if="!hasLaunch" class="card container text-center my-4 py-4">
      <h2 class="text-left">Next Mission:</h2>
      <hr />
      <p class="lead">No upcoming {{ companyName }} launches are currently scheduled.</p>
      <p class="text-muted">Check back soon for updates!</p>
    </div>

    <!-- Launch Card -->
    <div v-else class="card container">
      <div class="card-body">
        <h2 class="text-left">Next Mission:</h2>
        <hr />

        <h1 class="text-center my-4">
          {{ launch.mission?.name || "Mission name to be decided" }}
        </h1>

        <div class="row mx-1">
          <!-- Image -->
          <div class="col-md-5 col-sm-12 text-center">
            <img
              :src="launch.image || 'https://icon-library.com/images/placeholder-image-icon/placeholder-image-icon-21.jpg'"
              class="img-fluid"
              style="max-height: 45vh; border-radius: 8px;"
              :alt="launch.mission?.name ? `${companyName} next mission: ${launch.mission.name}` : 'No image available'"
            />
          </div>

          <!-- Details -->
          <div class="col-md-6 col-sm-12 my-2 mx-1">
            <h6 class="text-secondary">
              <span class="text-primary">Launch Date:</span><br />
              <span class="mx-4">
                {{ launch.net ? new Date(launch.net).toLocaleString() : "TBD" }}
              </span>
            </h6>

            <h6 class="text-secondary my-3">
              <span class="text-primary">Launch Site:</span><br />
              <span class="mx-4">{{ launch.pad?.name || "N/A" }}</span><br />
              <span class="mx-4">{{ launch.pad?.location?.name || "N/A" }}</span>
            </h6>

            <hr />

            <p class="text-primary my-2">
              {{ launch.mission?.description || "Mission details coming soon. Check back closer to launch!" }}
            </p>
          </div>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Mission Type:</span><br />
            {{ launch.mission?.type || "Classified / Unknown" }}
          </h6>
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Launch Vehicle:</span><br />
            {{ launch.rocket?.configuration?.full_name || "TBD" }}
          </h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Mission Status:</span><br />
            {{ launch.status?.name || "N/A" }}
            <span v-if="launch.probability != null"> (probability: {{ launch.probability }}%)</span>
          </h6>
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Target:</span><br />
            {{ launch.mission?.orbit?.name || "To be decided" }}
            ({{ launch.mission?.orbit?.abbrev || "TBD" }})
          </h6>
        </div>

        <div class="text-center mt-4">
          <a
            v-if="launch.url"
            :href="launch.url"
            target="_blank"
            rel="noopener"
            class="btn btn-outline-primary"
          >
            View Full Details
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NextLaunch",
  props: {
    // Company name (e.g. "Astrobotic", "Astra", "Rocket Lab", "SpaceX", etc.)
    company: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      launch: null,
      loading: true,
      error: false,
    };
  },
  computed: {
    companyName() {
      return this.company;
    },
    hasLaunch() {
      return this.launch !== null;
    },
  },
  async mounted() {
    const filter = encodeURIComponent(this.company);
    const url = `https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json&rocket__configuration__manufacturer__name__icontains=${filter}&limit=1`;
    
    try {
      const response = await axios.get(url);
      const results = response.data.results || [];
      this.launch = results.length > 0 ? results[0] : null;
    } catch (err) {
      console.error(`Failed to fetch next ${this.company} launch:`, err);
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
}
.img-fluid {
  object-fit: contain;
}
</style>