<template>
  <div class="Info my-4">
    <div class="container-fluid text-center">
      <h1>{{ company_name }}</h1>
      <div class="row my-4">
        Boeing Aerospace is an American multinational corporation that designs,
        manufactures, and sells airplanes, rockets, satellites, telecomm
        equipment, missles and more. Boeing is among the largest global
        manufacturer and the second largest defense contractor. The company was
        founded in 1916 as Pacific Aero Products Co and is headquartered in
        Chicago, Illinois, US.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoeingInfo",
  data() {
    return {
      company_name: "Boeing Aerospace"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
