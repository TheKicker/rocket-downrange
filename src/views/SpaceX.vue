<template>
  <div class="SpaceX">
    <NextLaunch />
    <div class="card">
      <div class="card-header">Quote</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>Life cannot be just about solving one problem after another. There need to be things that inspire you, that make you glad to wake up and be a part of humanity.</p>
          <footer class="blockquote-footer">
            Elon Musk
            <cite title="Source Title">CEO of SpaceX</cite>
          </footer>
        </blockquote>
      </div>
    </div>
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
