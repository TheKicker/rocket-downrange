<template>
  <div class="Links">
    <div>
      <div class="text-center text-dark container"></div>

      <!-- About Section -->
      <div class="my-4 width-limit mx-auto">
        <div>
          <div
            class="position-relative overflow-hidden text-center bg-primary text-white"
          >
            <div class="col-md-6 p-lg-5 mx-auto my-5">
              <h2 class="font-weight-normal text-white">
                About Rocket Downrange
              </h2>
              <hr color="white" />
              <p class="lead font-weight-normal">
                Breaking boundaries, setting standards and transforming humanity
                for the better. Space has always been the final frontier that
                keeps on giving. This site serves to be a side project that
                informs and inspires the next generation of explorers.
              </p>
              <a
                class="btn btn-outline-light my-4"
                href="https://github.com/TheKicker/rocket-downrange"
                target="_blank"
                rel="noopener"
                >{{ code }}</a
              >
            </div>
          </div>
        </div>

        <!-- Row One -->
        <div class="card-group width-limit mx-auto">
          <External
            site="United States Space Force"
            image="space-force.jpg"
            link="https://www.spaceforce.mil/"
          />
          <External
            site="NASA"
            image="nasaVAB.jpg"
            link="https://www.nasa.gov"
          />
          <External
            site="European Space Agency"
            image="ESA.png"
            link="https://www.esa.int/"
          />
          <External
            site="Russian Space Agency"
            image="roscosmos.jpg"
            link="http://en.roscosmos.ru/"
          />
        </div>
        <!-- Row Two -->
        <div class="card-group width-limit mx-auto">
          <External
            site="SpaceX"
            image="spacex.jpg"
            link="https://www.spacex.com/"
          />
          <External
            site="Rocket Lab"
            image="rocketLab.jpg"
            link="https://www.rocketlabusa.com/"
          />
          <External
            site="Firefly Aerospace"
            image="firefly.png"
            link="https://firefly.com/"
          />
        </div>
        <!-- Row Three -->
        <div class="card-group width-limit mx-auto">
          <External
            site="Kerbal Space Program"
            image="kerbal.jpg"
            link="https://www.kerbalspaceprogram.com/"
          />
          <External
            site="Reddit/r/SpacePorn"
            image="reddit.jpeg"
            link="https://www.reddit.com/r/spaceporn/top/?t=all"
          />
          <External
            site="Space.com"
            image="spacecom.png"
            link="https://www.space.com/"
          />
        </div>
        <div class="text-center">
          <hr />
          <p class="text-secondary font-italic">
            Rocket Downrange is an independent hobby project by a guy learning
            VueJS. No endorsements or partnerships exist between Rocket
            Downrange and the included organizations.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import External from "@/components/ExternalLink.vue";

export default {
  name: "ExternalLinks",
  data() {
    return {
      Hello: "Hello World!",
      code: "See the Code"
    };
  },
  components: {
    External
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.externalLinks {
  display: flex;
  flex-direction: row;
}
.width-limit {
  max-width: 1632px;
  margin: auto;
}
</style>
