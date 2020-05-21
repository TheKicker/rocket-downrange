<template>
  <div class="RocketLab">
    <RocketLabUSA msg="Where is Electron? " />
  </div>
</template>

<script>
// @ is an alias to /src
import RocketLabUSA from "@/components/RocketLabUSA.vue";

export default {
  name: "RocketLab",
  components: {
    RocketLabUSA
  },
  data() {
    return {};
  }
};
</script>
