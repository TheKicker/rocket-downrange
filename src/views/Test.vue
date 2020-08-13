<template>
  <div class="Test m-4">
    <h1>This is a test page.</h1>
    <hr />
    <!-- Import Components here for testing purposes -->
    <Error404 />
  </div>
</template>


<script>
// @ is an alias to /src
import Error404 from "@/components/Error.vue";

export default {
  name: "About",
  components: {
    Error404
  }
};
</script>
