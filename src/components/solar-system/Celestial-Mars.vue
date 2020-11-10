<template>
  <div class="Mars">
    <!-- The Planet Mars -->
    <section id="mars" class="celestial">
      <div class="celestialImage">
        <img
          src="../../assets/mars.png"
          class="img-fluid"
          alt="CREDIT: SOLARSYSTEM.NASA.GOV -- This mosaic of Mars is a compilation of images captured by the Viking Orbiter 1. The center of the scene shows the entire Valles Marineris canyon system, more than 2,000 miles (3,000 kilometers) long, 370 miles (600 kilometers) wide and 5 miles (8 kilometers) deep."
        />
      </div>
      <div class="celestialText">
        <div class="col mx-4">
          <div class="mx-2">
            <h1 class="glitch">Mars</h1>
            <p>The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volcanoes, evidence it was once an even more active past. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.</p>
            <hr />
            <div class="stats">
              <div class="col-sm">
                <i class="text-secondary">Classification:</i>
                <br />Terrestrial
              </div>
              <div class="col-sm">
                <i class="text-secondary">Location from Sun:</i>
                <br />141.63 million miles (1.52 au)
              </div>
              <div class="col-sm">
                <i class="text-secondary">Diameter:</i>
                <br />4,222 miles
              </div>
              <div class="col-sm">
                <i class="text-secondary">Surface Temp:</i>
                <br />-85ºF (avg)
              </div>
              <div class="col-sm">
                <i class="text-secondary">Gravity:</i>
                <br />3.71 m/s²
              </div>
            </div>
          </div>
          <hr />
          <div class="row mx-2">
            <a class="btn btn-dark m-2 rounded" href="#earth" v-scroll-to="'#earth'">
              Prior &nbsp;
              <i class="fas fa-arrow-circle-up"></i>
            </a>
            <a class="btn btn-dark m-2 rounded" href="#ceres" v-scroll-to="'#ceres'">
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
console.log("The planet Mars is spinning! Our red sister is beautiful. ");

export default {
  name: "Mars",
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
