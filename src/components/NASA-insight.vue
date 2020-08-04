<template>
  <div class="Insight my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">NASA's Insight Lander - Historical Weather Forecast:</h5>
        <hr />
        <h3
          class="text-center my-4"
        >Elysium Planitia, Mars - {{Object.values(this.results)[0].Season}} Season</h3>
        <div class="container">
          <iframe
            src="https://mars.nasa.gov/embed/24729/"
            width="100%"
            height="400"
            scrolling="no"
            frameborder="0"
          ></iframe>
          <p>
            NASA’s InSight Mars lander takes continuous weather measurements on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator. Summaries of this data are available at
            <a
              href="https://mars.nasa.gov/insight/weather/"
              target="_blank"
            >mars.nasa.gov/insight/weather</a>. You can find out more about InSight on the
            <a
              href="https://en.wikipedia.org/wiki/InSight"
              target="_blank"
              rel="noopener"
            >Wikipedia Entry</a> or watch it land on
            <a
              href="https://www.youtube.com/watch?v=C0lwFLPiZEE"
              target="_blank"
              rel="noopener"
            >Youtube</a>.
          </p>
        </div>
        <table class="table table-hover table-responsive-md">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Mars Sol Day</th>
              <th scope="col">Corresponding Earth Date</th>
              <th scope="col">Atmospheric Temperature (Avg)</th>
              <th scope="col">Atmospheric Pressure (Avg)</th>
              <th scope="col">Horizontal Wind Speed (Avg)</th>
            </tr>
          </thead>
          <tbody>
            <!-- Section -->
            <tr>
              <th scope="row">
                <strong>{{Object.keys(this.results)[0]}}</strong>
              </th>
              <td>{{new Date(Object.values(this.results)[0].First_UTC).toDateString()}}</td>
              <td>{{(celToFah(Object.values(this.results)[0].AT.av)).toFixed(2)}} ºF / {{(Object.values(this.results)[0].AT.av).toFixed(2)}} ºC</td>
              <td>{{(Object.values(this.results)[0].PRE.av).toFixed(2)}} Pascals</td>
              <td>{{(Object.values(this.results)[0].HWS.av).toFixed(2)}} m/s {{Object.values(this.results)[0].WD.most_common.compass_point}}</td>
            </tr>
            <!-- Section -->
            <tr>
              <th scope="row">
                <strong>{{Object.keys(this.results)[1]}}</strong>
              </th>
              <td>{{new Date(Object.values(this.results)[1].First_UTC).toDateString()}}</td>
              <td>{{(celToFah(Object.values(this.results)[1].AT.av)).toFixed(2)}} ºF / {{(Object.values(this.results)[1].AT.av).toFixed(2)}} ºC</td>
              <td>{{(Object.values(this.results)[1].PRE.av).toFixed(2)}} Pascals</td>
              <td>{{(Object.values(this.results)[1].HWS.av).toFixed(2)}} m/s {{Object.values(this.results)[1].WD.most_common.compass_point}}</td>
            </tr>
            <!-- Section -->
            <tr>
              <th scope="row">
                <strong>{{Object.keys(this.results)[2]}}</strong>
              </th>
              <td>{{new Date(Object.values(this.results)[2].First_UTC).toDateString()}}</td>
              <td>{{(celToFah(Object.values(this.results)[2].AT.av)).toFixed(2)}} ºF / {{(Object.values(this.results)[2].AT.av).toFixed(2)}} ºC</td>
              <td>{{(Object.values(this.results)[2].PRE.av).toFixed(2)}} Pascals</td>
              <td>{{(Object.values(this.results)[2].HWS.av).toFixed(2)}} m/s {{Object.values(this.results)[2].WD.most_common.compass_point}}</td>
            </tr>
            <!-- Section -->
            <tr>
              <th scope="row">
                <strong>{{Object.keys(this.results)[3]}}</strong>
              </th>
              <td>{{new Date(Object.values(this.results)[3].First_UTC).toDateString()}}</td>
              <td>{{(celToFah(Object.values(this.results)[3].AT.av)).toFixed(2)}} ºF / {{(Object.values(this.results)[3].AT.av).toFixed(2)}} ºC</td>
              <td>{{(Object.values(this.results)[3].PRE.av).toFixed(2)}} Pascals</td>
              <td>{{(Object.values(this.results)[3].HWS.av).toFixed(2)}} m/s {{Object.values(this.results)[3].WD.most_common.compass_point}}</td>
            </tr>
            <!-- Section -->
            <tr>
              <th scope="row">
                <strong>{{Object.keys(this.results)[4]}}</strong>
              </th>
              <td>{{new Date(Object.values(this.results)[4].First_UTC).toDateString()}}</td>
              <td>{{(celToFah(Object.values(this.results)[4].AT.av)).toFixed(2)}} ºF / {{(Object.values(this.results)[4].AT.av).toFixed(2)}} ºC</td>
              <td>{{(Object.values(this.results)[4].PRE.av).toFixed(2)}} Pascals</td>
              <td>{{(Object.values(this.results)[4].HWS.av).toFixed(2)}} m/s {{Object.values(this.results)[4].WD.most_common.compass_point}}</td>
            </tr>
            <!-- Section -->
            <tr>
              <th scope="row">
                <strong>{{Object.keys(this.results)[5]}}</strong>
              </th>
              <td>{{new Date(Object.values(this.results)[5].First_UTC).toDateString()}}</td>
              <td>{{(celToFah(Object.values(this.results)[5].AT.av)).toFixed(2)}} ºF / {{(Object.values(this.results)[5].AT.av).toFixed(2)}} ºC</td>
              <td>{{(Object.values(this.results)[5].PRE.av).toFixed(2)}} Pascals</td>
              <td>{{(Object.values(this.results)[5].HWS.av).toFixed(2)}} m/s {{Object.values(this.results)[5].WD.most_common.compass_point}}</td>
            </tr>
            <!-- Section -->
            <!-- <tr>
              <th scope="row">
                <strong>{{Object.keys(this.results)[6]}}</strong>
              </th>
              <td>{{new Date(Object.values(this.results)[6].First_UTC).toDateString()}}</td>
              <td>{{(celToFah(Object.values(this.results)[6].AT.av)).toFixed(2)}} ºF / {{(Object.values(this.results)[6].AT.av).toFixed(2)}} ºC</td>
              <td>{{(Object.values(this.results)[6].PRE.av).toFixed(2)}} Pascals</td>
              <td>{{(Object.values(this.results)[6].HWS.av).toFixed(2)}} m/s {{Object.values(this.results)[6].WD.most_common.compass_point}}</td>
            </tr>-->
          </tbody>
        </table>

        <hr />
        <p>As more data from a particular martian day is downlinked from the spacecraft (sometimes several days later), these values are recalculated, and consequently may change as more data is received on Earth.</p>
      </div>
    </div>
  </div>
</template>


<script>
const api_key = "PAdDVGUIS5Kjq97mf6JzKNKT7TohmSuSaLHAVImo";
window.axios = require("axios");
export default {
  name: "NASAinsight",
  data() {
    return {
      results: ""
    };
  },
  mounted() {
    var url = `https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`;
    // var url = "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
    console.log("NASA Insight - " + url);
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  },
  methods: {
    celToFah: function(temperature) {
      return temperature * (9 / 5) + 32;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>