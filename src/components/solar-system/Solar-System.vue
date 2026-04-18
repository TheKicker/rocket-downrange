<template>
  <div class="solarsystem mx-auto dot-background">
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
  components: { Solar, Mercury, Venus, Earth, Mars, Ceres, Jupiter, Saturn, Uranus, Neptune, Pluto },

  data() {
    return {
      shootingStarInterval: null,
    };
  },

  mounted() {
    this.createTwinklingStars();
  },

  beforeDestroy() {
    // Clean up interval when component is destroyed
    if (this.shootingStarInterval) {
      clearInterval(this.shootingStarInterval);
    }
  },

  methods: {
    createTwinklingStars() {
      // FIX: this.$el IS the .solarsystem div — don't querySelector it
      const container = this.$el;
      if (!container) return;

      // --- Create layered star containers (depth) ---
      const starsNear = document.createElement('div');
      const starsFar = document.createElement('div');

      starsNear.className = 'stars stars-near';
      starsFar.className = 'stars stars-far';

      container.appendChild(starsFar);  // far behind
      container.appendChild(starsNear); // near in front

      const numStars = 260;

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // --- Position ---
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // --- Size (more natural distribution) ---
        const size = Math.random() * 2.5 + 0.5; // 0.5px – 3px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // --- Twinkle timing ---
        const duration = Math.random() * 4 + 1.5; // 1.5s – 5.5s
        star.style.animationDuration = `${duration}s`;

        const delay = Math.random() * -6; // desync animations
        star.style.animationDelay = `${delay}s`;

        // --- Brightness variation ---
        const brightness = Math.random();

        if (brightness > 0.85) {
          star.style.boxShadow = '0 0 8px #fff, 0 0 18px rgba(200,220,255,1)';
        } else if (brightness > 0.6) {
          star.style.boxShadow = '0 0 4px #fff, 0 0 8px rgba(200,220,255,0.8)';
        } else if (brightness > 0.3) {
          star.style.boxShadow = '0 0 2px #fff';
        } else {
          star.style.boxShadow = 'none';
        }

        // --- Some stars twinkle slower (more realistic) ---
        if (Math.random() > 0.7) {
          star.style.animationDuration = `${Math.random() * 6 + 4}s`; // 4–10s
        }

        // --- Assign to depth layer ---
        if (Math.random() > 0.5) {
          starsNear.appendChild(star);
        } else {
          starsFar.appendChild(star);
        }
      }

      // --- Shooting stars ---
      const shootStar = () => {
        const el = document.createElement('div');
        el.className = 'shooting-star';

        // Random start position in the upper-left region so it shoots across visibly
        el.style.top = `${Math.random() * 60}%`;
        el.style.left = `${Math.random() * 60}%`;

        container.appendChild(el);

        // Remove after animation completes
        setTimeout(() => {
          if (el.parentNode) el.remove();
        }, 1000);
      };

      // Fire first one after a short delay, then randomly every 4–8s
      setTimeout(shootStar, 1500);
      this.shootingStarInterval = setInterval(() => {
        shootStar();
      }, 4000 + Math.random() * 4000);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Abel|Space+Mono&display=swap");

html {
  scroll-behavior: smooth;
}

.solarsystem {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

/* Dark background with subtle dot grid */
.dot-background {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: black;
}

/* Subtle static dot grid */
.dot-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 120px 120px;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
}

/* Twinkling stars layers */
.stars {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* Make sure all content sits above the star layers */
.solarsystem > *:not(.stars) {
  position: relative;
  z-index: 2;
}

/* Individual star */
.star {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  animation: twinkle ease-in-out infinite;
}

@keyframes twinkle {
  0%   { opacity: 0;   transform: scale(0.6); }
  25%  { opacity: 0.2; }
  50%  { opacity: 1;   transform: scale(1.3); }
  75%  { opacity: 0.2; }
  100% { opacity: 0;   transform: scale(0.6); }
}

/* Shooting star */
.shooting-star {
  position: absolute;
  width: 120px;
  height: 2px;
  background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  z-index: 1;
  transform: rotate(-35deg);
  animation: shoot 0.8s ease-out forwards;
}

@keyframes shoot {
  0%   { opacity: 1; transform: rotate(-35deg) translateX(0); }
  100% { opacity: 0; transform: rotate(-35deg) translateX(300px); }
}

/* Typography */
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

/* Layout */
.page {
  height: 100vh;
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

/* Mobile */
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

/* Glitch effect */
.glitch {
  animation: glitch 1.5s linear infinite;
}

@keyframes glitch {
  2%,  64% { transform: translate(6px, 0) skew(20deg); }
  4%,  60% { transform: translate(-9px, 0) skew(0deg); }
  62%      { transform: translate(0, 0) skew(5deg); }
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
  2%,  64% { transform: translate(2px, -2px); }
  4%,  60% { transform: translate(-2px, 2px); }
  62%      { transform: translate(13px, -1px) skew(-13deg); }
}

.glitch:after {
  animation: glitchBottom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBottom {
  2%,  64% { transform: translate(-3px, 0); }
  4%,  60% { transform: translate(-3px, 0); }
  62%      { transform: translate(-22px, 5px) skew(21deg); }
}
</style>