<template>
  <div class="SpaceX-Special my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">SpaceX Special Event (2020):</h5>
        <hr />
        <h3 class="text-center my-4">
          SN8 - Starship Test 
        </h3>
        <div class="row mx-1">
          <div class="embed-responsive embed-responsive-16by9 mx-auto">
              <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/ap-BkkrRg-o" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              On December 9th, 2020, the SpaceX team made the first attempt of a high-altitude suborbital flight test of Starship serial number 8 (SN8) from the launch site in Cameron County, Texas. This suborbital flight was designed to test a number of objectives, from how the vehicle’s three Raptor engines perform to the overall aerodynamic entry capabilities of the vehicle (including its body flaps) to how the vehicle manages propellant transition. SN8 also attempted a landing flip maneuver, which is a first for a vehicle of this size - unfortunately, the vehicle appears to have lost an engine and experienced rapid-unplanned-disassembly on touch down.  
            </p>
            <p>
              Skip to 1:47:06 in the above video if you would only like to see the launch.  It is important to note, with a test such as this, success is not measured by completion of specific objectives but rather how much SpaceX can learn.  Flight data (even crash data) will inform and improve the probability of success in the future as SpaceX rapidly advances development of Starship.  From Rocket Downrage, congratulations SpaceX Team! Truly history in the making!
            </p>
          </div>
          <div class="my-4 row justify-content-center">
            <a
              href="https://www.youtube.com/watch?v=ap-BkkrRg-o"
              target="_blank"
              rel="noopener"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                SpaceX Live Stream
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
            <i>Last Update: Dec 10, 2020</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.log("SpaceX Starship - Active");

export default {
  name: "SPACEXstarshipSN8",
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
