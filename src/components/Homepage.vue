<template>
  <div class="hello">
    <div class="jumbotron viewport100h">
      <div class="container text-center viewportText">
        <h1 class="display-5">Rocket Downrange</h1>
        <hr class="my-4" />
        <p class="lead">From a space nerd, for the space nerds. Ad Astra, Godspeed.</p>
        <!-- <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> -->
        <!-- <a class="btn btn-primary btn-md" href="#" role="button">Learn more</a> -->
      </div>

      <div class="text-center text-dark">
        <h2>About</h2>
        <hr />
      </div>
      <div>Some html and other interesting stuff :)</div>
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
.marketingImage {
  height: 15rem;
}
.viewport100h {
  height: 100vh;
  width: 100%;
}
.viewportText {
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
}
.width-limit {
  max-width: 1632px;
  margin: auto;
}
</style>
