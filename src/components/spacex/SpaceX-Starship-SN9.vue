<template>
  <div class="SpaceX-Special my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">SpaceX Special Event (2021):</h5>
        <hr />
        <h3 class="text-center my-4">
          SN9 - Starship Test 
        </h3>
        <div class="row mx-1">
          <div class="embed-responsive embed-responsive-16by9 mx-auto">
              <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/wfHqbahPKpY" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              On Feb 2nd, 2021, we anticipate that the SpaceX team will be conducting a test launch of the Starship vehicle serial number 9.  Livestream hosted by <a href="https://www.youtube.com/channel/UCSUu1lih2RifWkKtDOJdsBA" target="_blank" rel="noopener">NASASpaceflight</a>.
            </p>
            <p>

            </p>
          </div>
          <div class="my-4 row justify-content-center">
            <a
              href="https://www.youtube.com/watch?v=wfHqbahPKpY"
              target="_blank"
              rel="noopener"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                NASASpaceflight YouTube
              </button>
            </a>
            <a
              href="https://www.spacex.com/vehicles/starship/"
              target="_blank"
              class="py-4 p-3"
              rel="noopener"
            >
              <button class="btn btn-block btn-outline-primary italic">
                Starship on SpaceX.com
              </button>
            </a>
          </div>
          <hr />
          <p class="text-center">
            <i>Last Update: Feb 2nd, 2021</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.log("SpaceX Starship - Active");

export default {
  name: "SPACEXstarshipSN9",
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
