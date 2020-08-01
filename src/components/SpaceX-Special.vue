<template>
  <div class="Perseverance my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">SpaceX Special Event:</h5>
        <hr />
        <h3 class="text-center my-4">Dragon's Return : Hurley & Behnken return home</h3>
        <div class="row">
          <div class="mx-auto">
            <img
              src="https://www.thesun.ie/wp-content/uploads/sites/3/2020/05/nasa-spacex-launch-1-1.jpg?strip=all&quality=100&w=1200&h=800&crop=1"
              class="img-fluid"
              style="max-height: 75vh;"
            />
          </div>
        </div>
        <div class="row container mx-auto">
          <div class="my-4 row">
            <div class="p-4 row mx-auto">
              <a href="https://www.youtube.com/watch?v=sl2jo1bSxl8" target="_blank">
                <button class="btn btn-block btn-outline-primary italic">Watch Now</button>
              </a>
            </div>
            <!-- <div class="p-4 row mx-auto">
              <a
                href="https://www.nasa.gov/sites/default/files/atoms/files/mars_2020_launch_press_kit.pdf"
                target="_blank"
              >
                <button class="btn btn-block btn-outline-primary italic">Press Kit</button>
              </a>
            </div>-->
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.log("SpaceX - Special Active");
window.axios = require("axios");

export default {
  name: "SPACEXspecial",
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
