<template>
  <div class="Perseverance my-4 mx-lg-4 mx-md-0">
    <div class="card">
      <div class="card-body p-3 p-md-6 m-md-3">
        <p class="h5 text-uppercase text-left text-secondary">
          NASA & ULA Special Event (2020):
        </p>
        <hr />
        <h2 class="h3 text-uppercase text-center my-4">Perseverance : In Transit to Mars</h2>
        <div class="row">
          <div class="embed-responsive embed-responsive-16by9 mx-auto">
              <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/gm0b_ijaYMQ" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              NASA’s next mission to Mars — the Mars 2020 Perseverance rover
              mission — was launched from Cape Canaveral Air Force Station on
              July 30, 2020. Currently in transit, it will land in Jezero Crater
              on the Red Planet on Feb. 18, 2021. Perseverance is the most
              sophisticated rover NASA has ever sent to Mars, with a name that
              embodies NASA’s passion for taking on and overcoming challenges.
              It will search for signs of ancient microbial life, characterize
              the planet’s geology and climate, collect carefully selected and
              documented rock and sediment samples for possible return to Earth,
              and pave the way for human exploration beyond the Moon.
            </p>
          </div>
          <div class="row my-2 text-dark">
            <p class="col text-center">
              <strong>Launch Date (Earth): July 30, 2020</strong>
            </p>
            <p class="col text-center">
              <strong>Landing Date (Mars): February 18, 2021</strong>
            </p>
          </div>
          <div class="my-4 row justify-content-center">
            <a href="https://www.youtube.com/watch?v=JIB3JbIIbPU" target="_blank" class="py-4 p-3">
              <button class="btn btn-block btn-outline-primary italic">
                NASA Launch Webcast
              </button>
            </a>
            <a href="https://www.youtube.com/watch?v=gm0b_ijaYMQ" target="_blank" class="py-4 p-3">
              <button class="btn btn-block btn-outline-primary italic">
                NASA Landing Webcast
              </button>
            </a>
            <a href="https://www.nasa.gov/sites/default/files/atoms/files/mars_2020_launch_press_kit.pdf" target="_blank" class="py-4 p-3">
              <button class="btn btn-block btn-outline-primary italic">
                Perseverance Press Kit
              </button>
            </a>
          </div>
          <hr />
          <p class="text-center">
            <i>Last Update: Feb 17, 2020</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
