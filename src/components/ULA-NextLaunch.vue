<template>
  <div class="ULA-NextLaunch my-4">
    <div class="card">
      <div class="card-body">
        <h2 class="text-left">Next Mission:</h2>
        <hr />
        <h1 class="text-center my-4">
          {{ valueCheckText(this.results.results[0].mission.name) }}
        </h1>
        <div class="row mx-1">
          <div class="col-md-5 col-sm-12 text-center">
            <img
              src="https://rocketdownrange.com/ula.jpg"
              class="img-fluid"
              alt="ULA Upcoming Launch Mission"
            />
          </div>
          <div class="col-md-6 col-sm-12 my-2 mx-1">
            <h6 class="text-primary">
              <span class="text-secondary">Launch Date:</span><br />
              <span class="mx-4">
                {{
                  valueCheckText(
                    new Date(this.results.results[0].net).toLocaleString()
                  )
                }}
              </span>
            </h6>
            <h6 class="my-3">
              <span class="text-secondary undercase">Launch Site:</span><br />
              <span class="mx-4">
                {{ valueCheckText(this.results.results[0].pad.name) }},</span
              ><br />
              <span class="mx-4">
                {{ valueCheckText(this.results.results[0].pad.location.name) }}
              </span>
            </h6>
            <hr />
            <p class="my-2">
              {{ valueCheckText(this.results.results[0].mission.description) }}
            </p>
          </div>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center text-primary">
            <span class="text-secondary">Mission Type:</span>
            {{ valueCheckText(this.results.results[0].mission.type) }}
          </h6>
          <h6 class="col-6 text-center">
            <span class="text-secondary">Launch Vehicle:</span>
            {{
              valueCheckText(
                this.results.results[0].rocket.configuration.full_name
              )
            }}
          </h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center">
            <span class="text-secondary">Mission Status:</span>
            {{ valueCheckText(this.results.results[0].status.name) }}
            (probability of
            {{ valueCheckText(this.results.results[0].probability) }}%)
          </h6>
          <h6
            v-if="this.results.results[0].mission.orbit === null"
            class="col-6 text-center"
          >
            <span class="text-secondary">Target:</span> N/A
          </h6>
          <h6 v-else class="col-6 text-center">
            <span class="text-secondary">Target:</span>
            {{ valueCheckText(this.results.results[0].mission.orbit.name) }},({{
              valueCheckText(this.results.results[0].mission.orbit.abbrev)
            }})
          </h6>
        </div>

        <div class="row my-4"></div>
        <hr />
        <p class="text-center"></p>
      </div>
    </div>
  </div>
</template>

<script>
var url =
  "https://ll.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=1&rocket__configuration__manufacturer__name__icontains=United+Launch+Alliance";
window.axios = require("axios");
export default {
  name: "NextLaunch",
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
