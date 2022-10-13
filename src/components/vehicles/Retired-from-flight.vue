<template>
  <div class="RetiredVehicles my-4">
    <div class="card">
      <div class="card-body">
        <p class="h4 text-uppercase text-left">Historical Workhorses</p>
        <hr />
        <h2 class="text-center my-4">Inactive Vehicles</h2>
        <div class="row my-2">
          <vehiclecomponent
            v-for="(vehicle, index) in vehicles"
            :key="index"
            :image="vehicle.spacecraft_config && vehicle.spacecraft_config.image_url != null || undefined ? vehicle.spacecraft_config.image_url : 'apple-icon.png'"
            :name="vehicle.name != null || undefined ? vehicle.name : 'N/A'"
            :org="vehicle.spacecraft_config && vehicle.spacecraft_config.agency && vehicle.spacecraft_config.agency.name != null || undefined ? vehicle.spacecraft_config.agency.name : 'N/A'"
            :bio="vehicle.description != null || undefined ? vehicle.description : 'N/A'"
          />
        </div>
        <hr />
        <p class="text-center">
          <i>
            API Data brought to you by
            <a href="https://thespacedevs.com" target="_blank" rel="noopener"
              >The Space Devs</a
            >
          </i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import vehiclecomponent from "@/components/vehicles/vehicle-component.vue";

window.axios = require("axios");

export default {
  name: "Retired",
  data() {
    return {
      vehicles: [],
    };
  },
  components: {
    vehiclecomponent,
  },
  mounted() {
    window.axios
      .get("https://ll.thespacedevs.com/2.0.0/spacecraft/?format=json&status=4&limit=21")
      .then((response) => {
        // console.log(response.data.results);
        this.vehicles = response.data.results;
      });
  },
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
