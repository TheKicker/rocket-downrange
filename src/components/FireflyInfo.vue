<template>
  <div class="Info my-4">
    <div class="container-fluid text-center">
      <h1>{{ company_name }}</h1>
      <div class="row my-4">
        Firefly Aerospace is an American private aerospace firm based in Austin,
        Texas, that develops small and medium sized vehicles to launch payloads
        to low earth orbit. They were founded in January of 2014 and employ
        around 300 individuals between the United States and Ukraine. Their
        primary launch vehicle, Alpha, is capable of lifting one metric ton with
        more vehicles in research and development.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FireflyInfo",
  data() {
    return {
      company_name: "FireFly Aerospace"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
