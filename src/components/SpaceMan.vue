<template>
  <div class="Roadster my-4">
    <div class="row">
      <div class="col-sm-12 mx-auto text-center bg-secondary mt-5 p-5 rounded">
        <h1 id="roadster-name">{{results.name}}</h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://farm5.staticflickr.com/4615/40143096241_11128929df_b.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://farm5.staticflickr.com/4702/40110298232_91b32d0cc0_b.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://farm5.staticflickr.com/4676/40110297852_5e794b3258_b.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://farm5.staticflickr.com/4745/40110304192_6e3e9a7a1b_b.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="container-fluid bg-light text-dark p-4">
          <div class="card-body text-left">
            <h5 class="card-title">Date: {{(new Date(results.launch_date_utc)).toDateString()}}</h5>
            <p>{{results.details}}</p>
          </div>
          <ul class="list-group list-group-horizontal">
            <li
              class="list-group-item flex-fill"
            >Launch Mass: {{(results.launch_mass_lbs).toFixed(2)}} lbs</li>
            <li class="list-group-item flex-fill">Orbit Type: {{results.orbit_type}}</li>
          </ul>

          <ul class="list-group list-group-horizontal">
            <li class="list-group-item flex-fill">Apoapsis: {{(results.apoapsis_au).toFixed(4)}} au</li>
            <li
              class="list-group-item flex-fill"
            >Periapsis: {{(results.periapsis_au).toFixed(4)}} au</li>
          </ul>

          <ul class="list-group list-group-horizontal">
            <li
              class="list-group-item flex-fill"
            >Semi Major Axis: {{(results.semi_major_axis_au).toFixed(4)}} au</li>
            <li
              class="list-group-item flex-fill"
            >Eccentricity: {{(results.eccentricity).toFixed(4)}}</li>
          </ul>

          <ul class="list-group list-group-horizontal">
            <li
              class="list-group-item flex-fill"
            >Inclination: {{(results.inclination).toFixed(4)}} deg</li>
            <li class="list-group-item flex-fill">Longitude: {{(results.longitude).toFixed(4)}}</li>
          </ul>

          <ul class="list-group list-group-horizontal">
            <li class="list-group-item flex-fill">Speed: {{(results.speed_mph).toFixed(2)}} MPH</li>
            <li
              class="list-group-item flex-fill"
            >Orbital Period: {{(results.period_days).toFixed(2)}} days</li>
          </ul>

          <ul class="list-group list-group-horizontal">
            <li
              class="list-group-item flex-fill"
            >Earth Distance: {{(results.earth_distance_mi).toLocaleString()}} miles</li>
            <li
              class="list-group-item flex-fill"
            >Mars Distance: {{(results.mars_distance_mi).toLocaleString()}} miles</li>
          </ul>

          <ul class="list-group list-group-horizontal">
            <li class="list-group-item flex-fill">
              <a href="https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster">
                <u>Wikipedia Entry</u>
              </a>
            </li>
            <li class="list-group-item flex-fill">
              <a href="https://youtu.be/wbSwFU6tY1c">
                <u>Broadcast Link</u>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let url = "https://api.spacexdata.com/v3/roadster";
window.axios = require("axios");

export default {
  name: "SpaceMan",
  props: {
    msg: String
  },
  data() {
    return {
      newData: "Here is an example message. ",
      results: []
    };
  },
  mounted() {
    window.axios.get(url).then(response => {
      this.results = response.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
