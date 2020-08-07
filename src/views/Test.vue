<template>
  <div class="Test container my-4">
    <h1>This is the testing grounds</h1>Think of it as JPL for RocketDownrange :)
    <div class="my-4">
      <NASAepic />
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import NASAepic from "@/components/NASA-epic.vue";

export default {
  name: "TEST",
  components: {
    NASAepic
  }
};
</script>
