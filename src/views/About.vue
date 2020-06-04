<template>
  <div class="about">
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
