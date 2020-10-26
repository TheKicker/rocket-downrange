<template>
  <div class="ULA-NextLaunch my-4">
    <div class="card container">
      <div class="card-body">
        <h5 class="text-left text-secondary">
          The Launch Library API:
        </h5>
        <hr />
        <h3 class="text-center my-4">
          Upcoming Launches You Don't Wanna Miss
        </h3>
        <div class="row text-center">
          <img
            src="https://rocketdownrange.com/rocketdownrange.jpg"
            class="img-fluid mx-auto"
          />
        </div>
        <div class="row my-4">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Mission</th>
                  <th scope="col">Launch Provider Vehicle & Country</th>
                  <th scope="col">Time (Target Date)</th>
                  <th scope="col">Pad Location</th>
                  <th scope="col">Customer Organization</th>
                </tr>
              </thead>
              <tbody>
                <!-- Row 0 -->
                <tr>
                  <th scope="row">
                    {{ this.results.launches[0].missions[0].name }}
                  </th>
                  <th>
                    {{ this.results.launches[0].rocket.name }} <br />
                    {{ this.results.launches[0].lsp.name }},
                    {{ this.results.launches[0].lsp.countryCode }}
                  </th>
                  <td>{{ utcTranslate(this.results.launches[0].net) }}</td>
                  <td>{{ this.results.launches[0].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[0].missions[0].description }}
                  </td>
                </tr>
                <!-- Row 1 -->
                <tr>
                  <th scope="row">
                    {{ this.results.launches[1].missions[0].name }}
                  </th>
                  <th>
                    {{ this.results.launches[1].rocket.name }} <br />
                    {{ this.results.launches[1].lsp.name }},
                    {{ this.results.launches[1].lsp.countryCode }}
                  </th>
                  <td>{{ utcTranslate(this.results.launches[1].net) }}</td>
                  <td>{{ this.results.launches[1].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[1].missions[0].description }}
                  </td>
                </tr>
                <!-- Row 2 -->
                <tr>
                  <th scope="row">
                    {{ this.results.launches[2].missions[0].name }}
                  </th>
                  <th>
                    {{ this.results.launches[2].rocket.name }} <br />
                    {{ this.results.launches[2].lsp.name }},
                    {{ this.results.launches[2].lsp.countryCode }}
                  </th>
                  <td>{{ utcTranslate(this.results.launches[2].net) }}</td>
                  <td>{{ this.results.launches[2].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[2].missions[0].description }}
                  </td>
                </tr>
                <!-- Row 3 -->
                <tr>
                  <th scope="row">
                    {{ this.results.launches[3].missions[0].name }}
                  </th>
                  <th>
                    {{ this.results.launches[3].rocket.name }} <br />
                    {{ this.results.launches[3].lsp.name }},
                    {{ this.results.launches[3].lsp.countryCode }}
                  </th>
                  <td>{{ utcTranslate(this.results.launches[3].net) }}</td>
                  <td>{{ this.results.launches[3].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[3].missions[0].description }}
                  </td>
                </tr>
                <!-- Row 4 -->
                <tr>
                  <th scope="row">
                    {{ this.results.launches[4].missions[0].name }}
                  </th>
                  <th>
                    {{ this.results.launches[4].rocket.name }} <br />
                    {{ this.results.launches[4].lsp.name }},
                    {{ this.results.launches[4].lsp.countryCode }}
                  </th>
                  <td>{{ utcTranslate(this.results.launches[4].net) }}</td>
                  <td>{{ this.results.launches[4].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[4].missions[0].description }}
                  </td>
                </tr>
                <!-- Row 5 -->
                <tr>
                  <th scope="row">
                    {{ this.results.launches[5].missions[0].name }}
                  </th>
                  <th>
                    {{ this.results.launches[5].rocket.name }} <br />
                    {{ this.results.launches[5].lsp.name }},
                    {{ this.results.launches[5].lsp.countryCode }}
                  </th>
                  <td>{{ utcTranslate(this.results.launches[5].net) }}</td>
                  <td>{{ this.results.launches[5].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[5].missions[0].description }}
                  </td>
                </tr>
                <!-- Row 6 -->
                <tr>
                  <th scope="row">
                    {{ this.results.launches[6].missions[0].name }}
                  </th>
                  <th>
                    {{ this.results.launches[6].rocket.name }} <br />
                    {{ this.results.launches[6].lsp.name }},
                    {{ this.results.launches[6].lsp.countryCode }}
                  </th>
                  <td>{{ utcTranslate(this.results.launches[6].net) }}</td>
                  <td>{{ this.results.launches[6].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[6].missions[0].description }}
                  </td>
                </tr>
                <!-- Row 7 -->
                <tr>
                  <th scope="row">
                    {{ this.results.launches[7].missions[0].name }}
                  </th>
                  <th>
                    {{ this.results.launches[7].rocket.name }} <br />
                    {{ this.results.launches[7].lsp.name }},
                    {{ this.results.launches[7].lsp.countryCode }}
                  </th>
                  <td>{{ utcTranslate(this.results.launches[7].net) }}</td>
                  <td>{{ this.results.launches[7].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[7].missions[0].description }}
                  </td>
                </tr>
                <!-- Row 8 -->
                <tr>
                  <th scope="row">
                    {{ this.results.launches[8].missions[0].name }}
                  </th>
                  <th>
                    {{ this.results.launches[8].rocket.name }} <br />
                    {{ this.results.launches[8].lsp.name }},
                    {{ this.results.launches[8].lsp.countryCode }}
                  </th>
                  <td>{{ utcTranslate(this.results.launches[8].net) }}</td>
                  <td>{{ this.results.launches[8].location.pads[0].name }}</td>
                  <td>
                    {{ this.results.launches[8].missions[0].description }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <p class="text-center">
          <i>
            Launch dates converted to your local timezone
          </i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var url = "https://launchlibrary.net/1.4/launch/next/10";

window.axios = require("axios");
export default {
  name: "LLNextLaunch",
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
