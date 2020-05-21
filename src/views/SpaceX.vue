<template>
  <div class="SpaceX">
    <SpaceMan msg="Where is Starman? " />
  </div>
</template>

<script>
// @ is an alias to /src
import SpaceMan from "@/components/SpaceMan.vue";

export default {
  name: "SpaceX",
  components: {
    SpaceMan
  },
  data() {
    return {
      ourData: "truDawg"
    };
  }
};
</script>
