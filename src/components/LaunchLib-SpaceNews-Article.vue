<template>
    <section>
        <div class="col my-2">
          <div class="card shadow-sm">
            <v-lazy-image id="img" class="card-img img-fluid" :src="imageURL" :alt="newsSite + ' - ' + title" />
            
            <div class="p-2">
              <strong class="title">{{ title }}</strong>
              <p class="card-text text-muted">{{ newsSite }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <a :href="articleURL" class="btn btn-sm btn-primary" target="_blank" rel="noopener">Continue Reading</a>
                <small class="text-muted">Published: {{timeTranslate(publishedAt)}}</small>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>


<script>
import VLazyImage from "v-lazy-image/v2";

export default {
  name: "SNAPIArticle",
  props: {
    newsSite: String,
    publishedAt: String,
    imageURL: String,
    title: String,
    articleURL: String
  },
  components:{
    VLazyImage
  },
  methods: {
    timeTranslate(results) {
      var day = new Date(results).getDate();
      var month = new Date(results).getMonth() + 1;
      var year = new Date(results).getFullYear();
      return `${month}/${day}/${year}`;
    },
    charCount(results, limit) {
      if (results.length > limit) {
        return results.slice(0, limit) + "...";
      } else {
        return results;
      }
    }
  }
};
</script>
<style scoped>
  #img{
    height: 300px;
  }
 .title{
   font-size: 16px; 
   color: black;
   font-weight: bold;
 }
 @media only screen and (max-width: 720px) {
   #img{
     height: 175px;
   }
 }
</style>
