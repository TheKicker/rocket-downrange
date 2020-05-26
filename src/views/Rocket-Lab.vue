<template>
  <div class="RocketLab container my-4">
    <RocketLabinfo />
    <NextLaunch />
    <div class="card">
      <div class="card-header">Quote</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>We set out to really make space accessible and make space kind of the third domain where you can innovate and provide your services to everybody here on earth and Rocket Lab's Photon is really kind of the next logical step to doing that.</p>
          <footer class="blockquote-footer">
            Peter Beck
            <cite title="Source Title">CEO of Rocket Lab</cite>
          </footer>
        </blockquote>
      </div>
    </div>
    <br />
    <hr />
    <div class="text-center">
      <a
        href="https://github.com/barrosfilipe/Rocket-Lab-API"
        target="_blank"
        rel="noopener"
      >Link to Rocket Lab API Repository</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RocketLabinfo from "@/components/RocketLabinfo.vue";
import NextLaunch from "@/components/RocketLab-NextLaunch.vue";

export default {
  name: "RocketLab",
  components: {
    RocketLabinfo,
    NextLaunch
  },
  data() {
    return {};
  }
};
</script>
