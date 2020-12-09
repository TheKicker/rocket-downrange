<template>
  <div class="SpaceX-Special my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">SpaceX Special Event (2020):</h5>
        <hr />
        <h3 class="text-center my-4">
          SN8 - Starship Test
        </h3>
        <div class="row">
          <div class="embed-responsive embed-responsive-16by9 mx-auto">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/nf83yzzme2I" allowfullscreen></iframe>
          </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              On December 9th, 2020, the SpaceX team will make the first attempt of a high-altitude suborbital flight test of Starship serial number 8 (SN8) from the launch site in Cameron County, Texas. This suborbital flight is designed to test a number of objectives, from how the vehicle’s three Raptor engines perform to the overall aerodynamic entry capabilities of the vehicle (including its body flaps) to how the vehicle manages propellant transition. SN8 will also attempt to perform a landing flip maneuver, which would be a first for a vehicle of this size.
            </p>
            <p>With a test such as this, success is not measured by completion of specific objectives but rather how much we can learn, which will inform and improve the probability of success in the future as SpaceX rapidly advances development of Starship.</p>
          </div>
          <div class="my-4 row justify-content-center" hidden>
            <a
              href="https://www.youtube.com/watch?v=nf83yzzme2I"
              target="_blank"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                YouTube Live Stream
              </button>
            </a>
            <a
              href="https://www.spacex.com/vehicles/starship/"
              target="_blank"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                Starship on SpaceX.com
              </button>
            </a>
          </div>
          <hr />
          <p class="text-center">
            <i>Last Update: Dec 9, 2020</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.log("SpaceX Starship - Active");

export default {
  name: "SPACEXstarship",
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
