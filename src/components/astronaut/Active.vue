<template>
  <div class="ActiveAstronauts my-4">
    <div class="card">
      <div class="card-body">
        <h2 class="text-left">The Space Devs API:</h2>
        <hr />
        <h1 class="text-center my-4">
          Active Astronauts in Space
        </h1>
        <div class="row"></div>
        <hr />
        <p class="text-center">
          <i>Last Update: </i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var url =
  "https://ll.thespacedevs.com/2.0.0/astronaut/?agency__abbrev=&agency__name=&date_of_birth=&date_of_birth__gt=&date_of_birth__gte=&date_of_birth__lt=&date_of_birth__lte=&date_of_death=&date_of_death__gt=&date_of_death__gte=&date_of_death__lt=&date_of_death__lte=&format=json&name=&nationality=&status=4";
window.axios = require("axios");
export default {
  name: "Active",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  },
  methods: {
    valueCheckText: function(apiResults) {
      if (apiResults === null) {
        return (apiResults = " N/A ");
      } else {
        return apiResults;
      }
    },
    valueCheckImage: function(apiResults) {
      if (apiResults === null) {
        return (apiResults =
          "https://www.freeiconspng.com/uploads/no-image-icon-6.png");
      } else {
        return apiResults;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mission-patch {
  height: 18rem;
  margin: auto;
}
p {
  text-size-adjust: 1.1rem;
}
</style>
