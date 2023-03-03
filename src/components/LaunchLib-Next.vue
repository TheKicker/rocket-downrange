<template>
  <div class="LaunchLibNext card my-4">
        <p class="card-header h5 text-uppercase text-left text-secondary">The Launch Library:</p>
        <h2 class="h3 text-uppercase mx-auto text-center mt-4">
          Upcoming Launches You Don't Want to Miss
        </h2>
        <!-- Start Desktop -->
        <div class="row my-2 card-body" id="desktop">
          <tablerowD
            v-for="(launch, index) in launches"
            :key="index"
            :mission="
              launch.mission && launch.mission.name != null
                ? launch.mission.name
                : launch.name
            "
            :image="launch.image != null || undefined ? launch.image : 'apple-icon.png'"
            :rocket="launch.rocket.configuration.name"
            :launchsp="launch.launch_service_provider.name"
            :launchtime="launch.net != null ? launch.net : 'N/A'"
            :pad="launch.pad.name != null ? launch.pad.name : 'N/A'"
            :location="
              launch.pad.location && launch.pad.location.name != null
                ? launch.pad.location.name
                : 'N/A'
            "
            :description="
              launch.mission && launch.mission.description != null
                ? launch.mission.description
                : 'This mission is classified or no overview is available at this time.'
            "
          />
        </div>
        <!-- End Desktop --> 
        
        <!-- Start Mobile -->
        <div class="row my-3 card-body" id="mobile">
          <tablerowM
            v-for="(launch, index) in launches"
            :key="index"
            :mission="
              launch.mission && launch.mission.name != null
                ? launch.mission.name
                : launch.name
            "
            :image="launch.image != null || undefined ? launch.image : 'apple-icon.png'"
            :rocket="launch.rocket.configuration.name"
            :launchsp="launch.launch_service_provider.name"
            :launchtime="launch.net != null ? launch.net : 'N/A'"
            :pad="launch.pad.name != null ? launch.pad.name : 'N/A'"
            :location="
              launch.pad.location && launch.pad.location.name != null
                ? launch.pad.location.name
                : 'N/A'
            "
            :description="
              launch.mission && launch.mission.description != null
                ? launch.mission.description
                : 'This mission is classified or no overview is available at this time.'
            "
          />
        </div>
        <!-- End Mobile --> 
        <p class="text-center">
          <i>
            API Data brought to you by
            <a href="https://thespacedevs.com" target="_blank" rel="noopener"
              >The Space Devs</a
            >
          </i>
        </p>
  </div>
</template>

<script>
import tablerowD from "@/components/LaunchLib-d-tablerow.vue";
import tablerowM from "@/components/LaunchLib-m-tablerow.vue";

window.axios = require("axios");
export default {
  name: "LLNextLaunch",
  data() {
    return {
      launches: [],
    };
  },
  components: {
    tablerowD,
    tablerowM
  },
  mounted() {
    window.axios
      .get(
        "https://ll.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=5"
      )
      .then((response) => {
        this.launches = response.data.results;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#desktop{
  display: initial;
}
#mobile{
  display: none;
}
@media only screen and (max-width: 780px) {
  #desktop{ display: none;}
  #mobile{ display: initial;}
}

</style>
