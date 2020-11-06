<template>
  <div class="Info my-4">
    <div class="container-fluid text-center">
      <h1>{{ company_name }}</h1>
      <div class="row my-4">
        Virgin Galactic is a British spaceflight company within the Virgin Group
        - a multinational venture capital conglomerate founded by Sir Richard
        Branson and Nik Powell. Galactic is developing launch vehicles capable
        of suborbital spaceflights aimed at the tourism industry with a sister
        company referred to as Virgin Orbit focusing on the commercial. Virgin
        Galactic/Orbit employ nearly 1000 individuals - Galactic is
        headquartered in Las Cruces, New Mexico, and Orbit is headquartered in
        Long Beach, California.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VirginInfo",
  data() {
    return {
      company_name: "Virgin Galactic"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
