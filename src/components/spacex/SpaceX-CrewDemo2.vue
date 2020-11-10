<template>
  <div class="SpaceX-Special my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">SpaceX Special Event (2020):</h5>
        <hr />
        <h3 class="text-center my-4">
          NASA & SpaceX - Crew Dragon Demo-2 Mission
        </h3>
        <div class="row">
          <div class="mx-auto">
            <img
              src="../../assets/crew-demo-2.png"
              class="img-fluid"
              style="max-height: 65vh;"
              alt="SpaceX Special Event - the Crew Demo 2 Mission is a joint mission between SpaceX and NASA to get Bob Behnken and Douglas Hurley to the International Space Station. If this picture did not load - then an error occured, this media from NASA might be a Youtube video rather than picture. "
            />
          </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              A mission that was a longtime in the making, Crew Demo-2 was a
              manned test flight of the Crew Dragon spacecraft developed by
              SpaceX. The launch occured on May 30th of 2020, the astronauts
              spent 2 months in low earth orbit at the International Space
              Station and then returned to Earth on August 2nd of 2020. This
              event marks the first time since the final Space Shuttle mission
              (STS-135) in 2011 that American astronauts were launched on
              American rockets from American soil. The mission was manned by
              Commander Douglas Hurley and Joint-Operations Commander Robert
              Behnken and lasted 63 days - 9 hours and 8 minutes.
            </p>
          </div>
          <div class="my-4 row justify-content-center">
            <a
              href="https://www.youtube.com/watch?v=xY96v0OIcK4"
              target="_blank"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                Part 1 - Launch to ISS
              </button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=sl2jo1bSxl8"
              target="_blank"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                Part 2 - Returning Home
              </button>
            </a>
          </div>
          <hr />
          <p class="text-center">
            <i>Last Update: August 3, 2020</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.log("SpaceX Crew Dragon 2 - Active");

export default {
  name: "SPACEXcrewdemo2",
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
