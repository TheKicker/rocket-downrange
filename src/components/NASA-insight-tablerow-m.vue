<template>
  <div>
    <div class="card-header bg-primary text-center text-light">
      <strong>{{ new Date(earthTime).toDateString() }}</strong>
    </div>
    <div class="parent">
      <div class="icon my-3">
        <i class="fas fa-cloud-sun fa-3x"></i>
      </div>
      <div class="data row my-1">
        Temperature: {{ fahrenheit != "N/A" ? celToFah(fahrenheit).toFixed(1) : "N/A" }}
        ºF / {{ celsius != "N/A" ? celsius.toFixed(1) : "N/A" }} ºC
      </div>
      <div class="data row my-1">
        Pressure: {{ pressure != "N/A" ? pressure.toFixed(3) : "N/A" }} Pascals
      </div>
      <div class="data row my-1">
        Wind Speed: {{ windspeed != "N/A" ? windspeed.toFixed(3) : "N/A" }} m/s {{ compass != "N/A" ? compass : "N/A" }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "tablerowm",
  data() {
    return { random: 1 };
  },
  props: {
    earthTime: String,
    fahrenheit: Number,
    celsius: Number,
    pressure: Number,
    windspeed: Number,
    compass: String,
  },
  methods: {
    celToFah: function (temperature) {
      return temperature * (9 / 5) + 32;
    },
  },
};
</script>
<style scoped>
.parent{
  display: flex;
  flex-direction: column;
  margin: auto;
}
.icon, .data{
  display: grid; 
  place-items: center;
}
</style>

