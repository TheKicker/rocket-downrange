<template>
  <div class="solarsystem mx-auto">
    <!-- Intro -->
    <section id="welcome" class="page">
      <div class="text-center">
        <h1 class="glitch">Welcome to the Solar System.</h1>
        <div>
          <a class="btn btn-dark my-3" href="#solar" v-scroll-to="'#solar'">[ Launch ]</a>
        </div>
      </div>
    </section>

    <Solar />
    <Mercury />
    <Venus />
    <Earth />
    <Mars />
    <Ceres />
    <Jupiter />
    <Saturn />
    <Uranus />
    <Neptune />
    <Pluto />

    <!-- Outro -->
    <section id="outro" class="page">
      <div class="text-center">
        <h2 class="glitch">Data & Images from NASA</h2>
        <div class="row d-flex justify-content-around">
          <a class="btn btn-dark m-2" href="#app" v-scroll-to="'#app'">[ Return to Top ]</a>
          <a class="btn btn-dark m-2" href="https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html" target="_blank" rel="noopener">[ Solar System at Scale ]</a>
          <a class="btn btn-dark m-2" href="https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/" target="_blank" rel="noopener">[ Learn More at NASA.GOV ]</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Solar from "@/components/solar-system/Celestial-Sun.vue";
import Mercury from "@/components/solar-system/Celestial-Mercury.vue";
import Venus from "@/components/solar-system/Celestial-Venus.vue";
import Earth from "@/components/solar-system/Celestial-Earth.vue";
import Mars from "@/components/solar-system/Celestial-Mars.vue";
import Ceres from "@/components/solar-system/Celestial-Ceres.vue";
import Jupiter from "@/components/solar-system/Celestial-Jupiter.vue";
import Saturn from "@/components/solar-system/Celestial-Saturn.vue";
import Uranus from "@/components/solar-system/Celestial-Uranus.vue";
import Neptune from "@/components/solar-system/Celestial-Neptune.vue";
import Pluto from "@/components/solar-system/Celestial-Pluto.vue";

export default {
  name: "SolarSystemTemplate",
  components: {
    Solar,
    Mercury,
    Venus,
    Earth,
    Mars,
    Ceres,
    Jupiter,
    Saturn,
    Uranus,
    Neptune,
    Pluto
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Abel|Space+Mono&display=swap");

html {
  scroll-behavior: smooth;
}

.solarsystem {
  max-width: 1400px;
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
  animation: glitchBottom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBottom {
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
