<template>
    <section>
        <div class="col my-2">
          <div class="card shadow-sm">
            <v-lazy-image id="img" class="card-img img-fluid" :src="imageURL" :alt="newsSite + ' - ' + title" />
            <div class="p-2">
              <strong class="title">{{ title }}</strong>
              <div class="d-flex justify-content-between">
                <p class="text-muted">{{ newsSite }}</p>
                <p class="text-muted">{{timeTranslate(publishedAt)}}</p>
              </div>
              <div class="d-flex justify-content-around align-items-center">
                  <a :href="articleURL" class="btn btn-md btn-primary" target="_blank" rel="noopener">Read {{newsSite}}</a>
                  <router-link v-if="title.includes('Astra')" to="/astra" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Astra Info</router-link>
                  <router-link v-if="title.includes('Astrobotic')" to="/astrobotic" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Astrobotic Info</router-link>
                  <router-link v-if="title.includes('Blue Origin')" to="/blue-origin" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Blue Origin Info</router-link>
                  <router-link v-if="title.includes('Firefly')" to="/firefly-aerospace" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Firefly Info</router-link>
                  <router-link v-if="title.includes('Relativity Space')" to="/relativity-space" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Relativity Info</router-link>
                  <router-link v-if="title.includes('Rocket Lab')" to="/rocket-lab" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Rocket Lab Info</router-link>
                  <router-link v-if="title.includes('SpaceX')" to="/spacex" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">SpaceX Info</router-link>
                  <router-link v-if="title.includes('Sierra Space')" to="/sierra-space" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Sierra Space Info</router-link>
                  <router-link v-if="title.includes('ULA')" to="/united-launch-alliance" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">ULA Info</router-link>
                  <router-link v-if="title.includes('Virgin')" to="/virgin-galactic" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Virgin Info</router-link>
                  <router-link v-if="title.includes('Perseverance')" to="/perseverance" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Rover Info</router-link>
                  <router-link v-if="title.includes('Curiosity')" to="/curiosity" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Rover Info</router-link>
                  <router-link v-if="title.includes('Opportunity')" to="/opportunity" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Rover Info</router-link>
                  <router-link v-if="title.includes('Spirit')" to="/spirit" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Rover Info</router-link>
                  <router-link v-if="title.includes('Sojourner')" to="/sojourner" class="btn btn-md btn-primary" :aria-label="title + ' page on Rocket Downrange.com'">Rover Info</router-link>
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
    key: String,
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
