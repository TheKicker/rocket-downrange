<template>
  <tr>
    <th scope="row">
      <strong>{{ new Date(earthTime).toDateString() }}</strong>
    </th>
    <td>
      <i class="fas fa-cloud-sun fa-2x"></i>
    </td>
    <td>
      {{ fahrenheit != "N/A" ? celToFah(fahrenheit).toFixed(1) : "N/A" }}
      ºF / {{ celsius != "N/A" ? celsius.toFixed(1) : "N/A" }} ºC
    </td>
    <td>{{ pressure != "N/A" ? pressure.toFixed(3) : "N/A" }} Pascals</td>
    <td>
      {{ windspeed != "N/A" ? windspeed.toFixed(3) : "N/A" }} m/s
      {{ compass != "N/A" ? compass : "N/A" }}
    </td>
  </tr>
</template>


<script>
export default {
  name: "tablerowd",
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

