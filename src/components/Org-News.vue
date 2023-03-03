<template>
  <div class="OrgNews card my-4">
      <p class="h5 card-header text-uppercase text-left text-secondary">
        {{ company }} ({{ year }}):
      </p>
      <div class="card-body">
        <h2 class="h3 text-uppercase text-center my-3">{{ title }}</h2>
        <div class="row">
            <div v-if="srcType === 'image'" class="mx-auto">
              <v-lazy-image class="img-fluid" :src="image" :alt="'External link to ' + site" />
              <img class="img-fluid" :src="source" :alt="company + ' - ' + title" style="max-height: 650px;">
            </div>
            <div v-else-if="srcType === 'video'" class="embed-responsive embed-responsive-16by9 mx-auto">
              <iframe class="embed-responsive-item px-2" :src="source" frameborder="0" allowfullscreen :title="company + ' - ' + title"></iframe>
            </div>
        </div>
        <div class="container">
          <div class="row my-3">
            <p>
              {{ description1 }}
            </p>
            <p>
              {{ description2 }}
            </p>
          </div>
          <div class="my-2 row justify-content-around">
            <a v-if="link1url == null || undefined" href="#" hidden></a>
            <a v-else :href="link1url" target="_blank" class="btn btn-inline-block btn-primary italic m-1">
                {{link1txt}}
            </a>
            <a v-if="link2url == null || undefined" href="#" hidden></a>
            <a v-else :href="link2url" target="_blank" class="btn btn-inline-block btn-primary italic m-1">
                {{link2txt}}
            </a>
            <a v-if="link3url == null || undefined" href="#" hidden></a>
            <a v-else :href="link3url" target="_blank" class="btn btn-inline-block btn-primary italic m-1">
                {{link3txt}}
            </a>
          </div>
        </div>
    </div>
    <p class="card-footer text-center bg-white" style="color: black;">
        <i>Updated: {{ update }}</i>
    </p>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "OrgNews",
  components:{
    VLazyImage
  },
  props: {
    company: String,
    year: String,
    title: String,
    srcType: String,
    source: String,
    description1: String,
    description2: String,
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
