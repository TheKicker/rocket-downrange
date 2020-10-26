<template>
  <div class="Info my-4">
    <div class="container-fluid text-center">
      <h1>{{ company_name }}</h1>
      <div class="row my-4">
        United Launch Alliance is an American spacecraft launch service provider
        that manufactures and operates a number of vehicles that are capable of
        sending vehicles to LEO and beyond. Formed in 2006, ULA is a joint
        venture between Lockheed Martin Space and Boeing Defense, Space and
        Security. Headquartered in Centennial, Colorado, United States.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ULAInfo",
  data() {
    return {
      company_name: "United Launch Alliance"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
