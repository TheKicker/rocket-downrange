<template>
  <tr>
    <th scope="row">
      <strong>{{ new Date(earthTime).toDateString() }}</strong>
    </th>
    <td>
      <i class="fas fa-cloud-sun fa-2x"></i>
    </td>
    <td>
      {{ celToFah(fahrenheit).toFixed(limit) }}
      ºF / {{ celsius.toFixed(limit) }} ºC
    </td>
    <td>{{ pressure.toFixed(limit) }} Pascals</td>
    <!-- <td>
      {{ windspeed.toFixed(limit) }} m/s
      {{ compass }}
    </td> -->
  </tr>
</template>


<script>
export default {
  name: "tablerow",
  data() {
    return {
      limit: 3,
    };
  },
  props: {
    earthTime: String,
    fahrenheit: String,
    celsius: String,
    pressure: String,
    // windpseed: String,
    // compass: String,
  },
  methods: {
    celToFah: function (temperature) {
      return temperature * (9 / 5) + 32;
    },
  },
};
</script>

