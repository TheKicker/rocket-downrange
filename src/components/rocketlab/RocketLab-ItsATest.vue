<template>
  <div class="Rocket-Lab-Special my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">
          Rocket Lab Special Event (2017):
        </h5>
        <hr />
        <h3 class="text-center my-4">It's a Test - First Electron mission</h3>
        <div class="row">
          <div class="mx-auto">
            <img
              src="../../assets/RL-Test.jpg"
              class="img-fluid"
              style="max-height: 65vh"
              alt="The Electron Rocket's view as seen from Space, from the mission It's a Test by Rocket Lab.  This was the first launch of the Electron Launch vehicle and was conducted the 25th of May, 2017. "
            />
          </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              It's a Test was the first launch of Rocket Lab's Electron launch
              vehicle. When Electron lifted-off at 16:20 NZT from Rocket Lab
              Launch Complex 1 on the Mahia Peninsula in New Zealand, it became
              the first orbital-class rocket launched from from a private launch
              site. The mission saw Electron complete a perfect first stage
              burn, stage separation, second stage ignition and fairing
              separation. Electron successfully reached space and put Rocket Lab
              in an incredibly strong position to accelerate into commercial
              operations.
            </p>
          </div>
          <div class="row my-2 text-dark">
            <p class="col text-center">
              <strong>Launch Date (Earth): May 25, 2017, 04:20 UTC</strong>
            </p>
            <p class="col text-center">
              <strong
                >Landing Site: Launch Complex 1, Rocket Lab's private
                facility</strong
              >
            </p>
          </div>
          <div class="my-4 row justify-content-center">
            <a
              href="https://www.rocketlabusa.com/missions/completed-missions/its-a-test/"
              target="_blank"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                Rocket Lab - Mission Overview
              </button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=VA_8HPsua0c"
              target="_blank"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                Rocket Lab - Launch Day Video
              </button>
            </a>
          </div>
          <hr />
          <p class="text-center">
            <i>Last Update: August 12, 2020</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.log("Rocket Lab It's a Test Mission - Active");

export default {
  name: "RocketLabTest",
  data() {
    return {
      results: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
