<template>
  <div class="Rocket-Lab-Special my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">
          Rocket Lab Special Event (2020):
        </h5>
        <hr />
        <h3 class="text-center my-4">
          Return to Sender - A Reusability Milestone
        </h3>
        <div class="row">
          <div class="mx-auto">
            <img
              src="Rocket-Lab-Gnome.jpg"
              class="img-fluid"
              style="max-height: 65vh"
              alt="The Electron Rocket's view as seen from Space, from the mission It's a Test by Rocket Lab.  This was the first launch of the Electron Launch vehicle and was conducted the 25th of May, 2017. "
            />
          </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              The Return to Sender mission was Rocket Lab's 16th succesful
              launch of the Electron vehicle that occured on November 20, 2020.
              Launched from Launch Complex 1 in New Zealand, the mission was
              responsible for over 30 different satellites to sun-synchronous
              orbit in one payload. Customers included TriSept, Unseenlabs,
              Swarm, Auckland Programme for Space Systems, and global gaming
              software company Valve. This mission also included Rocket Lab's
              first attempt to bring Electron’s first stage back to Earth under
              a newly designed parachute system for a controlled water landing
              before collection by a recovery vessel - a major milestone in
              Rocket Lab’s pursuit to make Electron a reusable rocket to support
              an increased launch cadence for small satellites.
            </p>
            <p>
              Half Life 2 fans may recognize "Gnome Chompski" who was launched
              as part of the payload thanks to Valve president, Gabe Newell. In
              homage to the memes, "Little Rocket Man" achievement and more; The
              Garden Gnome is co-designed by special effects and prop house Weta
              Workshop and made from titanium. Rocket Lab hopes to use it “to
              test and qualify a novel 3D printing technique that could be
              employed for future spacecraft components”. The gnome will be
              attached to the inside of Rocket Lab’s Kick Stage, the final stage
              of Rocket Lab’s Electron rocket that allows more accurate
              placement of satellites in orbit.
            </p>
          </div>
          <div class="row my-2 text-dark">
            <p class="col text-center">
              <strong>Launch Date (Earth): November 20, 2020, 02:20 UTC</strong>
            </p>
            <p class="col text-center">
              <strong>Launch Pad: Launch Complex 1, New Zealand</strong>
            </p>
          </div>
          <div class="my-4 row justify-content-center">
            <a
              href="https://www.rocketlabusa.com/missions/completed-missions/flight-16/"
              target="_blank"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                Rocket Lab - Mission Overview
              </button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=eZGI_lHGltA"
              target="_blank"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                Return to Sender - YouTube Live Stream
              </button>
            </a>
          </div>
          <hr />
          <p class="text-center">
            <i>Last Update: November 24, 2020</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.log("Rocket Lab Return to Sender - Active");

export default {
  name: "RocketLabSender",
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
