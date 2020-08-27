<template>
  <div id="KerbalComms" class="my-4 mx-4">
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">Space-Related Calculators</h5>
        <hr />
        <div>
          <h3 class="text-center my-4">Satellite Calculator</h3>
        </div>
        <div class="row">
          <div class="mx-auto">
            <img
              src="../assets/kerbal.png"
              class="img-fluid"
              alt="Image: Screenshot from Kerbal Space Program featuring a satellite for communications near Kerbin.  Kerbol (the sun) is in the background.  "
            />
          </div>
        </div>
        <div class="row container mx-auto">
          <div class="my-4">
            <div class="mx-auto my-2">
              <p
                class="my-2 text-primary"
              >As you explore the universe (or in this case - the Kerbal universe), being able to communicate with your home planet is vitally important. The calculator below allows you to enter the desired height of your satellite and then figure out related information to distribute your satellite evenly among its celestial body. This tool is in BETA</p>
            </div>
          </div>
          <div class="my-4">
            <form>
              <div class="row">
                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                  <label for="radius">Radius</label>
                  <input
                    type="number"
                    class="form-control"
                    id="radius"
                    aria-describedby="radiusHelp"
                    :v-bind="radius"
                  />
                  <small
                    id="radiusHelp"
                    class="form-text text-muted"
                  >What is the desired height of your satellite over it's corresponding celestial body</small>
                </div>
                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                  <label for="diameter">Diameter</label>
                  <h2 class="form-control">{{diameter}}</h2>
                </div>
              </div>
              <div class="mx-2 row">
                <button v-on:click="calculate(radius)" class="btn btn-primary d-block">Calculate</button>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <p class="text-center">
          <!-- <i>Last Updated at {{(new Date(results.date).toLocaleString())}}, Check back tomorrow for a new picture of the day!</i> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KerbalComms",
  data() {
    return {
      radius: 0,
      diameter: 1
    };
  },
  mounted() {},
  methods: {
    calculate: function(kerbalradius) {
      this.diameter = kerbalradius * 2;
      console.log(diameter);
      return diameter;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>