<template>
  <div class="hello">
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div id="bg" class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-3 font-weight-normal">Rocket Downrange</h1>
        <p class="lead font-weight-normal">For the nerdy, adventurous and the curious</p>
        <!-- <a class="btn btn-outline-secondary" href="#">Coming soon</a> -->
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      Hello: "Hello World!"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
