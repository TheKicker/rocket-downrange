<template>
  <div class="Insight my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">
          NASA's Insight Lander - Historical Weather Report:
        </h5>
        <hr />
        <h3 class="text-center my-4">What's the weather like on Mars?</h3>
        <div class="container">
          <div class="text-center">
            <a
              href="https://mars.nasa.gov/resources/24729/map-of-nasas-mars-landing-sites/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="../assets/mars-flat.jpg"
                class="rounded img-fluid"
                alt="Historical Forecast of Martian Weather as measured by NASA's Insight Lander, served directly from Mars! If this picture did not load - then an error occured, this media from NASA might be a Youtube video rather than picture. "
              />
            </a>
          </div>
          <div class="row my-3">
            <p>
              NASA’s InSight Mars lander takes continuous weather measurements
              on the surface of Mars at Elysium Planitia - a flat, smooth plain
              near Mars’ equator. Summaries of this data are available at
              <a href="https://mars.nasa.gov/insight/weather/" target="_blank"
                >mars.nasa.gov/insight/weather</a
              >. You can find out more about InSight on the
              <a
                href="https://en.wikipedia.org/wiki/InSight"
                target="_blank"
                rel="noopener"
                >Wikipedia Entry</a
              >
              or watch it land on
              <a
                href="https://www.youtube.com/watch?v=C0lwFLPiZEE"
                target="_blank"
                rel="noopener"
                >Youtube</a
              >.
            </p>
            <p>
              A Sol is the primary timekeeping unit of Mars - one sol is equal
              to 24 hours, 29 minutes and 35 seconds. It's defined as the
              apparent interval between two successive returns of the Sun to the
              same meridian as seen by an observer of Mars. This method of
              timekeeping for the Martian surface was devised by NASA in 1976
              for the Viking Lander Missions and continues to be the standard
              today.
            </p>
          </div>
        </div>
        <div class="table-responsive-lg">
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Corresponding Earth Date</th>
                <th scope="col"></th>
                <th scope="col">Atmospheric Temperature (Avg)</th>
                <th scope="col">Atmospheric Pressure (Avg)</th>
                <th scope="col">Horizontal Wind Speed (Avg)</th>
              </tr>
            </thead>
            <tbody>
              <tablerow
                :earthTime="
                  Object.values(this.results)[0].First_UTC != undefined
                    ? Object.values(this.results)[0].First_UTC
                    : 'N/A'
                "
                :fahrenheit="
                  Object.values(this.results)[0] &&
                  Object.values(this.results)[0].AT &&
                  Object.values(this.results)[0].AT.av != undefined
                    ? Object.values(this.results)[0].AT.av
                    : 'N/A'
                "
                :celsius="
                  Object.values(this.results)[0] &&
                  Object.values(this.results)[0].AT &&
                  Object.values(this.results)[0].AT.av != undefined
                    ? Object.values(this.results)[0].AT.av
                    : 'N/A'
                "
                :pressure="
                  Object.values(this.results)[0] &&
                  Object.values(this.results)[0].PRE &&
                  Object.values(this.results)[0].PRE.av != undefined
                    ? Object.values(this.results)[0].PRE.av
                    : 'N/A'
                "
                :windspeed="
                  Object.values(this.results)[0] &&
                  Object.values(this.results)[0].HWS &&
                  Object.values(this.results)[0].HWS.av != undefined
                    ? Object.values(this.results)[0].HWS.av
                    : 'N/A'
                "
                :compass="
                  Object.values(this.results)[0].WD.most_common.compass_point !=
                  undefined
                    ? Object.values(this.results)[0].WD.most_common
                        .compass_point
                    : 'N/A'
                "
              />
            </tbody>
          </table>
        </div>

        <hr />
        <p>
          As more data from a particular martian day is downlinked from the
          spacecraft (sometimes several days later), these values are
          recalculated, and consequently may change as more data is received on
          Earth.
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import tablerow from "@/components/NASA-insight-tablerow.vue";
window.axios = require("axios");
export default {
  name: "NASAinsight",
  data() {
    return {
      results: [],
    };
  },
  components: { tablerow },
  mounted() {
    window.axios
      .get(
        "https://api.nasa.gov/insight_weather/?api_key=PAdDVGUIS5Kjq97mf6JzKNKT7TohmSuSaLHAVImo&feedtype=json&ver=1.0"
      )
      .then((response) => {
        console.log(response.data);
        this.results = response.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>