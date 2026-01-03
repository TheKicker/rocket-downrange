<template>
  <div class="LaunchLibNext py-3my-4">
    <p class="card-header h5 text-uppercase text-left text-secondary">The Launch Library:</p>
    <h2 class="h3 text-uppercase mx-auto text-center mt-4">
      Upcoming Launches You Don't Want to Miss
    </h2>

    <!-- Launches Grid -->
    <div class="launches-grid card-body">
      <LaunchCard
        v-for="(launch, index) in launches"
        :key="index"
        :mission="launch.mission?.name || launch.name"
        :image="launch.image"
        :rocket="launch.rocket?.configuration?.name || 'N/A'"
        :launchsp="launch.launch_service_provider?.name || 'N/A'"
        :launchtime="launch.net || 'N/A'"
        :pad="launch.pad?.name || 'N/A'"
        :location="launch.pad?.location?.name || 'N/A'"
        :description="launch.mission?.description || 'This mission is classified or no overview is available at this time.'"
      />
    </div>

    <p class="text-center mt-3">
      <i>
        API Data brought to you by
        <a href="https://thespacedevs.com" target="_blank" rel="noopener">
          The Space Devs
        </a>
      </i>
    </p>
  </div>
</template>

<script>
import LaunchCard from "@/components/LaunchCard.vue";
window.axios = require("axios");

export default {
  name: "LLNextLaunch",
  components: { LaunchCard },
  data() {
    return { launches: [] };
  },
  mounted() {
    const fetchLaunches = () => {
      window.axios
        .get("https://lldev.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=6")
        .then(response => {
          this.launches = response.data.results || [];
        })
        .catch(error => {
          if (error.response?.status === 429) {
            setTimeout(fetchLaunches, 5000);
          } else {
            console.error("Failed to fetch launches:", error);
          }
        });
    };
    fetchLaunches();
  }
};
</script>

<style scoped>
.launches-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
}

.launches-grid > * {
  display: flex;
  flex-direction: column;
  height: 100%;
}

@media (max-width: 768px) {
  .launches-grid {
    grid-template-columns: repeat(auto-fit, minmax(95%, 1fr));
  }
}
</style>
