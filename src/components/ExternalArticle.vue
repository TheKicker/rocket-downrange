<template>
  <div class="card my-4 mx-2">
    <h5 class="card-title">{{ newssite }}</h5>
    <img :src="image" class="card-img-top image" :alt="newsite + ' - ' + title" />
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
export default {
  name: "Article",
  props: {
    newssite: String,
    title: String,
    published: String,
    link: String,
    image: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
