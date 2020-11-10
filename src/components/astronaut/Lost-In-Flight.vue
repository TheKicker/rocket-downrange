<template>
  <div class="LostAstronauts my-4">
    <div class="card">
      <div class="card-body">
        <h4 class="text-left">Heroes Lost In Flight</h4>
        <hr />
        <h2 class="text-center my-4">
          In Memoriam
        </h2>
        <ul class="row">
          <li class="col-sm-12 col-md-12 col-lg-4">
            <div class="cnt-block equal-hight" style="height: 10rem;">
              <figure>
                <img
                  :src="this.results[0].profile_image"
                  class="img-responsive"
                  :alt="this.results[0].name"
                />
              </figure>
              <h3>
                <a href="http://www.webcoderskull.com/">Web coder skull</a>
              </h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li>
                  <a href="#"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="row">
          {{ results }}
        </div>
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
  name: "Lost",
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
