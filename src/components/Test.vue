<template>
  <div>
    <h2>{{results}}</h2>
  </div>
</template>

<script>
let url =
  "https://friendly-sammet-c73f41.netlify.app/.netlify/functions/products.json";
window.axios = require("axios");

export default {
  name: "Test",
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
