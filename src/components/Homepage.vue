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
          >From a space nerd, for the space nerds. Godspeed.</p>
          <!-- <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> -->
          <!-- <a class="btn btn-primary btn-md" href="#" role="button">Learn more</a> -->
        </div>
      </div>
    </div>
    <div class="container-fluid text-dark">
      <div
        class="position-relative overflow-hidden p-3 p-md-6 m-md-3 text-center bg-primary text-white"
      >
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h1 class="display-4 font-weight-normal text-white">About Us</h1>
          <p
            class="lead font-weight-normal"
          >Breaking boundaries, setting standards and transforming humanity for the better. Space has always been the final frontier that keeps on giving. This site serves to be a side project that informs and inspires the next generation of explorers.</p>
          <a
            class="btn btn-outline-light my-4"
            href="https://github.com/TheKicker/rocket-downrange"
            target="_blank"
            rel="noopener"
          >See the Code</a>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <!-- <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div
          class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
        >
          <div class="my-3 py-3">
            <h2 class="display-5">Another headline</h2>
            <p class="lead">And an even wittier subheading.</p>
          </div>
          <div
            class="bg-light shadow-sm mx-auto"
            style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
          ></div>
        </div>
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Another headline</h2>
            <p class="lead">And an even wittier subheading.</p>
          </div>
          <div
            class="bg-dark shadow-sm mx-auto"
            style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
          ></div>
        </div>
      </div>-->
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
