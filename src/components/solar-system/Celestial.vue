<!--

March 17, 2022
Wanted to turn individual objects in the solarsystem into a reusable component.  

Unfortunately, having trouble getting smooth scroll to recognize these as valid IDs

-->
<template>
  <div>
    <section :id="identify" class="celestial">
      <div class="celestialImage">
        <v-lazy-image :src="image" class="img-fluid" alt="CREDIT: SOLARSYSTEM.NASA.GOV" />
      </div>
      <div class="celestialText">
        <div class="col mx-4">
          <div class="mx-2">
            <h1 class="glitch">{{celestial}}</h1>
            <p>{{paragraph}}</p>
            <hr />
            <div class="stats">
              <div class="col-sm">
                <i class="text-secondary">Classification:</i>
                <br />{{classification}}
              </div>
              <div class="col-sm">
                <i class="text-secondary">Location from Sun:</i>
                <br />{{location}}
              </div>
              <div class="col-sm">
                <i class="text-secondary">Diameter:</i>
                <br />{{diameter}}
              </div>
              <div class="col-sm">
                <i class="text-secondary">Surface Temp:</i>
                <br />{{temperature}}
              </div>
              <div class="col-sm">
                <i class="text-secondary">Gravity:</i>
                <br />{{gravity}}
              </div>
            </div>
          </div>
          <hr />
          <div class="row mx-2">
            <a class="btn btn-dark m-2 rounded" href="#mars" v-scroll-to="this.predecessor">
              Prior &nbsp;
              <i class="fas fa-arrow-circle-up"></i>
            </a>
            <a class="btn btn-dark m-2 rounded" href="#jupiter" v-scroll-to="this.descendant">
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
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "Celestial",
  components:{
    VLazyImage
  },
  props:{
    identify: String,
    image: String,
    celestial: String,
    paragraph: String,
    predecessor: String,
    descendant: String,
    classification: String, 
    location: String,
    diameter: String,
    temperature: String,
    gravity: String
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
