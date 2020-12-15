<template>
  <div class="about">
    <about />
    <Error404 hidden/>
  </div>
</template>


<script>
// @ is an alias to /src
import about from "@/components/About-template.vue";
import Error404 from "@/components/Error.vue";

export default {
  name: "About",
  components: {
    about,
    Error404
  }
};
</script>
