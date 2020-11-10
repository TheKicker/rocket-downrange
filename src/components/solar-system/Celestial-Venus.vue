<template>
  <div class="Venus">
    <!-- The Planet Venus -->
    <section id="venus" class="celestial">
      <div class="celestialImage">
        <img
          src="../../assets/venus.png"
          class="img-fluid"
          alt="CREDIT: SOLARSYSTEM.NASA.GOV -- This global view of the surface of Venus is centered at 180 degrees east longitude. Magellan synthetic aperture radar mosaics from the first cycle of Magellan mapping are mapped onto a computer-simulated globe to create this image."
        />
      </div>
      <div class="celestialText">
        <div class="col mx-4">
          <div class="mx-2">
            <h1 class="glitch">Venus</h1>
            <p>
              Second planet from the Sun and our closest planetary neighbor,
              Venus is similar in structure and size to Earth, but it is now a
              very different world. Venus spins slowly in the opposite direction
              most planets do. Its thick atmosphere traps heat in a runaway
              greenhouse effect, making it the hottest planet in our solar
              system—with surface temperatures hot enough to melt lead. Glimpses
              below the clouds reveal volcanoes and deformed mountains.
            </p>
            <hr />
            <div class="stats">
              <div class="col-sm">
                <i class="text-secondary">Classification:</i>
                <br />Terrestrial
              </div>
              <div class="col-sm">
                <i class="text-secondary">Location from Sun:</i>
                <br />67.24 million miles (0.70 au)
              </div>
              <div class="col-sm">
                <i class="text-secondary">Diameter:</i>
                <br />7,521 miles
              </div>
              <div class="col-sm">
                <i class="text-secondary">Surface Temp:</i>
                <br />867ºF (avg)
              </div>
              <div class="col-sm">
                <i class="text-secondary">Gravity:</i>
                <br />8.87 m/s²
              </div>
            </div>
          </div>
          <hr />
          <div class="row mx-2">
            <a
              class="btn btn-dark m-2 rounded"
              href="#mercury"
              v-scroll-to="'#mercury'"
            >
              Prior &nbsp;
              <i class="fas fa-arrow-circle-up"></i>
            </a>
            <a
              class="btn btn-dark m-2 rounded"
              href="#earth"
              v-scroll-to="'#earth'"
            >
              Next &nbsp;
              <i class="fas fa-arrow-circle-down"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
console.log("The planet Venus is spinning! ");

export default {
  name: "Venus",
  data() {
    return {
      results: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Abel|Space+Mono&display=swap");

.solarsystem {
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
}

h1,
h2 {
  font-family: "Space Mono", monospace;
  color: white;
  line-height: 1.5;
}

p {
  font-size: 1.1rem;
  width: 100%;
}

.page {
  height: 100vh;
  display: flex;
  display: grid;
  place-items: center;
}

.celestial {
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.celestialText {
  display: grid;
  place-items: center;
  color: whitesmoke;
  margin-left: 3rem;
}
.stats {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.celestialImage {
  display: grid;
  place-items: center;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {
  .celestial {
    display: flex;
    flex-direction: column;
    min-height: 1500px;
  }
  .stats {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  }
  .celestialText {
    display: grid;
    place-items: column;
    margin-left: 1.5rem;
  }
}

.glitch {
  animation: glitch 1.5s linear infinite;
}

@keyframes glitch {
  2%,
  64% {
    transform: translate(6px, 0) skew(20deg);
  }
  4%,
  60% {
    transform: translate(-9px, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

.glitch:before,
.glitch:after {
  content: attr(title);
  position: absolute;
  left: 0;
}

.glitch:before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {
  2%,
  64% {
    transform: translate(2px, -2px);
  }
  4%,
  60% {
    transform: translate(-2px, 2px);
  }
  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

.glitch:after {
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {
  2%,
  64% {
    transform: translate(-3px, 0);
  }
  4%,
  60% {
    transform: translate(-3px, 0);
  }
  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
}
</style>
