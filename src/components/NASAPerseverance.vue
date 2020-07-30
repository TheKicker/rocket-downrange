<template>
  <div class="APOD my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">NASA Launch:</h5>
        <hr />
        <h3 v-if="results.title === null" class="text-center my-4">Perseverance : Countdown to Mars</h3>
        <h3 v-else class="text-center my-4"><a href="https://www.youtube.com/watch?v=JIB3JbIIbPU" target="_blank">Watch Now</a></h3>
        <div class="row">
          <div class="mx-auto">
          </div>
        </div>
        <div class="row container mx-auto">
          <div class="my-4">
            <div class="mx-auto my-2">
              
          </div>
        </div>
        <hr />
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
