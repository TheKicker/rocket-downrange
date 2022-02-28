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
            </div>
          </div>
        </div>

        <!-- Row One -->
        <div class="card-group width-limit mx-auto">
          <External
            site="United States Space Force"
            image="organizations/space-force.jpg"
            link="https://www.spaceforce.mil/"
          />
          <External
            site="NASA"
            image="organizations/nasaVAB.jpg"
            link="https://www.nasa.gov"
          />
          <External
            site="European Space Agency"
            image="organizations/ESA.png"
            link="https://www.esa.int/"
          />
        </div>
        <!-- Row Two -->
        <div class="card-group width-limit mx-auto">
          <External
            site="SpaceX"
            image="organizations/spacex.jpg"
            link="https://www.spacex.com/"
          />
          <External
            site="Rocket Lab"
            image="organizations/rocketLab.jpg"
            link="https://www.rocketlabusa.com/"
          />
          <External
            site="Firefly Aerospace"
            image="organizations/firefly.png"
            link="https://firefly.com/"
          />
          <External
            site="Astra"
            image="organizations/Astra.jpg"
            link="https://astra.com/"
          />
        </div>
        <!-- Row Three -->
        <div class="card-group width-limit mx-auto">
          <External
            site="United Launch Alliance"
            image="organizations/ula.jpg"
            link="https://www.ULAlaunch.com/"
          />
          <External
            site="Kerbal Space Program"
            image="organizations/kerbal.jpg"
            link="https://www.kerbalspaceprogram.com/"
          />
          <External
            site="Reddit/r/SpacePorn"
            image="organizations/reddit.jpeg"
            link="https://www.reddit.com/r/spaceporn/top/?t=all"
          />
          <External
            site="Space.com"
            image="organizations/spacecom.png"
            link="https://www.space.com/"
          />
        </div>
        <div class="text-center">
          <hr />
          <p class="text-secondary font-italic">
            Rocket Downrange is an independent hobby project by a guy learning
            Vue. No endorsements or partnerships exist between Rocket
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
