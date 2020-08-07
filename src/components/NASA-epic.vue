<template>
  <div class="Insight my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">NASA's "Daily Blue Marble" API:</h5>
        <hr />
        <h3 class="text-center my-4">Earth (Enhanced Image)</h3>
        <div class="container">
          <div class="text-center">
            <img src="../assets/mars.jpg" class="rounded img-fluid" />
          </div>
          <div class="row my-3">
            <p>{{this.results[0].caption}}</p>
            <p>The EPIC API provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.</p>
          </div>
          <div class="row my-3">
            <p>{{results}}</p>
            <p></p>
          </div>
        </div>

        <hr />
        <div class="text-center">
          <a
            href="https://epic.gsfc.nasa.gov/about/api"
            target="_blank"
            rel="noopener"
          >Link to NASA EPIC API</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
window.axios = require("axios");

export default {
  name: "NASAepic",
  data() {
    return {
      data: "NASA EPIC",
      results: {},
      results2: {}
    };
  },
  mounted() {
    let oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 9);
    const lastYear = oneWeekAgo.getFullYear();
    const lastMonth = addZero(oneWeekAgo.getMonth() + 1);
    const lastDay = oneWeekAgo.getDate() + 1;
    const baseURL = `https://epic.gsfc.nasa.gov/api/enhanced/date/${lastYear}-${lastMonth}-${lastDay}`;

    window.axios
      .get(baseURL)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));

    const fileName = this.results[0].image;
    const imageURL = fetchImageUrl(fileName);
    console.log(imageURL);

    function addZero(month) {
      if (month < 10) {
        return `0${month}`;
      } else {
        return month;
      }
    }
    function fetchImageUrl(location) {
      const imageFileName = location;
      return `https://epic.gsfc.nasa.gov/archive/enhanced/${lastYear}/${lastMonth}/${lastDay}/png/${imageFileName}.png`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>