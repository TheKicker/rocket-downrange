<template>
  <div class="card my-4 mx-2">
    <v-lazy-image :src="image" :alt="'External link to ' + site" />
    <div class="card-body">
      <h3 class="h5 text-uppercase card-title">{{site}}</h3>
      <hr />
      <p class="card-text"></p>
      <p class="card-text text-center">
        <a :href="link" class="btn btn-dark" target="_blank" rel="noopener">Official Site</a>
      </p>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "External",
  components:{
    VLazyImage
  },
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
