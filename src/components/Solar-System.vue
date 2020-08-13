<template>
  <div class="solarsystem mx-auto">
    <!-- Intro -->
    <section id="welcome" class="page">
      <div class="text-center">
        <h1 class="glitch">Welcome to the Solar System.</h1>
        <div>
          <a class="btn btn-dark my-3" href="#solar">[ Launch ]</a>
        </div>
      </div>
    </section>

    <Sun />
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
        <h1 class="glitch">Data & Images from NASA</h1>
        <div class="row mx-auto">
          <a class="btn btn-dark m-2" href="#app">[ Return to Top ]</a>
          <a
            class="btn btn-dark m-2"
            href="https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/"
            target="_blank"
            rel="noopener"
          >[ Learn more at NASA.GOV ]</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Sun from "@/components/Celestial-Sun.vue";
import Mercury from "@/components/Celestial-Mercury.vue";
import Venus from "@/components/Celestial-Venus.vue";
import Earth from "@/components/Celestial-Earth.vue";
import Mars from "@/components/Celestial-Mars.vue";
import Ceres from "@/components/Celestial-Ceres.vue";
import Jupiter from "@/components/Celestial-Jupiter.vue";
import Saturn from "@/components/Celestial-Saturn.vue";
import Uranus from "@/components/Celestial-Uranus.vue";
import Neptune from "@/components/Celestial-Neptune.vue";
import Pluto from "@/components/Celestial-Pluto.vue";

export default {
  name: "SolarSystem",
  components: {
    Sun,
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
  },
  data() {
    return {
      Hello: "Hello World!"
    };
  },
  mounted() {
    console.log("Solar System spinning up");
  },
  metaInfo: {
    title: "Rocket Downrange | Explore the Solar System",
    meta: [
      { name: "author", content: "Github: @TheKicker" },
      {
        name: "description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Built with Vue.JS, Netlify and more! "
      },
      {
        name: "keywords",
        content:
          "Explore, Solar System, Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Kuiper Belt"
      },
      // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: "Rocket Downrange | Explore the Solar System"
      },
      { property: "og:site_name", content: "Rocket Downrange" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://www.rocketdownrange.com/solar-system"
      },
      {
        property: "og:image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Built with Vue.JS, Netlify and more! "
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://www.rocketdownrange.com/solar-system"
      },
      {
        name: "twitter:title",
        content: "Rocket Downrange | Explore the Solar System"
      },
      {
        name: "twitter:description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Built with Vue.JS, Netlify and more! "
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "Github: @TheKicker" },
      {
        name: "twitter:image:src",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg"
      },

      // Google / Schema.org markup:
      {
        itemprop: "name",
        content: "Rocket Downrange | Explore the Solar System"
      },
      {
        itemprop: "description",
        content:
          "Rocket Downrange is a fan-made site that utilizes different free API's to inform and inspire others of missions concerning the advancement of human space travel. Built with Vue.JS, Netlify and more!"
      },
      {
        itemprop: "image",
        content: "https://www.rocketdownrange.com/rocketdownrange.jpg"
      }
    ]
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
