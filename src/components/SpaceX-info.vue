<template>
  <div class="Info my-4">
    <div class="container-fluid text-center">
      <h1>{{company_name}}</h1>
      <div
        class="row my-4"
      >SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets. Based in Hawthorne, California, the company employs over 7000 who design, operate and relaunch 3 seperate vehicles.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpaceXinfo",
  data() {
    return {
      company_name: "SpaceX"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
