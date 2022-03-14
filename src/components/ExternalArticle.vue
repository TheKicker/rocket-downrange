<template>
  <div class="card my-4 mx-2">
    <h5 class="card-title">{{ newssite }}</h5>
    <v-lazy-image :src="image" class="card-img-top image" :alt="newsite + ' - ' + title" />
    <div class="card-body">
      <h6 class="card-title">{{ title }}</h6>
      <hr />
      <p class="card-text">{{ published }}</p>
      <p class="card-text text-center">
        <a :href="link" class="btn btn-dark" target="_blank" rel="noopener"
          >Read More</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "Article",
  components:{
    VLazyImage
  },
  props: {
    newssite: String,
    title: String,
    published: String,
    link: String,
    image: String
  }
};
</script>
