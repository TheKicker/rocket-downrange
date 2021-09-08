<template>
  <div>
    <div class="carousel-item active">
        <h3 class="text-center my-4"> Photo ID#{{ id }} </h3>
        <img class="img-fluid d-block w-100" :src="image" alt="First slide" id="images" />
        <div class="my-4">
            <div class="mx-auto my-2">
                <strong>
                    <a :href="image" target="_blank" rel="noopener" class="btn btn-block btn-outline-primary text-secondary italic">HD Link from NASA.gov</a>
                </strong>
            </div>
            <p class="my-2 text-primary">
                These pictures were taken on Earth date: {{ earthDate }}, or Sol {{ marsDate}} on Mars. Captured with the {{ cameraFull }} ({{ cameraAbbrev }})
                aboard the {{ roverName }} rover.  {{ roverName }} was launched from Earth on {{ launchDate }} and has been on Mars since {{ landDate }} and 
                remains {{ status }} to this day. All images and mission data compliments of NASA.
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselItem",
  props:{
    id: String,
    image: String,
    earthDate: String,
    marsDate: String,
    cameraFull: String,
    cameraAbbrev: String,
    roverName: String,
    launchDate: String,
    landDate: String,
    status: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
