<template>
  <div class="Info my-5">
    <div class="container-fluid text-center">
      <h1>{{ header }}</h1>
      <div class="row my-4 mx-3">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    header: String,
    description: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
