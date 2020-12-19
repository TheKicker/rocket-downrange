<template>
  <div class="Test my-4 mx-auto container">
    <h1>This is a test page.</h1>
    <hr />
    <!-- Import Components here for testing purposes -->
    <Location title="Historic Launch Pad 39A" />
  </div>
</template>


<script>
// @ is an alias to /src
import Error404 from "@/components/Error.vue";
import Modal from "@/components/Modal.vue";
import Location from "@/components/LocationComponent.vue";

export default {
  name: "About",
  components: {
    Error404, Modal, Location
  }
};
</script>
