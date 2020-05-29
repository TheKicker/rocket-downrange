<template>
  <div class="home">
    <Homepage />
    <ExternalLinks />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "@/components/Homepage.vue";
import ExternalLinks from "@/components/ExternalLinks.vue";

export default {
  name: "Home",
  components: {
    Homepage,
    ExternalLinks
  }
};
</script>
