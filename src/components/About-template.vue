<template>
  <div>
    <div class="my-4 width-limit">
      <div class="position-relative overflow-hidden text-center bg-primary text-white">
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h2 class="font-weight-normal text-white">About Rocket Downrange</h2>
          <hr color="white" />
          <p
            class="lead font-weight-normal"
          >Breaking boundaries, setting standards and transforming humanity for the better. Space has always been the final frontier that keeps on giving. This site serves to be a side project that informs and inspires the next generation of explorers.</p>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      code: "See the Code"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.width-limit {
  max-width: 1632px;
  margin: auto;
}
</style>
