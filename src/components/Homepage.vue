<template>
  <div class="hello">
    <div class="jumbotron img-fluid viewport100h">
      <div class="container text-center viewportText">
        <div class="my-5">
          <h1 id="text-shadow-dark" class="display-5 text-white">Rocket Downrange</h1>
          <hr class="my-4" />
          <p
            id="text-shadow-dark"
            class="lead text-white"
          >From a space nerd, for the space nerds. Ad Astra, Godspeed.</p>
          <!-- <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> -->
          <!-- <a class="btn btn-primary btn-md" href="#" role="button">Learn more</a> -->
        </div>
      </div>
    </div>
    <div class="container text-dark"></div>
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
#text-shadow-dark {
  text-shadow: 1px 1px 1px black;
}
.marketingImage {
  height: 15rem;
}
.jumbotron {
  background: url("../assets/adobe-stock-1.jpg") center center/cover;
  background-attachment: fixed;
  max-width: 100%;
  height: auto;
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
