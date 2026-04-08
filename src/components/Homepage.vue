<template>
  <div class="hello">
    <div class="jumbotron viewporth">
      <div class="viewportText">
        <h1 id="text-shadow-dark" class="hero-title text-white">Rocket Downrange</h1>
        <hr class="hero-divider" />
        <p id="text-shadow-dark" class="hero-subtitle text-white">From a space nerd, for the space nerds.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {name: "Homepage"};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#text-shadow-dark {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.jumbotron {
  background: #282c2b url("../assets/rocketdownrange.webp") no-repeat center center / cover;
  background-attachment: fixed;
  width: 100%;
  overflow: hidden;
}

.viewporth {
  min-height: 90vh;
  /* Use dvh (dynamic viewport height) where supported to handle Safari's
     collapsing/expanding browser chrome correctly. Falls back to svh, then vh. */
  min-height: 90svh;
  min-height: 90dvh;
  height: 90vh;
  height: 90svh;
  height: 90dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.viewportText {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  width: 100%;
  max-width: 800px;
}

.hero-title {
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 0;
  line-height: 1.2;
}

.hero-divider {
  width: clamp(60px, 20%, 200px);
  border-color: rgba(255, 255, 255, 0.6);
  margin: 1rem auto;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  margin-bottom: 0;
}

/* Disable parallax on mobile/tablet — Safari on iOS/iPadOS does not support
   background-attachment: fixed and renders it incorrectly. This covers all
   touch devices up to and including iPad landscape (1024px). */
@media only screen and (max-width: 1024px) {
  .jumbotron {
    background-attachment: scroll;
  }
}

/* Smaller phones in portrait */
@media only screen and (max-width: 480px) {
  .viewporth {
    min-height: 60vh;
    min-height: 60svh;
    min-height: 60dvh;
    height: 60vh;
    height: 60svh;
    height: 60dvh;
  }
}

/* Landscape phones (short screens) */
@media only screen and (max-height: 500px) and (orientation: landscape) {
  .viewporth {
    min-height: 100vh;
    min-height: 100svh;
    min-height: 100dvh;
    height: 100vh;
    height: 100svh;
    height: 100dvh;
  }
}

/* iPad portrait & landscape — explicit Safari-safe overrides */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .viewporth {
    min-height: 90vh;
    min-height: 90svh;
    min-height: 90dvh;
    height: 90vh;
    height: 90svh;
    height: 90dvh;
  }
}
</style>
