<template>
  <div class="Links">
    <div>
      <div class="text-center text-dark container">
        <!-- <h2>External Links</h2>
        <hr />-->
      </div>

      <div class="card-group my-4 width-limit mx-auto">
        <div>
          <div class="position-relative overflow-hidden text-center bg-primary text-white">
            <div class="col-md-6 p-lg-5 mx-auto my-5">
              <h2 class="font-weight-normal text-white">About Rocket Downrange</h2>
              <p
                class="lead font-weight-normal"
              >Breaking boundaries, setting standards and transforming humanity for the better. Space has always been the final frontier that keeps on giving. This site serves to be a side project that informs and inspires the next generation of explorers.</p>
              <a
                class="btn btn-outline-light my-4"
                href="https://github.com/TheKicker/rocket-downrange"
                target="_blank"
                rel="noopener"
              >{{code}}</a>
            </div>
          </div>
        </div>

        <div class="card m-1 my-4">
          <img src="../assets/nasaVAB.jpg" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-dark">NASA</h5>
            <hr />
            <p class="card-text"></p>
            <p class="card-text text-center">
              <a
                href="https://www.nasa.gov"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >Official Site</a>
            </p>
          </div>
        </div>

        <div class="card m-1 my-4">
          <img src="../assets/spacex.jpg" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title">SpaceX</h5>
            <hr />
            <p class="card-text"></p>
            <p class="card-text text-center">
              <a
                href="https://www.spacex.com/"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >Official Site</a>
            </p>
          </div>
        </div>

        <div class="card m-1 my-4">
          <img src="../assets/rocketLab.jpg" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Rocket Labs</h5>
            <hr />
            <p class="card-text"></p>
            <p class="card-text text-center">
              <a
                href="https://www.rocketlabusa.com/"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >Official Site</a>
            </p>
          </div>
        </div>
      </div>

      <div class="card-group m-4 width-limit mx-auto">
        <div class="card m-1">
          <img src="../assets/kerbal.jpg" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-dark">Kerbal Space Program</h5>
            <hr />
            <p class="card-text"></p>
            <p class="card-text text-center">
              <a
                href="https://www.kerbalspaceprogram.com/"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >Official Site</a>
            </p>
          </div>
        </div>

        <div class="card m-1">
          <img src="../assets/reddit.jpeg" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Reddit/r/spaceporn</h5>
            <hr />
            <p class="card-text"></p>
            <p class="card-text text-center">
              <a
                href="https://www.reddit.com/r/spaceporn/"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >Official Site</a>
            </p>
          </div>
        </div>

        <div class="card m-1">
          <img src="../assets/spacecom.png" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Space.com</h5>
            <hr />
            <p class="card-text"></p>
            <p class="card-text text-center">
              <a
                href="https://www.space.com/"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >Official Site</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExternalLinks",
  data() {
    return {
      Hello: "Hello World!",
      code: "See the Code"
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
