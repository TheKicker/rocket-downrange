<template>
  <div class="Perseverance my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">NASA Special Event:</h5>
        <hr />
        <h3 class="text-center my-4">Perseverance : Countdown to Mars</h3>
        <div class="row">
          <div class="mx-auto">
            <img
              src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/50164230653_d9cf74d82d_k_0.jpg"
              class="img-fluid"
              style="max-height: 75vh;"
            />
          </div>
        </div>
        <div class="row container mx-auto">
          <div class="my-4 row">
            <div class="p-4 row mx-auto">
              <a href="https://www.youtube.com/watch?v=JIB3JbIIbPU" target="_blank">
                <button class="btn btn-block btn-outline-primary italic">Watch Now</button>
              </a>
            </div>
            <div class="p-4 row mx-auto">
              <a
                href="https://www.nasa.gov/sites/default/files/atoms/files/mars_2020_launch_press_kit.pdf"
                target="_blank"
              >
                <button class="btn btn-block btn-outline-primary italic">Press Kit</button>
              </a>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.log("NASA Perseverance - active");
window.axios = require("axios");

export default {
  name: "NASAperseverance",
  data() {
    return {
      results: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
