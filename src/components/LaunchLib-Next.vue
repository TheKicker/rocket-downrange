<template>
  <div class="ULA-NextLaunch my-4">
    <div class="card container">
      <div class="card-body">
        <h5 class="text-left text-secondary">The Launch Library:</h5>
        <hr />
        <h3 class="text-center my-4">
          Upcoming Launches You Don't Want to Miss
        </h3>
        <div class="row text-center">
          <img
            src="https://rocketdownrange.com/ll-unsplash.jpeg"
            class="img-fluid mx-auto"
            alt="Upcoming space related launches by companies and organizations that you don't want to miss.  Provided by Rocket Downrange and The Space Devs, image provided by Unsplash. "
          />
        </div>
        <div class="row my-4">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Mission</th>
                  <th scope="col">Rocket</th>
                  <th scope="col">Date</th>
                  <th scope="col">Location</th>
                  <th scope="col">Mission Overview</th>
                </tr>
              </thead>
              <tbody>
                <tablerow
                  v-for="(launch, index) in launches"
                  :key="index"
                  :mission="launch.mission.name"
                  :rocket="launch.rocket.configuration.name"
                  :launchsp="launch.launch_service_provider.name"
                  :launchtime="launch.net"
                  :pad="launch.pad.name"
                  :location="launch.pad.location.name"
                  :description="launch.mission.description"
                  :url="launch.url"
                />
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <p class="text-center">
          <i>
            API Data brought to you by
            <a href="https://thespacedevs.com" target="_blank" rel="noopener"
              >The Space Devs</a
            >
          </i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import tablerow from "@/components/LaunchLib-tablerow.vue";

window.axios = require("axios");
export default {
  name: "LLNextLaunch",
  data() {
    return {
      launches: [],
    };
  },
  components: {
    tablerow,
  },
  mounted() {
    window.axios
      .get("https://ll.thespacedevs.com/2.0.0/launch/upcoming/?limit=5")
      .then((response) => {
        console.log(response.data.results);
        this.launches = response.data.results;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
