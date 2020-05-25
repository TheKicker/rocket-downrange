<template>
  <div class="Info my-4">
    <div class="container-fluid text-center">
      <h1>{{results.name}}</h1>
      <div
        class="row my-4"
      >{{results.summary}} Based in {{results.headquarters.city}}, {{results.headquarters.state}}, the company employs over {{results.employees}} who design, operate and relaunch {{results.vehicles}} seperate vehicles.</div>
    </div>
  </div>
</template>

<script>
let url = "https://api.spacexdata.com/v3/info";
window.axios = require("axios");

export default {
  name: "SpaceXinfo",
  data() {
    return {
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
