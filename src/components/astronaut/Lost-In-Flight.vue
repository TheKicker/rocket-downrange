<template>
  <div class="LostAstronauts my-4">
    <div class="card">
      <div class="card-body">
        <p class="h4 text-uppercase text-left">Heroes Lost In Flight</p>
        <hr />
        <h2 class="text-center my-4">In Memoriam</h2>
        <div class="row my-2">
          <astrocomponent
            v-for="(astro, index) in astros"
            :key="index"
            :profile_image="astro.profile_image"
            :name="astro.name"
            :abbrev="astro.agency.abbrev"
            :country_code="
              astro.agency.country_code.length > 6
                ? 'OTHER'
                : astro.agency.country_code
            "
            :bio="astro.bio"
          />
        </div>
        <hr />
        <p class="text-center">
          <!-- <i>Last Update: </i> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import astrocomponent from "@/components/astronaut/astro-profile.vue";
window.axios = require("axios");

export default {
  name: "Lost",
  data() {
    return {
      astros: [],
    };
  },
  components: {
    astrocomponent,
  },
  mounted() {
    window.axios
      .get("https://ll.thespacedevs.com/2.0.0/astronaut/?status=4&limit=21")
      .then((response) => {
        // console.log(response.data.results);
        this.astros = response.data.results;
      });
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
