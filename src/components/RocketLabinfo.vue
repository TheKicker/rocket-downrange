<template>
  <div class="Info my-4">
    <div class="container-fluid text-center">
      <h1>{{ company_name }}</h1>
      <div class="row my-4">
        Rocket Lab designs, manufactures and launches advanced rockets and
        spacecraft. The company was founded in 2006 by an engineer named Peter
        Beck and established headquarters in California in 2013. Currently,
        their prime launch vehicle is named Electron capable of launching nearly
        500lbs to orbit.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RocketLabinfo",
  data() {
    return {
      company_name: "Rocket Lab"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
