<template>
  <div class="OrganizationNews my-4 mx-4">
    <div class="card container">
      <div class="card-body py-3 p-md-6 m-md-3">
        <h5 class="text-left text-secondary">
          {{ company }} ({{ year }}):
        </h5>
        <hr />
        <h3 class="text-center my-4">{{ title }}</h3>
        <div class="row">
            <div v-if="srcType === 'image'" class="mx-auto">
              <img class="img-fluid" :src="source" :alt="company + ' - ' + title">
            </div>
            <div v-else-if="srcType === 'video'" class="embed-responsive embed-responsive-16by9 mx-auto">
              <iframe class="embed-responsive-item" :src="source" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              {{ description }}
            </p>
          </div>
          <!-- <div class="row my-2 text-dark">
            <p class="col text-center">
              <strong>Launch Date (Earth): July 30, 2020</strong>
            </p>
            <p class="col text-center">
              <strong>Landing Date (Mars): February 18, 2021</strong>
            </p>
          </div> -->
          <div class="my-4 row justify-content-center">
            <a v-if="link1url == null || undefined" href="#" hidden></a>
            <a v-else :href="link1url" target="_blank" class="py-4 p-3">
              <button class="btn btn-block btn-outline-primary italic">
                {{link1txt}}
              </button>
            </a>
            <a v-if="link2url == null || undefined" href="#" hidden></a>
            <a v-else :href="link2url" target="_blank" class="py-4 p-3">
              <button class="btn btn-block btn-outline-primary italic">
                {{link2txt}}
              </button>
            </a>
            <a v-if="link3url == null || undefined" href="#" hidden></a>
            <a v-else :href="link3url" target="_blank" class="py-4 p-3">
              <button class="btn btn-block btn-outline-primary italic">
                {{link3txt}}
              </button>
            </a>
          </div>
          <hr />
          <p class="text-center">
            <i>{{ update }}</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrgNews",
  props: {
    company: String,
    year: String,
    title: String,
    srcType: String,
    source: String,
    description: String,
    update: String,
    link1url: String,
    link1txt: String,
    link2url: String,
    link2txt: String,
    link3url: String,
    link3txt: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
