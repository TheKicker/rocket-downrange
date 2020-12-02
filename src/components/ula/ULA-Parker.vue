<template>
  <div class="ULA-Special my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">
          United Launch Alliance Special Event (2018):
        </h5>
        <hr />
        <h3 class="text-center my-4">
          The Parker Solar Probe - Delta IV Heavy
        </h3>
        <div class="row">
          <div class="mx-auto">
            <img
              src="https://rocketdownrange.com/Parker-Solar-Probe.jpg"
              class="img-fluid"
              style="max-height: 65vh"
              alt="The Parker Solar Probe image by NASA/Johns Hopkins APL/Steve Gribben - http://parkersolarprobe.jhuapl.edu/Multimedia/Images.php, Public Domain, https://commons.wikimedia.org/w/index.php?curid=69306218"
            />
          </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              NASA’s Parker Solar Probe will be the first-ever mission to "touch" the Sun. The spacecraft, about the size of a small car, will travel directly into the Sun's atmosphere about 4 million miles from the surface. Parker Solar Probe launched aboard a Delta IV-Heavy rocket from Cape Canaveral, Aug. 12, 2018 at 3:31 a.m. Eastern time.
            </p>
            <p>
              “The unique requirements of this mission made the Delta IV Heavy the perfect launch vehicle to deliver Parker Solar Probe into orbit with the highest precision,” said Gary Wentz, ULA vice president of Government and Commercial Programs. “Congratulations to our team and mission partners, we are proud to launch this exceptional spacecraft that will provide invaluable scientific information benefiting all of humankind.”
            </p>
            <p>
               This mission was launched aboard a Delta IV Heavy, which is comprised of three common core boosters each powered by an Aerojet Rocketdyne (AR) RS-68A liquid hydrogen/liquid oxygen engines producing a combined total of more than 2.1 million pounds of thrust. The second stage was powered by an AR RL10B-2 liquid hydrogen/liquid oxygen engine. Due to the extremely high energy required for this mission, the Delta IV Heavy’s capability was enhanced by a powerful third stage provided by Northrop Grumman. 
            </p>
          </div>
          <div class="row my-2 text-dark">
            <p class="col text-center">
              <strong>Launch Date (Earth): August 12, 2018, 8:31 AM UTC</strong>
            </p>
            <p class="col text-center">
              <strong>Launch Pad: Cape Canaveral, Florida</strong>
            </p>
          </div>
          <div class="my-4 row justify-content-center">
            <a
              href="https://www.ulalaunch.com/missions/missions-details/2018/08/12/united-launch-alliance-successfully-launches-nasa-s-parker-solar-probe-spacecraft"
              target="_blank"
              rel="noopener"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                ULA - Mission Overview
              </button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=AlyuSwRSVHU"
              target="_blank"
              rel="noopener"
              class="py-4 p-3"
            >
              <button class="btn btn-block btn-outline-primary italic">
                 NASA Launch Stream
              </button>
            </a>
          </div>
          <hr />
          <p class="text-center">
            <i>Last Update: November 30, 2020</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
console.log("ULA Parker Solar Probe - Active");

export default {
  name: "Parker",
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
