<template>
  <div class="LostAstronauts my-4">
    <div class="card">
      <div class="card-body">
        <h4 class="text-left">Heroes Lost In Flight</h4>
        <hr />
        <h2 class="text-center my-4">In Memoriam</h2>
        <div class="row my-2">
          <!-- <astro
            image="https://image.shutterstock.com/image-vector/male-default-placeholder-avatar-profile-260nw-387516193.jpg"
            fullname="Buzz Aldrin"
            abbreviation="NASA"
            country="USA"
            description="John is a great astronaut"
            birth="today"
            death="yesterday"
          /> -->
          <astro
            :image="this.results.results[0].profile_image"
            :fullname="this.results.results[0].name"
            :abbreviation="this.results.results[0].agency.abbrev"
            :country="this.results.results[0].agency.country_code"
            :description="this.results.results[0].bio"
            :birth="this.results.results[0].date_of_birth"
            :death="this.results.results[0].date_of_death"
          />
          <astro
            :image="this.results.results[1].profile_image"
            :fullname="this.results.results[1].name"
            :abbreviation="this.results.results[1].agency.abbrev"
            :country="this.results.results[1].agency.country_code"
            :description="this.results.results[1].bio"
            :birth="this.results.results[1].date_of_birth"
            :death="this.results.results[1].date_of_death"
          />
          <astro
            :image="this.results.results[2].profile_image"
            :fullname="this.results.results[2].name"
            :abbreviation="this.results.results[2].agency.abbrev"
            :country="this.results.results[2].agency.country_code"
            :description="this.results.results[2].bio"
            :birth="this.results.results[2].date_of_birth"
            :death="this.results.results[2].date_of_death"
          />
          <astro
            :image="this.results.results[3].profile_image"
            :fullname="this.results.results[3].name"
            :abbreviation="this.results.results[3].agency.abbrev"
            :country="this.results.results[3].agency.country_code"
            :description="this.results.results[3].bio"
            :birth="this.results.results[3].date_of_birth"
            :death="this.results.results[3].date_of_death"
          />
          <astro
            :image="this.results.results[4].profile_image"
            :fullname="this.results.results[4].name"
            :abbreviation="this.results.results[4].agency.abbrev"
            :country="this.results.results[4].agency.country_code"
            :description="this.results.results[4].bio"
            :birth="this.results.results[4].date_of_birth"
            :death="this.results.results[4].date_of_death"
          />
          <astro
            :image="this.results.results[5].profile_image"
            :fullname="this.results.results[5].name"
            :abbreviation="this.results.results[5].agency.abbrev"
            :country="this.results.results[5].agency.country_code"
            :description="this.results.results[5].bio"
            :birth="this.results.results[5].date_of_birth"
            :death="this.results.results[5].date_of_death"
          />
          <astro
            :image="this.results.results[6].profile_image"
            :fullname="this.results.results[6].name"
            :abbreviation="this.results.results[6].agency.abbrev"
            :country="this.results.results[6].agency.country_code"
            :description="this.results.results[6].bio"
            :birth="this.results.results[6].date_of_birth"
            :death="this.results.results[6].date_of_death"
          />
          <astro
            :image="this.results.results[7].profile_image"
            :fullname="this.results.results[7].name"
            :abbreviation="this.results.results[7].agency.abbrev"
            :country="this.results.results[7].agency.country_code"
            :description="this.results.results[7].bio"
            :birth="this.results.results[7].date_of_birth"
            :death="this.results.results[7].date_of_death"
          />
          <astro
            :image="this.results.results[8].profile_image"
            :fullname="this.results.results[8].name"
            :abbreviation="this.results.results[8].agency.abbrev"
            :country="this.results.results[8].agency.country_code"
            :description="this.results.results[8].bio"
            :birth="this.results.results[8].date_of_birth"
            :death="this.results.results[8].date_of_death"
          />
          <astro
            :image="this.results.results[9].profile_image"
            :fullname="this.results.results[9].name"
            :abbreviation="this.results.results[9].agency.abbrev"
            :country="this.results.results[9].agency.country_code"
            :description="this.results.results[9].bio"
            :birth="this.results.results[9].date_of_birth"
            :death="this.results.results[9].date_of_death"
          />
          <astro
            :image="this.results.results[10].profile_image"
            :fullname="this.results.results[10].name"
            :abbreviation="this.results.results[10].agency.abbrev"
            :country="this.results.results[10].agency.country_code"
            :description="this.results.results[10].bio"
            :birth="this.results.results[10].date_of_birth"
            :death="this.results.results[10].date_of_death"
          />
          <astro
            :image="this.results.results[11].profile_image"
            :fullname="this.results.results[11].name"
            :abbreviation="this.results.results[11].agency.abbrev"
            :country="this.results.results[11].agency.country_code"
            :description="this.results.results[11].bio"
            :birth="this.results.results[11].date_of_birth"
            :death="this.results.results[11].date_of_death"
          />
          <astro
            :image="this.results.results[12].profile_image"
            :fullname="this.results.results[12].name"
            :abbreviation="this.results.results[12].agency.abbrev"
            :country="this.results.results[12].agency.country_code"
            :description="this.results.results[12].bio"
            :birth="this.results.results[12].date_of_birth"
            :death="this.results.results[12].date_of_death"
          />
          <astro
            :image="this.results.results[13].profile_image"
            :fullname="this.results.results[13].name"
            :abbreviation="this.results.results[13].agency.abbrev"
            :country="this.results.results[13].agency.country_code"
            :description="this.results.results[13].bio"
            :birth="this.results.results[13].date_of_birth"
            :death="this.results.results[13].date_of_death"
          />
          <astro
            :image="this.results.results[14].profile_image"
            :fullname="this.results.results[14].name"
            :abbreviation="this.results.results[14].agency.abbrev"
            :country="this.results.results[14].agency.country_code"
            :description="this.results.results[14].bio"
            :birth="this.results.results[14].date_of_birth"
            :death="this.results.results[14].date_of_death"
          />
          <astro
            :image="this.results.results[15].profile_image"
            :fullname="this.results.results[15].name"
            :abbreviation="this.results.results[15].agency.abbrev"
            :country="this.results.results[15].agency.country_code"
            :description="this.results.results[15].bio"
            :birth="this.results.results[15].date_of_birth"
            :death="this.results.results[15].date_of_death"
          />
          <astro
            :image="this.results.results[16].profile_image"
            :fullname="this.results.results[16].name"
            :abbreviation="this.results.results[16].agency.abbrev"
            :country="this.results.results[16].agency.country_code"
            :description="this.results.results[16].bio"
            :birth="this.results.results[16].date_of_birth"
            :death="this.results.results[16].date_of_death"
          />
          <astro
            :image="this.results.results[17].profile_image"
            :fullname="this.results.results[17].name"
            :abbreviation="this.results.results[17].agency.abbrev"
            :country="this.results.results[17].agency.country_code"
            :description="this.results.results[17].bio"
            :birth="this.results.results[17].date_of_birth"
            :death="this.results.results[17].date_of_death"
          />
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
import astro from "@/components/astronaut/astro-profile.vue";
var url =
  "https://ll.thespacedevs.com/2.0.0/astronaut/?agency__abbrev=&agency__name=&date_of_birth=&date_of_birth__gt=&date_of_birth__gte=&date_of_birth__lt=&date_of_birth__lte=&date_of_death=&date_of_death__gt=&date_of_death__gte=&date_of_death__lt=&date_of_death__lte=&format=json&name=&nationality=&status=4";
var url =
  "https://lldev.thespacedevs.com/2.0.0/astronaut/?format=json&limit=18&status=4";
window.axios = require("axios");
export default {
  name: "Lost",
  components: {
    astro,
  },
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    window.axios
      .get(url)
      .then((response) => {
        this.results = response.data;
      })
      .catch((error) => console.log(error));
  },
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