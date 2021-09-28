<template>
  <div class="SpaceX-NextLaunch mx-4 my-4">
    <div class="card container">
      <div class="card-body">
        <h2 class="text-left">Next Mission:</h2>
        <hr />
        <h1 class="text-center my-4">
          {{
              this.results.results[0] &&
              this.results.results[0].mission &&
              this.results.results[0].mission.name != null ||
            undefined
              ? this.results.results[0].mission.name
              : " Mission name to be decided "
          }}
        </h1>
        <div class="row mx-1">
          <div class="col-md-5 col-sm-12 text-center">
            <img
              :src="this.results.results[0].image != null || undefined ? this.results.results[0].image : 'https://icon-library.com/images/placeholder-image-icon/placeholder-image-icon-21.jpg'"
              class="img-fluid"
              style="max-height: 45vh;"
              :alt="this.results.results[0].mission &&
              this.results.results[0].mission.name != null ||
            undefined
              ? 'SpaceXs next launch / mission is named ' + this.results.results[0].mission.name
              : ' No image available, nothing to see here yet '"
            />
          </div>
          <div class="col-md-6 col-sm-12 my-2 mx-1">
            <h6 class="text-secondary">
              <span class="text-primary">Launch Date:</span><br />
              <span class="mx-4">
                {{
                  
                    this.results.results[0].net != null ||
                  undefined
                    ? new Date(this.results.results[0].net).toLocaleString() : "N/A"
                }}
              </span>
            </h6>

            <h6 class="text-secondary my-3">
              <span class="text-primary">Launch Site:</span><br />
              <span class="mx-4">
                {{
                    this.results.results[0] &&
                    this.results.results[0].pad.location &&
                    this.results.results[0].pad.location.name != null ||
                  undefined
                    ? this.results.results[0].pad.name
                    : " N/A "
                }},</span>
              <br />
              <span class="mx-4">
                {{
                  this.results.results[0].pad && this.results.results[0].pad.location &&
                    this.results.results[0].pad.location.name != null ||
                  undefined
                    ? this.results.results[0].pad.location.name
                    : " N/A "
                }}
              </span>
            </h6>
            <hr />
            <p class="text-primary my-2">
              {{
                
                  this.results.results[0] && this.results.results[0].mission && this.results.results[0].mission.description != null ||
                undefined
                  ? this.results.results[0].mission.description
                  : " This mission might be classified or we do not have any data to show here yet.  Check back for an update closer to launch time! "
              }}
            </p>
          </div>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Mission Type:</span>
            {{ this.results.results[0].mission && this.results.results[0].mission.type != null || undefined ? this.results.results[0].mission.type : ' Classified/Unknown ' }}
          </h6>
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Launch Vehicle:</span>
            {{
                this.results.results[0] && this.results.results[0].rocket && this.results.results[0].rocket.configuration &&
                this.results.results[0].rocket.configuration.full_name != null || undefined ? 
              this.results.results[0].rocket.configuration.full_name : ' TBD '
            }}
          </h6>
        </div>

        <div class="row my-4">
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Mission Status:</span>
            {{ this.results.results[0].status && this.results.results[0].status.name != null || undefined ? this.results.results[0].status.name : " N/A "}}
            (probability of
            {{ this.results.results[0].probability != null || undefined ? this.results.results[0].probability + '%' : ' > 1% '}})
          </h6>
          <h6 class="col-6 text-center text-secondary">
            <span class="text-primary">Target:</span>
            {{ this.results.results[0] && this.results.results[0].mission && this.results.results[0].mission.orbit && this.results.results[0].mission.orbit.name != null || undefined ? this.results.results[0].mission.orbit.name : 'To be decided' }} ({{
               this.results.results[0] && this.results.results[0].mission && this.results.results[0].mission.orbit && this.results.results[0].mission.orbit.abbrev != null || undefined ? this.results.results[0].mission.orbit.abbrev : 'TBD'}})
          </h6>
        </div>

        <div class="row my-4"></div>
        <hr />
        <p class="text-center"></p>
      </div>
    </div>
  </div>
</template>

<script>
var url =
  "https://ll.thespacedevs.com/2.0.0/launch/upcoming/?format=json&rocket__configuration__manufacturer__name__icontains=SpaceX&limit=1";
window.axios = require("axios");
export default {
  name: "NextLaunch",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    window.axios
      .get(url)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));
  },
  methods: {
    valueCheckText: function(apiResults) {
      if (apiResults === null) {
        return (apiResults = " N/A ");
      } else {
        return apiResults;
      }
    },
    valueCheckImage: function(apiResults) {
      if (apiResults === null) {
        return (apiResults =
          "https://www.freeiconspng.com/uploads/no-image-icon-6.png");
      } else {
        return apiResults;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mission-patch {
  height: 18rem;
  margin: auto;
}
p {
  text-size-adjust: 1.1rem;
}
</style>
