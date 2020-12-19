<template>
  <div>
    <div class="card">
        <div class="card-header bg-primary"><h4 class="text-light">Hello</h4></div>
        <div class="card-body">There M8</div>
        <div class="card-footer">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Location",
  data() {
    return {
      code: "See the Code"
    };
  },
  props:{
      title: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
