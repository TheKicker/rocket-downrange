<template>
  <div class="SpaceX">
    <NextLaunch />
    <SpaceMan msg="Where is Starman? " />
  </div>
</template>

<script>
// @ is an alias to /src
import NextLaunch from "@/components/SpaceX-NextLaunch.vue";
import SpaceMan from "@/components/SpaceMan.vue";

export default {
  name: "SpaceX",
  components: {
    NextLaunch,
    SpaceMan
  }
};
</script>
