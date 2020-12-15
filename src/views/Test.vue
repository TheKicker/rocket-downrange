<template>
  <div class="Test m-4 container">
    <h1>This is a test page.</h1>
    <hr />
    <!-- Import Components here for testing purposes -->
    <Modal title="Hello there" body="This is a great modal. " button="true" buttonLabel="Yeet" buttonLink="https://google.com"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Error404 from "@/components/Error.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "About",
  components: {
    Error404, Modal
  }
};
</script>
