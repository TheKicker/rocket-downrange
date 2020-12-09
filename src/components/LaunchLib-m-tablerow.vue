<template>
  <div class="card my-4">
    
    <h5 class="card-header">
      {{ mission }}
    </h5>
    <p class="mx-2 my-2">
      <strong>Launch Date: </strong><br>
      {{ utcTranslate(launchtime) }}
    </p>
    <p class="mx-2 my-2">
      <strong>Launch Vehicle: </strong><br>
      {{ rocket }}, {{ launchsp }}
    </p>
    <p class="mx-2 my-2">
      <strong>Location: </strong><br>
      {{ pad }}, {{ location }}
    </p>
    <p class="mx-2 my-2">
      <strong>Overview: </strong><br>
      {{ charCount(description, limit) }}
    </p>
  </div>
</template>


<script>
export default {
  name: "tablerowM",
  data() {
    return {
      limit: 350,
    };
  },
  props: {
    mission: String,
    rocket: String,
    launchsp: String,
    launchtime: String,
    pad: String,
    location: String,
    description: String,
  },
  methods: {
    utcTranslate(results) {
      var local = new Date(results).toLocaleString();
      return local;
    },
    charCount(results, limit) {
      if (results.length > limit) {
        return results.slice(0, limit) + "...";
      } else {
        return results;
      }
    },
  },
};
</script>

<style scoped>
.heading{ color: black;}
</style>

