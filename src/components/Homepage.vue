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
    </div>

    <div>
      <div class="text-center text-dark">
        <h2>External Links</h2>
        <hr />
      </div>

      <div class="card-group m-4 width-limit mx-auto">
        <div class="card m-2">
          <img src="../assets/nasaVAB.jpg" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-dark">NASA</h5>
            <hr />
            <p
              class="card-text"
            >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text text-center">
              <a
                href="https://www.nasa.gov"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >NASA.gov</a>
            </p>
          </div>
        </div>

        <div class="card m-2">
          <img src="../assets/spacex.jpg" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title">SpaceX</h5>
            <hr />
            <p
              class="card-text"
            >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text text-center">
              <a
                href="https://www.spacex.com/"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >SpaceX.com</a>
            </p>
          </div>
        </div>

        <div class="card m-2">
          <img src="../assets/rocketLab.jpg" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Rocket Labs</h5>
            <hr />
            <p
              class="card-text"
            >This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text text-center">
              <a
                href="https://www.rocketlabusa.com/"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >RocketLabUSA.com</a>
            </p>
          </div>
        </div>
      </div>

      <div class="card-group m-4 width-limit mx-auto">
        <div class="card m-2">
          <img src="../assets/kerbal.jpg" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-dark">Kerbal Space Program</h5>
            <hr />
            <p
              class="card-text"
            >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text text-center">
              <a
                href="https://www.kerbalspaceprogram.com/"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >KerbalSpaceProgram.com</a>
            </p>
          </div>
        </div>

        <div class="card m-2">
          <img src="../assets/reddit.jpeg" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Reddit/r/spaceporn</h5>
            <hr />
            <p
              class="card-text"
            >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text text-center">
              <a
                href="https://www.reddit.com/r/spaceporn/"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >Reddit</a>
            </p>
          </div>
        </div>

        <div class="card m-2">
          <img src="../assets/spacecom.png" class="card-img-top marketingImage" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Space.com</h5>
            <hr />
            <p
              class="card-text"
            >This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text text-center">
              <a
                href="https://www.space.com/"
                class="btn btn-dark"
                target="_blank"
                rel="noopener"
              >Space.com</a>
            </p>
          </div>
        </div>
      </div>
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
