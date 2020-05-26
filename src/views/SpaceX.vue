<template>
  <div class="SpaceX container my-4">
    <SpaceXinfo />
    <NextLaunch />
    <LatestLaunch />
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
    <br />
    <hr />
    <div class="text-center">
      <a
        href="https://github.com/r-spacex/SpaceX-API"
        target="_blank"
        rel="noopener"
      >Link to SpaceX API Repository</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SpaceXinfo from "@/components/SpaceX-info.vue";
import NextLaunch from "@/components/SpaceX-NextLaunch.vue";
import LatestLaunch from "@/components/SpaceX-LatestLaunch.vue";
import SpaceMan from "@/components/SpaceMan.vue";

export default {
  name: "SpaceX",
  components: {
    SpaceXinfo,
    NextLaunch,
    LatestLaunch,
    SpaceMan
  }
};
</script>
