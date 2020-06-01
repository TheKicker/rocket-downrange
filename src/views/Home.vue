<template>
  <div class="home">
    <Homepage />
    <NASAapod />
    <ExternalLinks />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "@/components/Homepage.vue";
import NASAapod from "@/components/NASA-APOD.vue";
import ExternalLinks from "@/components/ExternalLinks.vue";

export default {
  name: "Home",
  components: {
    Homepage,
    NASAapod,
    ExternalLinks
  }
};
</script>
