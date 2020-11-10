<template>
  <div class="Pluto">
    <!-- The Planet Pluto -->
    <section id="pluto" class="celestial">
      <div class="celestialImage">
        <img
          src="../../assets/pluto.png"
          class="img-fluid"
          alt="CREDIT: SOLARSYSTEM.NASA.GOV -- NASA’s New Horizons spacecraft captured this high-resolution enhanced color view of Pluto on July 14, 2015. The image combines blue, red and infrared images taken by the Ralph/Multispectral Visual Imaging Camera (MVIC)."
        />
      </div>
      <div class="celestialText">
        <div class="col mx-4">
          <div class="mx-2">
            <h1 class="glitch">Pluto</h1>
            <p>Although stripped of it's planet-status, the dwarf Pluto is one of Rocket Downrange's VIPs of the Solar System. With an atmosphere that is thin and composed mostly of nitrogen, methane and carbon monoxide - the average temperature is -380ºF making it too cold to sustain life, but it does have a heart-shaped glacier slightly bigger than Texas. This fascinating world has blue skies, spinning moons, mountains as high as the Rockies, and it snows! Pluto and its largest moon, Charon, are so similar in size that they orbit each other like a double planet system.</p>
            <hr />
            <div class="stats">
              <div class="col-sm">
                <i class="text-secondary">Classification:</i>
                <br />Dwarf Planet
              </div>
              <div class="col-sm">
                <i class="text-secondary">Location from Sun:</i>
                <br />3.67 billion miles (39.5 au)
              </div>
              <div class="col-sm">
                <i class="text-secondary">Diameter:</i>
                <br />1,472 miles
              </div>
              <div class="col-sm">
                <i class="text-secondary">Surface Temp:</i>
                <br />-380ºF (avg)
              </div>
              <div class="col-sm">
                <i class="text-secondary">Gravity:</i>
                <br />0.66 m/s²
              </div>
            </div>
          </div>
          <hr />
          <div class="row mx-2">
            <a class="btn btn-dark m-2 rounded" href="#neptune" v-scroll-to="'#neptune'">
              Prior &nbsp;
              <i class="fas fa-arrow-circle-up"></i>
            </a>
            <a class="btn btn-dark m-2 rounded" href="#outro" v-scroll-to="'#outro'">
              References &nbsp;
              <i class="fas fa-arrow-circle-down"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
console.log("The dwarf planet Pluto is spinning! ");

export default {
  name: "Pluto",
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
