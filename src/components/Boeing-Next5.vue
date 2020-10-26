<template>
  <div class="Boeing-NextLaunch my-4">
    <div class="card container">
      <div class="card-body">
        <h5 class="text-left text-secondary">
          The Launch Library API:
        </h5>
        <hr />
        <h3 class="text-center my-4">
          5 Upcoming Boeing Aerospace Launches
        </h3>
        <div class="row text-center">
          <img
            src="https://rocketdownrange.com/Rocket-Lab-LSP.jpg"
            class="img-fluid mx-auto"
          />
        </div>
        <div class="row my-4">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Mission</th>
                  <th scope="col">Time (Target Date)</th>
                  <th scope="col">Pad Location</th>
                  <th scope="col">Customer Organization</th>
                </tr>
              </thead>
              <tbody>
                <!-- Row 0 -->
                <tr>
                  <th scope="row">{{ this.results.launches[0].name }}</th>
                  <td>{{ this.results.launches[0].net }}</td>
                  <td>{{ this.results.launches[0].location.pads[0].name }}</td>
                  <td>
                    {{
                      this.results.launches[0].location.pads[0].agencies[0]
                        .name
                    }},
                    {{
                      this.results.launches[0].location.pads[0].agencies[0]
                        .countryCode
                    }}
                  </td>
                </tr>
                <!-- Row 1 -->
                <tr>
                  <th scope="row">{{ this.results.launches[1].name }}</th>
                  <td>{{ this.results.launches[1].net }}</td>
                  <td>{{ this.results.launches[1].location.pads[0].name }}</td>
                  <td>
                    {{
                      this.results.launches[1].location.pads[0].agencies[0]
                        .name
                    }},
                    {{
                      this.results.launches[1].location.pads[0].agencies[0]
                        .countryCode
                    }}
                  </td>
                </tr>
                <!-- Row 2 -->
                <tr>
                  <th scope="row">{{ this.results.launches[2].name }}</th>
                  <td>{{ this.results.launches[2].net }}</td>
                  <td>{{ this.results.launches[2].location.pads[0].name }}</td>
                  <td>
                    {{
                      this.results.launches[2].location.pads[0].agencies[0]
                        .name
                    }},
                    {{
                      this.results.launches[2].location.pads[0].agencies[0]
                        .countryCode
                    }}
                  </td>
                </tr>
                <!-- Row 3 -->
                <tr>
                  <th scope="row">{{ this.results.launches[3].name }}</th>
                  <td>{{ this.results.launches[3].net }}</td>
                  <td>{{ this.results.launches[3].location.pads[0].name }}</td>
                  <td>
                    {{
                      this.results.launches[3].location.pads[0].agencies[0]
                        .name
                    }},
                    {{
                      this.results.launches[3].location.pads[0].agencies[0]
                        .countryCode
                    }}
                  </td>
                </tr>
                <!-- Row 4 -->
                <tr>
                  <th scope="row">{{ this.results.launches[4].name }}</th>
                  <td>{{ this.results.launches[4].net }}</td>
                  <td>{{ this.results.launches[4].location.pads[0].name }}</td>
                  <td>
                    {{
                      this.results.launches[4].location.pads[0].agencies[0]
                        .name
                    }},
                    {{
                      this.results.launches[4].location.pads[0].agencies[0]
                        .countryCode
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <p class="text-center">
          <i> Current time in UTC Format: {{ utcTime() }} </i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var url = "https://launchlibrary.net/1.4/launch/next/1?lsp=ULA";

window.axios = require("axios");
export default {
  name: "BA5",
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
    utcTime() {
      var date = new Date().getUTCDate();
      var month = new Date().getUTCMonth() + 1;
      var year = new Date().getUTCFullYear();
      var hours = new Date().getUTCHours();
      var minutes = new Date().getUTCMinutes();
      var seconds = new Date().getUTCSeconds();
      return `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}  ${
        month < 10 ? "0" + month : month
      }/${date < 20 ? "0" + date : date}/${year}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
