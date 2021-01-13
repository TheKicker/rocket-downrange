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
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tB9ZJfNZSys" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              On January 13th, 2021, the SpaceX team will make their second attempt at a suborbital flight of the Starship vehicle.  Success is not measured by the survival of the flight but by how much they can learn! 
            </p>
            <p>
              
            </p>
          </div>
          <div class="my-4 row justify-content-center">
            <a
              href="https://www.youtube.com/watch?v=tB9ZJfNZSys"
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
            <i>Last Update: Jan 13, 2021</i>
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
