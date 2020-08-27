<template>
  <div class="card my-4 mx-2">
    <img :src="image" class="card-img-top image" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{site}}</h5>
      <hr />
      <p class="card-text"></p>
      <p class="card-text text-center">
        <a :href="link" class="btn btn-dark" target="_blank" rel="noopener">Official Site</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "External",
  props: {
    site: String,
    link: String,
    image: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
