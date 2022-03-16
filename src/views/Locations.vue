<template>
  <div class="locations">
    <LaunchLocations x="25.985752215917778" y="-97.18223317068392" z="12.5" content="Boca Chica Starbase"/>
    <about />
    <Error404 hidden/>
  </div>
</template>


<script>
// @ is an alias to /src
import about from "@/components/About-template.vue";
import Error404 from "@/components/Error.vue";
import LaunchLocations from "@/components/LaunchLocations.vue";

export default {
  name: "Locations",
  components: {
    about,
    Error404,
    LaunchLocations
  }
};
</script>
