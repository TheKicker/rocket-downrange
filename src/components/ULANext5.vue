<template>
  <div class="ULA-NextLaunch my-4">
    <div class="card container">
      <div class="card-body">
        <h5 class="text-left text-secondary">
          The Launch Library API:
        </h5>
        <hr />
        <h3 class="text-center my-4">
          Upcoming United Launch Alliance Launches
        </h3>
        <div class="row text-center">
          <img
            src="https://rocketdownrange.com/ULA.jpg"
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
                  <td>{{ utcTranslate(this.results.launches[0].net) }}</td>
                  <td>{{ this.results.launches[0].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[0].missions[0].description }}
                    {{ this.results.launches[0].missions[0].agencies[0].name }},
                    {{
                      this.results.launches[0].missions[0].agencies[0]
                        .countryCode
                    }}
                  </td>
                </tr>
                <!-- Row 1 -->
                <tr>
                  <th scope="row">{{ this.results.launches[1].name }}</th>
                  <td>{{ utcTranslate(this.results.launches[1].net) }}</td>
                  <td>{{ this.results.launches[1].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[1].missions[0].description }}
                    {{ this.results.launches[1].missions[0].agencies[0].name }},
                    {{
                      this.results.launches[1].missions[0].agencies[0]
                        .countryCode
                    }}
                  </td>
                </tr>
                <!-- Row 2 -->
                <tr>
                  <th scope="row">{{ this.results.launches[2].name }}</th>
                  <td>{{ utcTranslate(this.results.launches[2].net) }}</td>
                  <td>{{ this.results.launches[2].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[2].missions[0].description }}
                    {{ this.results.launches[2].missions[0].agencies[0].name }},
                    {{
                      this.results.launches[2].missions[0].agencies[0]
                        .countryCode
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <p class="text-center"></p>
      </div>
    </div>
  </div>
</template>

<script>
var url = "https://launchlibrary.net/1.4/launch/next/5?lsp=ULA";

window.axios = require("axios");
export default {
  name: "ULAN5",
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
    utcTranslate(results) {
      var local = new Date(results).toLocaleString();
      return local;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
