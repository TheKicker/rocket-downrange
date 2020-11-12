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
            src="https://images.unsplash.com/photo-1581293963396-4d8804f556c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            class="img-fluid mx-auto"
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
                <!-- Row 0 -->
                <tr>
                  <th scope="row">
                    {{ this.results.results[0].mission.name }}
                  </th>
                  <th>
                    {{ this.results.results[0].rocket.configuration.name }},
                    <br />
                    {{ this.results.results[0].launch_service_provider.name }}
                  </th>
                  <td>{{ utcTranslate(this.results.results[0].net) }}</td>
                  <td>
                    {{ this.results.results[0].pad.name }},
                    {{ this.results.results[0].pad.location.name }}
                  </td>
                  <td>
                    {{
                      charCount(
                        this.results.results[0].mission.description,
                        this.limit
                      )
                    }}
                  </td>
                </tr>
                <!-- Row 1 -->
                <tr>
                  <th scope="row">
                    {{ this.results.results[1].mission.name }}
                  </th>
                  <th>
                    {{ this.results.results[1].rocket.configuration.name }},
                    <br />
                    {{ this.results.results[1].launch_service_provider.name }}
                  </th>
                  <td>{{ utcTranslate(this.results.results[1].net) }}</td>
                  <td>
                    {{ this.results.results[1].pad.name }},
                    {{ this.results.results[1].pad.location.name }}
                  </td>
                  <td>
                    {{
                      charCount(
                        this.results.results[1].mission.description,
                        this.limit
                      )
                    }}
                  </td>
                </tr>
                <!-- Row 2 -->
                <tr>
                  <th scope="row">
                    {{ this.results.results[2].mission.name }}
                  </th>
                  <th>
                    {{ this.results.results[2].rocket.configuration.name }},
                    <br />
                    {{ this.results.results[2].launch_service_provider.name }}
                  </th>
                  <td>{{ utcTranslate(this.results.results[2].net) }}</td>
                  <td>
                    {{ this.results.results[2].pad.name }},
                    {{ this.results.results[2].pad.location.name }}
                  </td>
                  <td>
                    {{
                      charCount(
                        this.results.results[2].mission.description,
                        this.limit
                      )
                    }}
                  </td>
                </tr>
                <!-- Row 3 -->
                <tr>
                  <th scope="row">
                    {{ this.results.results[3].mission.name }}
                  </th>
                  <th>
                    {{ this.results.results[3].rocket.configuration.name }},
                    <br />
                    {{ this.results.results[3].launch_service_provider.name }}
                  </th>
                  <td>{{ utcTranslate(this.results.results[3].net) }}</td>
                  <td>
                    {{ this.results.results[3].pad.name }},
                    {{ this.results.results[3].pad.location.name }}
                  </td>
                  <td>
                    {{
                      charCount(
                        this.results.results[3].mission.description,
                        this.limit
                      )
                    }}
                  </td>
                </tr>
                <!-- Row 4 -->
                <tr>
                  <th scope="row">
                    {{ this.results.results[4].mission.name }}
                  </th>
                  <th>
                    {{ this.results.results[4].rocket.configuration.name }},
                    <br />
                    {{ this.results.results[4].launch_service_provider.name }}
                  </th>
                  <td>{{ utcTranslate(this.results.results[4].net) }}</td>
                  <td>
                    {{ this.results.results[4].pad.name }},
                    {{ this.results.results[4].pad.location.name }}
                  </td>
                  <td>
                    {{
                      charCount(
                        this.results.results[4].mission.description,
                        this.limit
                      )
                    }}
                  </td>
                </tr>
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
var url = "https://ll.thespacedevs.com/2.0.0/launch/upcoming/?limit=5";

window.axios = require("axios");
export default {
  name: "LLNextLaunch",
  data() {
    return {
      results: [],
      limit: 220,
    };
  },
  mounted() {
    window.axios
      .get(url)
      .then((response) => {
        this.results = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    utcTranslate(results) {
      var local = new Date(results).toLocaleString();
      return local;
    },
    charCount(results, limit) {
      if (results.length > limit) {
        return results.slice(0, limit) + "...";
      } else {
        return results;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
