<template>
  <div class="Astra-Special my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">Astra Special Event (2020):</h5>
        <hr />
        <h3 class="text-center my-4">
          Rocket 3.2 - Ready to Launch!
        </h3>
        <div class="row">
          <div class="mx-auto">
            <img
              src="../../assets/astra-test-2.jpeg"
              class="img-fluid"
              style="max-height: 65vh;"
              alt="Astra Special Event - the Crew Demo 2 Mission is a joint mission between SpaceX and NASA to get Bob Behnken and Douglas Hurley to the International Space Station. If this picture did not load - then an error occured, this media from NASA might be a Youtube video rather than picture. "
            />
          </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              Only three months after their previous attempt, on Tuesday, December 15 of 2020 - Astra officially passed the Karman Line in an amazing show of progress! Rocket 3.2 lifted off from Astra's private Kodiak Spaceport : Pad LP-3B in Alaska during their preferred launch window.  Following its targeted flight trajectory nearly dead on, a couple of minutes into flight, the main engines shut down, and the second stage separated. This upper stage then burnt out of all of its propellant and simulated the deployment of a payload into space - unfortunately, missing orbit by just a few seconds or 500m/s by some reports. 
            </p>
          </div>
          <div class="my-4 row justify-content-center">
            <a
              href="https://astra.com/blog/rocket-3-2-ready-to-launch/"
              target="_blank"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                Mission Overview
              </button>
            </a>
            <a
              href="https://twitter.com/Astra/status/1338999451893915649?s=20"
              target="_blank"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                Twitter Recap Video
              </button>
            </a>
          </div>
          <hr />
          <p class="text-center">
            <i>Last Update: Dec 16, 2020</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AstraTest2",
  data() {
    return {
      results: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
