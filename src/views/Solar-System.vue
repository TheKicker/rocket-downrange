<template>
  <div class="SolarSystem">
    <div class="bg-black">
      <SolarSystem />
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import SolarSystem from "@/components/Solar-System.vue";

export default {
  name: "Main",
  components: {
    SolarSystem
  }
};
</script>

<style scoped>
.bg-black {
  background: black;
}
</style>
